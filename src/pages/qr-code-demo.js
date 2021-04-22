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
  max-width: 280px;
  margin: auto;
`

const Text = styled.p`
  padding: 1em 0;
  font-weight: 700;
  font-size: 1.1em;
  padding-bottom: 1.5em;
`

const renderContent = intl => (
  <>
    <SEO title="QR-Code Demo" />
    <Title>{intl.formatMessage({ id: 'index.qr-code-demo.title' })}</Title>
    <h2>{intl.formatMessage({ id: 'index.qr-code-demo.subtitle' })}</h2>
    <Text>{intl.formatMessage({ id: 'index.qr-code-demo.content' })}</Text>
    <QRCode src={qrCodeTable7} alt="qr-code scan me" />
    <Text>{intl.formatMessage({ id: 'index.qr-code-demo.content2' })}</Text>
    <a
      href="https://demo.gastonsolution.com/?table=7"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>
        {intl.formatMessage({ id: 'index.qr-code-demo.calltoaction' })}
      </Button>
    </a>
  </>
)

const DemoModalPage = ({ intl }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, close }) => (
      <>
        {modal ? (
          <>
            <Link to={close}>
              <CloseButton />
            </Link>
            <Container>{renderContent(intl)}</Container>
          </>
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
