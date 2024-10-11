import { useState } from 'react'
import { navItems, siteQuickInfo } from '../../constants'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(prevMenuActive => !prevMenuActive)
  }
  return (
    <header>
      <div className='container'>
        <div id="logo">
          <img src={siteQuickInfo.logo} />
          <span>{siteQuickInfo.name}</span>
        </div>

        <div onClick={toggleMenu} className='toggle-menu'>
          <img src='/assets/images/menu.svg' alt='menu-icon'/>
        </div>

        <nav className={menuActive ? "active" : ""}>
            {
                navItems.map((item, idx) => (
                  <li key={idx}>
                      <a href={item.link}  >{item.title}</a>
                  </li>
                ))
            }
        </nav>
      </div>
    </header>
  )
}

export default Navbar
