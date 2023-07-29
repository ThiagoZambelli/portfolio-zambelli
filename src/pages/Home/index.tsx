import React from 'react'
import Apresentacao from './Apresentacao'
import styles from './Home.module.scss';
import AboutMe from './AboutMe';


function Home() {
  return (
    <main className={styles.home} id='about'>
      <Apresentacao />
      <div className={styles.home__conteudo} >
        <AboutMe />        
      </div>
    </main>
  )
}

export default Home