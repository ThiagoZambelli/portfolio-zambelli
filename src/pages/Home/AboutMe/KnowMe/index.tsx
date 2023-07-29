import React from 'react'
import paragrafos from './meConheca';
import styles from './KnowMe.module.scss';


function KnowMe() {
  return (
    <section className={styles.knowme}>
        <h2>Get to know me!</h2>
        {paragrafos.map(item => {
            return <p key={item}>{item}</p>
        })}
    </section>
  )
}

export default KnowMe