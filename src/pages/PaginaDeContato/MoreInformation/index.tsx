import React from 'react'
import WhoIAm from './WhoIAm'
import Titulo from 'components/Titulo'
import styles from './MoreInformation.module.scss';
import Formacao from './Formacao';
import Certificados from './Certificados';

function MoreInformation() {
  return (
    <section className={styles.moreInformation}>
      <Titulo titulo='More Information...' />
      <div className={styles.moreInformation__body}>
        <WhoIAm />
        <Formacao />
        <Certificados />
      </div>
    </section>
  )
}

export default MoreInformation