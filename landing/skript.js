// Horní lišta se ukazuje, teprve když hero odjede z obrazovky. Dvě loga
// nad sebou vypadají jako chyba sazby, ale tlačítko má být po ruce
// od chvíle, kdy ho žena přestane vidět v hero.
(function () {
  var hero = document.querySelector('.hero')
  var lista = document.getElementById('lista')
  if (!hero || !lista || !('IntersectionObserver' in window)) return
  new IntersectionObserver(function (z) {
    lista.classList.toggle('vidi', !z[0].isIntersecting)
  }, { rootMargin: '-72px 0px 0px 0px' }).observe(hero)
})()

/*
 * Pohyb.
 *
 * Všechno ručně, bez knihovny: stránka se staví do jednoho souboru a
 * přibalit kvůli pár přechodům padesát kilobajtů GSAP by bylo drahé.
 *
 * Jedno pravidlo nad všemi: kdo má v systému zapnuté „omezit pohyb“,
 * nedostane nic. Ani odhalování, ani parallax, ani počítání čísel.
 *
 * Středník na začátku je schválně: nad tímhle blokem končí jiná IIFE bez
 * středníku a bez něj by se prohlížeč pokusil zavolat její výsledek.
 */
;(function () {
  var tise = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var korenu = document.documentElement

  // ---------------------------------------------------- vstup po načtení ---
  // Hero se poskládá shora dolů. Zpoždění je v CSS proměnné, ať se
  // nemusí pro každý prvek psát vlastní pravidlo.
  var vstup = document.querySelectorAll('.pr')
  for (var i = 0; i < vstup.length; i++) {
    vstup[i].style.setProperty('--d', (i * 0.09).toFixed(2) + 's')
  }
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { korenu.className += ' nacteno' })
  })

  if (tise || !('IntersectionObserver' in window)) {
    // Bez pozorovatele se nesmí nic nechat schované.
    var vse = document.querySelectorAll('.rv')
    for (var j = 0; j < vse.length; j++) vse[j].className += ' je'
    return
  }

  // ------------------------------------------------- odhalení při scrollu ---
  // Sourozenci ve stejném rodiči jdou po sobě, ne naráz. Strop je kvůli
  // dlouhým seznamům: u desátého prvku už by se na zpoždění čekalo.
  var rv = document.querySelectorAll('.rv')
  var poradi = new Map()
  for (var k = 0; k < rv.length; k++) {
    var rodic = rv[k].parentNode
    var n = poradi.get(rodic) || 0
    poradi.set(rodic, n + 1)
    rv[k].style.setProperty('--d', (Math.min(n, 5) * 0.08).toFixed(2) + 's')
  }

  var oko = new IntersectionObserver(function (zaznamy) {
    for (var z = 0; z < zaznamy.length; z++) {
      if (!zaznamy[z].isIntersecting) continue
      zaznamy[z].target.className += ' je'
      oko.unobserve(zaznamy[z].target)
    }
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 })
  for (var m = 0; m < rv.length; m++) oko.observe(rv[m])

  // --------------------------------------------------------- počítání čísel ---
  // Čísla v přehledu dopočítají k výsledku, když na ně dojde řada.
  // Suffix („+“) zůstává, aby se z „404+“ nestalo „404“.
  var cisla = document.querySelectorAll('.cisla b')
  var okoCisel = new IntersectionObserver(function (zaznamy) {
    for (var z = 0; z < zaznamy.length; z++) {
      if (!zaznamy[z].isIntersecting) continue
      napocitej(zaznamy[z].target)
      okoCisel.unobserve(zaznamy[z].target)
    }
  }, { threshold: 0.6 })
  for (var c = 0; c < cisla.length; c++) {
    var shoda = /^(\d+)(.*)$/.exec(cisla[c].textContent.trim())
    if (!shoda) continue
    cisla[c].setAttribute('data-do', shoda[1])
    cisla[c].setAttribute('data-za', shoda[2])
    okoCisel.observe(cisla[c])
  }

  function napocitej(prvek) {
    var cil = parseInt(prvek.getAttribute('data-do'), 10)
    var za = prvek.getAttribute('data-za') || ''
    var zacatek = 0
    var doba = 900
    function krok(cas) {
      if (!zacatek) zacatek = cas
      var podil = Math.min((cas - zacatek) / doba, 1)
      // Zpomaluje ke konci, ať poslední číslice nedoskočí natvrdo.
      var hodnota = Math.round(cil * (1 - Math.pow(1 - podil, 3)))
      prvek.textContent = hodnota + za
      if (podil < 1) requestAnimationFrame(krok)
    }
    requestAnimationFrame(krok)
  }

  // ------------------------------------------------------ parallax telefonu ---
  // Jeden posluchač, jeden snímek. Čtení rozměrů mimo rAF by při scrollu
  // nutilo prohlížeč přepočítávat rozložení na každý pixel.
  var telefon = document.querySelector('.hero-obraz .telefon')
  if (!telefon) return
  var ceka = false
  function snimek() {
    ceka = false
    var r = telefon.getBoundingClientRect()
    var vyska = window.innerHeight || 1
    if (r.bottom < 0 || r.top > vyska) return
    var stred = (r.top + r.height / 2 - vyska / 2) / vyska
    telefon.style.setProperty('--py', (stred * -22).toFixed(1) + 'px')
  }
  function pozadej() { if (!ceka) { ceka = true; requestAnimationFrame(snimek) } }
  window.addEventListener('scroll', pozadej, { passive: true })
  window.addEventListener('resize', pozadej, { passive: true })
  snimek()
})()

