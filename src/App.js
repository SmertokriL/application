import logo from './logo.svg'
import './App.css'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="header_text">
          <p>Музыкальная премия SFORZANDO 12-13 Декабря 2020 года</p>
        </div>
        <div className="header_button">
          <button>Подать заявку</button>
        </div>
      </header>
      <footer className="footer">
        <div className="footer_text">Итоги конкурса</div>
        <div className="footer_inputs">
          <div className="footer_input1">
            {' '}
            <input type="text" name="name" />
          </div>
          <div className="footer_input2">
            {' '}
            <input type="text" name="name" />
          </div>
        </div>
        <div className="footer_button">
          <button>Открыть</button>
        </div>
      </footer>
    </div>
  )
}

export default App
