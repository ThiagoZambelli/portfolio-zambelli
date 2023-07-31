import React from 'react'
import styles from './WhoIAm.module.scss';
import list from './text.json';
import SubTitulo from 'components/SubTitulo';

function WhoIAm() {
    return (
        <section className={styles.whoIAm}>
            <SubTitulo texto='Who I am ...' />
            {list.map(e => <p key={e}>{e}</p>)}
        </section>
    )
}

export default WhoIAm