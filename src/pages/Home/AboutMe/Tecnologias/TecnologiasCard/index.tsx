import ITecnologia from 'interfaces/ITecnologia'
import React from 'react'
import styles from './TecnologiasCard.module.scss';

function TecnologiasCard(tecnologia: ITecnologia) {
  return (
    <section className={styles.card}>
        <img src={tecnologia.imagem} alt={`Imagem da(o) ${tecnologia.nome}`} />
    </section>
  )
}

export default TecnologiasCard