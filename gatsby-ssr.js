const React = require('react')

exports.onRenderBody = ({ pathname, setPostBodyComponents }) => {
  const langPath = /^\/(..)\//
  const match = pathname.match(langPath)
  const lang = match && match.length > 1 && match[1]

  if (lang === 'de') {
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
}
