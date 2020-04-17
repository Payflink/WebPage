import React from 'react'
import { Link, navigate } from 'gatsby-plugin-intl'
import DefaultButton from '../styles/Button'

const TakeAway = () => (
  <>
    <h2>Neu: Take Away und Home Delivery</h2>
    <p
      css={`
        font-weight: bold;
      `}
    >
      Restaurants wurden mit der Corona-Krise empfindlich getroffen. Mit dem
      Lockdown brach vom einen Moment zum anderen jeglicher Umsatz weg. Auch
      wenn der Betrieb der Lokale wieder erlaubt sein wird, bleiben sicher
      empfindliche Einschränkungen für eine längere Zeit bestehen.
    </p>
    <p>
      Es braucht also Kreativität und neue Wege, um wieder zum Umsatz vor der
      Krise zu kommen. Wichtig bleibt dabei, die Schutzmassnahmen für die Gäste
      und das Personal einzuhalten. Wir haben uns überlegt, wie wir die Betriebe
      dabei unterstützen können.
    </p>
    <h3>Take Away und Home Delivery</h3>
    <p>
      Diese Variante haben schon einige eingeschlagen. Das eröffnet schnell neue
      Absatzwege. Einige Restaurants aktualisieren ihre Homepage mit dem Angebot
      und der Telefonnummer. Andere stellen kurzerhand eine Tafel auf die
      Strasse.
    </p>
    <p>
      Das sind schnelle und pragmatische Massnahmen, die auch funktionieren.
      Doch sie lassen sich in mindestens zwei Punkten noch optimieren:
    </p>
    <ul>
      <li>
        Mit einem gut geführten Bestellprozess auf der Homepage lassen sich mehr
        Kunden erreichen. Das Bestellen wird einfacher.
      </li>
      <li>
        Bei grösserem Volumen muss der Prozess von der Bestellung, Bezahlung bis
        zur Lieferung besser organisiert werden.
      </li>
    </ul>
    <h3>Wie sieht die Lösung aus?</h3>
    <p>
      Wir legen viel Wert darauf, dass unsere Lösung schnell und kostengünstig
      eingeführt ist. Darum gibt es für Restaurantbetreiber nur die folgenden
      Schritte zu tun:
    </p>
    <ol>
      <li>
        <Link to="/pricing/takeaway/enrol">Melden Sie sich kostenlos an</Link>
      </li>
      <li>Erfassen Sie Ihre Speisekarte online</li>
      <li>Binden Sie die Speisekarte auf Ihrer Homepage ein</li>
    </ol>
    <p>
      Natürlich können Sie mit einigen Einstellungen Einfluss auf den
      Bestellungsprozess nehmen:
    </p>
    <ul>
      <li>Definieren Sie Ihre Öffnungszeiten</li>
      <li>Sagen Sie uns, wie viel Vorlaufzeit sie benötigen</li>
      <li>Bestimmen Sie den Lieferzuschlag</li>
    </ul>
    <h3>Was kostet das?</h3>
    <p>
      Wir haben bewusst auf Abo-Kosten verzischtet. Falls keine Bestellung über
      Gaston rein kommt, sollen Sie auch nichts bezahlen müssen. Wir behalten
      aber 5 % des Umsatzes für die Weiterentwicklung und Wartung von Gaston.
    </p>
    <DefaultButton
      css={{ marginTop: 20 }}
      onClick={() => navigate('/pricing/')}
    >
      Unsere Angebote
    </DefaultButton>
  </>
)

export default TakeAway
