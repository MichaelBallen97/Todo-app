

function Notification({show, children}) {
  return (
    <section className={show ? "form-notification" : "hidde-notification"}>
      { show && children }
    </section>
  )
}

export default Notification