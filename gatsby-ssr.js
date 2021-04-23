const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="chatbot"
      id="chatbot"
      data-server="https://pierre.gastonsolution.com/webclient"
      defer
      src="https://pierre.gastonsolution.com/webclient/embed/bundle.js"
    />,
  ])
}
