import ITecnologia from 'interfaces/ITecnologia'
import React from 'react'
import styles from './TecnologiasCard.module.scss';
import { useNavigate } from 'react-router-dom';

function TecnologiasCard(tecnologia: ITecnologia) {

  const ir = useNavigate();
  const irParaPaginaDeTecnologia = (id: string) => {
    ir(`/${id}`);
  }

  return (
    <section onClick={() => irParaPaginaDeTecnologia(tecnologia._id)} className={styles.card}>
      <img
        src={tecnologia.imagem}
        alt={`Imagem da(o) ${tecnologia.nome}`}
        className={styles.card__front}
      />
      <img
        src={tecnologia.imagem}
        alt={`Imagem da(o) ${tecnologia.nome}`}
        className={styles.card__back}
      />
    </section>
  )
}

export default TecnologiasCard