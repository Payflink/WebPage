import './Dialog.css'

export default function Counter({ children, buttonText = 'Anzeigen' }) {
  let dialogRef

  const open = () => {
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    dialogRef.showModal()
  }
  const close = () => {
    dialogRef.close()
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }

  return (
    <>
      <div>
        <button class="button" onClick={open}>
          {buttonText}
        </button>
      </div>
      <dialog ref={dialogRef}>
        <div className="dialog-layout">
          <div className="content">{children}</div>
          <div class="right">
            <button onClick={close} class="close-button">
              <svg viewBox="0 0 64 64" height="1em">
                <path
                  stroke-width="10"
                  stroke="currentColor"
                  d="M4,4 L60,60 M4,60 L60,4"
                />
              </svg>
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
