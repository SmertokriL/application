import React from 'react'
import HeaderButton from './HeaderButton'
function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <h1>
          Музыкальная премии SFORZANDO
          <br />
          12-13 Декабря 2020 года
        </h1>
      </div>
      <HeaderButton />
    </header>
  )
}

export default Header
