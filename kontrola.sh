#!/bin/sh
#
# Kontrola ostrého provozu BlooMia.
#
# Spustí se na vlastním počítači, protože ze serveru, kde se aplikace
# vyvíjí, není na internet vidět. Projde DNS, poštu, certifikáty,
# přesměrování, všechny stránky, bezpečnostní hlavičky a aplikaci.
#
#   sh kontrola.sh
#
D=mybloomia.com
OK=0
NG=0

pass() { printf "  \033[32mOK\033[0m     %s\n" "$1"; OK=$((OK + 1)); }
fail() { printf "  \033[31mCHYBA\033[0m  %s\n         %s\n" "$1" "$2"; NG=$((NG + 1)); }
je()   { if [ "$2" = "$3" ]; then pass "$1"; else fail "$1" "čekal „$3“, je „$2“"; fi; }
ma()   { if printf '%s' "$2" | grep -qi -- "$3"; then pass "$1"; else fail "$1" "chybí „$3“"; fi; }
nema() { if printf '%s' "$2" | grep -qi -- "$3"; then fail "$1" "našel „$3“, nemá tam být"; else pass "$1"; fi; }

echo
echo "=== DNS ==="
je "apex vrací jedinou adresu Vercelu" "$(dig +short $D A | tr '\n' ' ' | sed 's/ *$//')" "216.198.79.1"
ma "www je CNAME na Vercel" "$(dig +short www.$D CNAME)" "vercel-dns"

echo
echo "=== pošta zůstala nedotčená ==="
MX=$(dig +short $D MX | grep -c .)
if [ "$MX" -gt 0 ]; then pass "MX záznamy existují ($MX)"; else fail "MX záznamy" "žádné, pošta na doméně nechodí"; fi
ma "SPF záznam je na místě" "$(dig +short $D TXT)" "v=spf1"

echo
echo "=== certifikáty ==="
for H in $D www.$D; do
  je "certifikát pro $H je platný" "$(curl -s --max-time 15 -o /dev/null -w '%{ssl_verify_result}' https://$H)" "0"
done

echo
echo "=== přesměrování www na apex ==="
je "www odpovídá trvalým přesměrováním" \
   "$(curl -sI --max-time 15 https://www.$D -o /dev/null -w '%{http_code} %{redirect_url}')" \
   "308 https://$D/"

echo
echo "=== stránky ==="
for P in "/" "/obchodni-podminky" "/ochrana-osobnich-udaju" "/zdravotni-upozorneni" "/oprava" "/app/"; do
  je "$P" "$(curl -sL --max-time 25 -o /dev/null -w '%{http_code}' "https://$D$P")" "200"
done

echo
echo "=== bezpečnostní hlavičky ==="
HL=$(curl -sI --max-time 15 "https://$D/" | tr 'A-Z' 'a-z')
ma "Content-Security-Policy" "$HL" "content-security-policy"
ma "Strict-Transport-Security" "$HL" "strict-transport-security"
ma "X-Content-Type-Options" "$HL" "x-content-type-options"
ma "Referrer-Policy" "$HL" "referrer-policy"

echo
echo "=== aplikace ==="
APP=$(curl -s --max-time 60 "https://$D/app/index.html")
ma "aplikace se neindexuje" "$APP" "noindex"
STAMP=$(printf '%s' "$APP" | grep -o 'bloomia-sestaveno" content="[^"]*"' | head -1 | sed 's/.*content="//; s/"//')
if [ -n "$STAMP" ]; then pass "datum sestavení: $STAMP"; else fail "datum sestavení" "v aplikaci chybí"; fi
ma "aplikace se nekešuje natvrdo" "$(curl -sI --max-time 20 "https://$D/app/index.html" | tr 'A-Z' 'a-z')" "must-revalidate"
je "service worker je dostupný" "$(curl -s --max-time 20 -o /dev/null -w '%{http_code}' "https://$D/app/sw.js")" "200"
je "manifest je dostupný" "$(curl -s --max-time 20 -o /dev/null -w '%{http_code}' "https://$D/app/manifest.webmanifest")" "200"

echo
echo "=== vyhledávače ==="
ma "robots zakazuje aplikaci" "$(curl -s --max-time 15 "https://$D/robots.txt")" "disallow: /app/"
MAP=$(curl -s --max-time 15 "https://$D/sitemap.xml")
ma "sitemap ukazuje na $D" "$MAP" "https://$D/"
nema "sitemap nenabízí aplikaci" "$MAP" "/app"

echo
echo "=== identifikace provozovatele ==="
VOP=$(curl -s --max-time 20 "https://$D/obchodni-podminky")
ma "IČO v obchodních podmínkách" "$VOP" "21134154"
nema "žádný nevyplněný údaj" "$VOP" "DOPLNIT"

echo
if [ "$NG" -eq 0 ]; then
  printf "\033[32mVŠECHNO SEDÍ\033[0m  %s kontrol prošlo\n\n" "$OK"
else
  printf "\033[31mNÁLEZŮ: %s\033[0m  (prošlo %s)\n\n" "$NG" "$OK"
fi
