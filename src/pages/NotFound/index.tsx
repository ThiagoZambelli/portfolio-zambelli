import React from 'react'
import notFound from './assets/notFound.svg';
import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';


function NotFoud() {
  const ir = useNavigate()
  const goToHome = () => {
    ir('/')
  }
  return (
    <section className={styles.notFound}>
      <img src={notFound} alt="" />
      <button onClick={goToHome}>Go to Home</button>
    </section>
  )
}

export default NotFoud