import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CloseButton from '../components/CloseButton'
import qrCodeTable7 from '../images/qr-code-table-7.jpg'
import { Button, Container } from '../styles'

const QRCode = styled.img`
  max-width: 320px;
  margin: auto;
`

const Text = styled.p`
  padding: 1em 0;
  font-weight: 700;
  font-size: 1.1em;
  padding-bottom: 1.5em;
`

const renderContent = () => (
  <>
    <SEO title="QR-Code Demo" />
    <h1>Gaston Demo</h1>
    <h2>Erleben Sie den Besuch bei Ihnen aus Sicht Ihrer Gäste!</h2>
    <Text>
      Testen Sie Gaston jetzt in drei einfachen Schritten auf Ihrem Smartphone
    </Text>

    <QRCode src={qrCodeTable7} alt="qr-code scan me" />

    <Text>
      In der Demoversion können Sie den Bezahlablauf durchspielen, es werden
      keine Gebühren verrechnet!
    </Text>

    <a
      href="https://demo.gastonsolution.com/?table=7"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>Ohne QR-Code testen </Button>
    </a>
  </>
)

const DemoModalPage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <>
        {modal ? (
          <>
            <Link to={closeTo}>
              <CloseButton />
            </Link>

            <Container>{renderContent()}</Container>
          </>
        ) : (
          <Layout>
            <Container>{renderContent()}</Container>
          </Layout>
        )}
      </>
    )}
  </ModalRoutingContext.Consumer>
)

export default DemoModalPage
