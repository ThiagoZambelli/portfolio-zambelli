import React, { useEffect, useState } from 'react'
import styles from './Projects.module.scss';
import Titulo from 'components/Titulo';
import IProjeto from 'interfaces/IProjetos';
import { getProjetos } from 'services/projetos';
import Project from './Project';

function Projects() {
    const [projetos, setProjetos] = useState<IProjeto[]>([]);

    useEffect(() => {
        pegaProjetos();
    }, [])

    const pegaProjetos = async () => {
        setProjetos(await getProjetos())
    }

    return (
        <section className={styles.projetos} id='projects'>
            <header className={styles.projetos__header}>
                <Titulo titulo='Projects' />
                <h3>In this section, you will find a selection of my personal and study projects, demonstrating my journey of continuous professional improvement. They reflect my commitment to developing technical and creative skills.</h3>
            </header>
            <div className={styles.projetos__body}>
                {projetos.map(projeto => (
                    <Project key={projeto.id} {...projeto} />
                ))}

            </div>
        </section>
    )
}

export default Projects