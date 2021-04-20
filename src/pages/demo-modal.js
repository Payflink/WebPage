import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Layout from '../components/Layout'
import CloseButton from '../components/CloseButton'

const ModalWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`
const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`
const QRCode = styled.div``

const ExplanationListing = styled.div``

const renderContent = () => (
  <>
    <h2>Gaston jetzt auf ihren Smartphone testen</h2>
    <Container>
      <QRCode>
        QR code here
        <div>Scan me</div>
      </QRCode>

      <ExplanationListing>
        <ol>
          <li>QR-Code scannen</li>
          <li>Digitale Speisekarte wird angezeigt</li>
          <li>Bestellen und bezahlen</li>
        </ol>
      </ExplanationListing>
    </Container>
    <a
      href="https://demo.gastonsolution.com/?table=7"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ohne QR-Code scan testen
    </a>
  </>
)

const DemoModalPage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <>
        {modal ? (
          <ModalWrapper>
            <Link to={closeTo}>
              <CloseButton />
            </Link>

            {renderContent()}
          </ModalWrapper>
        ) : (
          <Layout>{renderContent()}</Layout>
        )}
      </>
    )}
  </ModalRoutingContext.Consumer>
)

export default DemoModalPage
