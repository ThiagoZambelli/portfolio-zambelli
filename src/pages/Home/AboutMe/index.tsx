import React from 'react'
import styles from './AboutMe.module.scss';
import KnowMe from './KnowMe';
import Titulo from 'components/Titulo';
import Tecnologias from './Tecnologias';

function AboutMe() {
    return (
        <section className={styles.aboutme}>
            <div className={styles.aboutme__header}>
                <Titulo titulo='AboutMe' />
                <h3>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h3>
            </div>
            <div className={styles.aboutme__body}>
                <KnowMe />
                <Tecnologias />
            </div>
        </section>
    )
}

export default AboutMe