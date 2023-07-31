import React from 'react'
import styles from './PaginaDeContato.module.scss';
import Contatos from './Contatos';

function PaginaDeContato() {
  return (
    <section className={styles.contact}>
      <Contatos />
    </section>
  )
}

export default PaginaDeContato