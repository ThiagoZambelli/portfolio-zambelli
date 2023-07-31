import React from 'react'
import styles from './PaginaDeContato.module.scss';
import Contatos from './Contatos';
import MoreInformation from './MoreInformation';

function PaginaDeContato() {
  return (
    <section className={styles.contact}>
      <Contatos />
      <MoreInformation />
    </section>
  )
}

export default PaginaDeContato