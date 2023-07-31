import React from 'react'
import styles from './SubTitulo.module.scss';
import { AiOutlineLine } from 'react-icons/ai';

interface ISubTitulo {
    texto: string
}

function SubTitulo({ texto }: ISubTitulo) {
    return (
        <section className={styles.subTitulo}>
            <h3>{texto}</h3>
            <AiOutlineLine />
        </section>
    )
}

export default SubTitulo