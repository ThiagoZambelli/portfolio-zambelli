import React, { useState } from 'react';
import styles from './NavHeader.module.scss';
import foto from 'assets/minhaFoto.png';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { RiMenu5Fill, RiMenu4Line } from 'react-icons/ri';

function NavHeader() {
  const [menuAberto, setMenuAberto] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 860px)' });

  const abrirMenu = () => {
    setMenuAberto(!menuAberto)
  }

  return (
    <header className={styles.navHeader}>
      <h1>
        <img src={foto} alt='Minha foto' />
        <p>Thiago Zambelli de Oliveira</p>
      </h1>
      {isMobile && <button onClick={abrirMenu}>{menuAberto ? <RiMenu4Line /> : <RiMenu5Fill />}</button>}
      <nav className={menuAberto && isMobile ? styles.menuEscondido : ""}>
        <Link to='/'>Home</Link>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
    </header>
  )
}

export default NavHeader