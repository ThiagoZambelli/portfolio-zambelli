import React, { useEffect, useState } from 'react'
import styles from './PaginaTecnologia.module.scss';
import { useLocation } from 'react-router-dom';
import { getTecnologia } from 'services/tecnologias';
import ITecnologia from 'interfaces/ITecnologia';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import NotFoud from 'pages/NotFound';

function PaginaTecnologia() {
  const paginaAtual = useLocation()
  const id = paginaAtual.pathname.slice(12);
  const [tecnologia, setTecnologia] = useState<ITecnologia>()

  const pegaTecnologia = async (id: string) => {
    const response = await getTecnologia(id);
    setTecnologia(response);
  }

  useEffect(() => {
    pegaTecnologia(id);
  }, [id])

  console.log(tecnologia);
  console.log(id);
  const estilo = {
    color: tecnologia?.corBase
  }

  return (
    tecnologia ? <section className={styles.paginaTecnologia}>
    <section className={styles.paginaTecnologia__header}>
      <img src={tecnologia?.imagem} alt={`Logo do(a) ${tecnologia?.nome}`} />
      <h2 style={estilo}>{tecnologia?.nome}</h2>
    </section>
    <section className={styles.paginaTecnologia__body}>
      <h3 style={estilo}><IoIosArrowForward />{tecnologia?.titulo}<IoIosArrowBack /></h3>
      <p>{tecnologia?.descricao}</p>
    </section>
  </section> : <NotFoud />
  )
}

export default PaginaTecnologia