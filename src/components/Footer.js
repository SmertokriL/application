function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        <h1>Итоги конкурса</h1>
      </div>
      <div className="footer-input-container">
        <div>
          <input className="first" type="text" />
        </div>

        <div>
          <input className="second" type="text" />
        </div>
      </div>
      <button className="footer__button">Открыть</button>
    </footer>
  )
}

export default Footer
