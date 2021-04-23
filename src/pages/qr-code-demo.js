import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CloseButton from '../components/CloseButton'
import qrCodeTable7 from '../images/qr-code-table-7.jpg'
import { Button, Container } from '../styles'

const Title = styled.h1`
  margin: 0;
`

const QRCode = styled.img`
  max-width: 220px;
  margin: auto;
`

const Text = styled.p`
  padding: 1em 0;
  font-weight: 700;
  padding-bottom: 0;
`

const GastonDemoLink = styled.a`
  display: flex;
  justify-content: center;
  padding-top: 4em;
  text-decoration: none;
`

const ModalContainer = styled(Container)`
  display: flex;
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  flex-direction: column;
  justify-content: flex-start;
  flex-flow: column nowrap;
  padding: 0;
`

const renderContent = intl => (
  <>
    <SEO title="QR-Code Demo" />
    <Title>{intl.formatMessage({ id: 'index.qr-code-demo.title' })}</Title>
    <h2>{intl.formatMessage({ id: 'index.qr-code-demo.subtitle' })}</h2>
    <Text>{intl.formatMessage({ id: 'index.qr-code-demo.content' })}</Text>
    <Text>{intl.formatMessage({ id: 'index.qr-code-demo.content2' })}</Text>
    <QRCode src={qrCodeTable7} alt="qr-code scan me" />
    <GastonDemoLink
      href="https://demo.gastonsolution.com/?table=7"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>
        {intl.formatMessage({ id: 'index.qr-code-demo.calltoaction' })}
      </Button>
    </GastonDemoLink>
  </>
)

const DemoModalPage = ({ intl }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, close }) => (
      <>
        {modal ? (
          <ModalContainer>
            <Link to={close}>
              <CloseButton />
            </Link>
            <Container>{renderContent(intl)}</Container>
          </ModalContainer>
        ) : (
          <Layout>
            <Container>{renderContent(intl)}</Container>
          </Layout>
        )}
      </>
    )}
  </ModalRoutingContext.Consumer>
)

export default injectIntl(DemoModalPage)
