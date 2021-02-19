function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">Итоги конкурса</div>
      <div className="footer__input-container">
        <div className="footer__left-input">
          {' '}
          <input type="text" name="name" />
        </div>
        <div className="footer__right-input">
          {' '}
          <input type="text" name="name" />
        </div>
      </div>
      <div className="footer__button">
        <button>Открыть</button>
      </div>
    </footer>
  )
}

export default Footer
