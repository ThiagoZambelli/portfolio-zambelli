import React from 'react'
import Apresentacao from './Apresentacao'
import styles from './Home.module.scss';
import AboutMe from './AboutMe';
import Projects from './Projects';


function Home() {
  return (
    <main className={styles.home} id='about'>
      <Apresentacao />
      <div className={styles.home__conteudo} >
        <AboutMe /> 
        <Projects />       
      </div>
    </main>
  )
}

export default Home