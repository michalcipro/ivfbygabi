/**
 * Vygeneruje podpisový pár pro lístky předplatného.
 *
 *   npx tsx scripts/klice.ts
 *
 * ------------------------------------------------------------- PROČ SKRIPT ---
 * Soukromý klíč nesmí projít chatem ani cizími záznamy. Proto se negeneruje
 * nikde jinde než na vašem počítači a vypíše se jen vám, do terminálu.
 *
 * Dvojice je ECDSA nad křivkou P-256. Ne proto, že by byla nejlepší, ale
 * proto, že ji umí ověřit i starší telefony. Aplikace běží v prohlížeči
 * a novější Ed25519 tam zdaleka všude není.
 */

async function main(): Promise<void> {
  const par = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, [
    'sign',
    'verify',
  ])

  const soukromy = await crypto.subtle.exportKey('jwk', par.privateKey)
  const verejny = await crypto.subtle.exportKey('jwk', par.publicKey)

  const zabal = (o: JsonWebKey) => Buffer.from(JSON.stringify(o), 'utf8').toString('base64')

  console.log('')
  console.log('Vložte obojí do Vercelu: Settings, Environment Variables.')
  console.log('Obě proměnné nastavte pro Production i Preview.')
  console.log('')
  console.log('--------------------------------------------------------------')
  console.log('BLOOMIA_PODPIS_KLIC   (tajné, jen do Vercelu, nikam jinam)')
  console.log('--------------------------------------------------------------')
  console.log(zabal(soukromy))
  console.log('')
  console.log('--------------------------------------------------------------')
  console.log('BLOOMIA_VEREJNY_KLIC  (není tajné, zapéká se do aplikace)')
  console.log('--------------------------------------------------------------')
  console.log(zabal(verejny))
  console.log('')
  console.log('Až to budete mít uložené, zavřete terminál nebo smažte jeho obsah.')
  console.log('Soukromý klíč se nikam neukládá, takže se po zavření ztratí.')
  console.log('Kdyby bylo potřeba ho vyměnit, spusťte skript znovu a nastavte obojí.')
  console.log('')
}

void main()
