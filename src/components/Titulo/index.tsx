import React from 'react'
import styles from './Titulo.module.scss';
import {AiOutlineLine} from 'react-icons/ai'

interface tituloProps{
    titulo: string
}

function Titulo({titulo}: tituloProps) {
  return (
    <section className={styles.titulo}>
        <h2>{titulo}</h2>
        <AiOutlineLine />
    </section>
  )
}

export default Titulo