/*
 * Telefony.
 *
 * Vlastní blok schválně. Stránkování galerie je informace, ne ozdoba,
 * a musí fungovat i pro toho, kdo má zapnuté „omezit pohyb“; blok nad
 * tímhle se v takovém případě ukončí hned na začátku.
 */
;(function () {
  var tise = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // ------------------------------------------------- displej se rozsvítí ---
  if (!tise && 'IntersectionObserver' in window) {
    var oko = new IntersectionObserver(function (z) {
      for (var i = 0; i < z.length; i++) {
        if (!z[i].isIntersecting) continue
        z[i].target.className += ' vzhuru'
        oko.unobserve(z[i].target)
      }
    }, { threshold: 0.25 })
    var telefony = document.querySelectorAll('.telefon')
    for (var t = 0; t < telefony.length; t++) oko.observe(telefony[t])
  }

  // ------------------------------------------ galerie reaguje na listování ---
  var gal = document.querySelector('.galerie')
  var strankovani = document.querySelector('[data-strankovani]')
  if (!gal || !strankovani) return

  var figs = gal.querySelectorAll('figure')
  for (var g = 0; g < figs.length; g++) strankovani.appendChild(document.createElement('i'))
  var kolecka = strankovani.querySelectorAll('i')
  var ceka = false

  function prepocti() {
    ceka = false
    // Měří se z obrazovky, ne z `offsetLeft`: ten by počítal od sekce,
    // ne od pásu. Střed prvku se škálováním ani otočením nehne, takže
    // se tím výpočet nezacyklí.
    var r = gal.getBoundingClientRect()
    if (!r.width) return
    var stred = r.left + r.width / 2
    var nej = 0
    var nejd = Infinity

    for (var i = 0; i < figs.length; i++) {
      var f = figs[i]
      var fr = f.getBoundingClientRect()
      var sf = fr.left + fr.width / 2
      var d = Math.min(1, Math.abs(sf - stred) / (r.width / 2))
      if (!tise) {
        f.style.setProperty('--s', (1 - d * 0.1).toFixed(3))
        f.style.setProperty('--r', ((sf > stred ? 1 : -1) * d * 2.5).toFixed(2) + 'deg')
        f.style.setProperty('--o', (1 - d * 0.45).toFixed(2))
      }
      if (d < nejd) { nejd = d; nej = i }
    }
    for (var k = 0; k < kolecka.length; k++) kolecka[k].className = k === nej ? 'je' : ''
  }

  function pozadej() { if (!ceka) { ceka = true; requestAnimationFrame(prepocti) } }
  gal.addEventListener('scroll', pozadej, { passive: true })
  window.addEventListener('resize', pozadej, { passive: true })
  prepocti()
})()
