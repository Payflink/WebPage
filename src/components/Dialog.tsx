import 'solid-js'
import { createSignal, JSX, Show } from 'solid-js'
import './Dialog.css'

export default function Dialog({
  children,
  openElement = 'open',
}: {
  children: JSX.Element
  openElement?: JSX.Element
}) {
  const [dialogOpen, setDialogOpen] = createSignal(false)
  let dialogRef

  const open = () => {
    typeof gtag_report_conversion != 'undefined' && gtag_report_conversion()
    setDialogOpen(true)
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    dialogRef.showModal()
  }
  const close = () => {
    setDialogOpen(false)
    dialogRef.close()
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }

  return (
    <>
      <div onClick={open}>{openElement}</div>
      <dialog ref={dialogRef}>
        <Show when={dialogOpen()}>
          <div className="dialog-layout">
            <div className="content">{children}</div>
            <div class="close">
              <button onClick={close} class="close-button">
                <svg viewBox="0 0 64 64" height="1em">
                  <title>Schliessen</title>
                  <path
                    stroke-width="10"
                    stroke="currentColor"
                    d="M4,4 L60,60 M4,60 L60,4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Show>
      </dialog>
    </>
  )
}
