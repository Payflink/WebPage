const gtagEvent = (eventName, eventParams) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') {
    // eslint-disable-next-line no-console
    console.warn(
      'Could not send Google Tag event because "window" or "window.gtag" are undefined. This should only happen while development, but not in production!'
    )

    return
  }

  window.gtag('event', eventName, eventParams)
}

export default gtagEvent
