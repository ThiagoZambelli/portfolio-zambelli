import React, { useState } from 'react';
import styles from './NavHeader.module.scss';
import foto from 'assets/minhaFoto.png';
import { Link as LinkRouter } from 'react-router-dom';
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
      {isMobile && <button onClick={abrirMenu}>{menuAberto ? <RiMenu4Line color='#32E0C4' /> : <RiMenu5Fill />}</button>}
      <nav className={menuAberto && isMobile ? styles.menuEscondido : ""}>
        <LinkRouter onClick={abrirMenu} to='/'>Home</LinkRouter>
        <a onClick={abrirMenu} href='#about'>About</a>
        <a onClick={abrirMenu} href='#projects'>Projects</a>
        <a onClick={abrirMenu} href='#contact'>Contact</a>
      </nav>
    </header>
  )
}

export default NavHeader