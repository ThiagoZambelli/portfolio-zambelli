import React from 'react'
import styles from './Project.module.scss';
import IProjeto from 'interfaces/IProjetos';
import { Link } from 'react-router-dom';
import { AiOutlineDeploymentUnit, AiFillGithub, AiOutlineLine } from 'react-icons/ai';
import usePegaImagem from './hook/usePegaImagem';



function Project(projeto: IProjeto) {
  const pegaImagem = usePegaImagem();



  return (
    <section className={styles.project}>
      <img src={pegaImagem(projeto.numero)} alt="Imagem do projeto" />
      <div className={styles.project__body}>
        <h3 className={styles.project__body__nome}>{projeto.nome}</h3>
        <div className={styles.project__body__botoes}>
          <Link
            target="_blank"
            className={styles.project__body__botoes__deploy}
            to={projeto.deploy}
          >
            Go to Deploy
            <AiOutlineDeploymentUnit />
          </Link>
          <Link
            target="_blank"
            className={styles.project__body__botoes__git}
            to={projeto.linkRepositorio}
          >
            Go to GitHub
            <AiFillGithub />
          </Link>
        </div>
        <AiOutlineLine className={styles.project__body__dash} />
      </div>
    </section>
  )
}

export default Project