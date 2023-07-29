import React from 'react'
import styles from './Apresentacao.module.scss';

function Apresentacao() {
  return (
    <section className={styles.apresentacao}>
        <h2>Hi, I'm Thiago Zambelli</h2>
        <p>A web developer focused on MERN stack development, constantly evolving.</p>
        <button><a href='#projects'>Projects</a></button>
    </section>
  )
}

export default Apresentacao