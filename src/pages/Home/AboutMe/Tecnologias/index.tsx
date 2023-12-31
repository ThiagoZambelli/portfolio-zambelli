import React, { useEffect, useState } from 'react'
import styles from './Tecnologias.module.scss';
import { getTecnologias } from 'services/tecnologias';
import ITecnologia from 'interfaces/ITecnologia';
import TecnologiasCard from './TecnologiasCard';

function Tecnologias() {
    const [tecnologias, setTecnologias] = useState<ITecnologia[]>([]);

    useEffect(() => {
        pegaTecnologias();
    }, [])

    const pegaTecnologias = async () => {
        setTecnologias(await getTecnologias())
    }

    return (
        <section className={styles.tecnologias}>
            <h2>My known technologies.</h2>
            <div className={styles.tecnologias__cards}>
                {tecnologias.map(e => (
                    <TecnologiasCard key={e.id} {...e} />
                )
                )}
            </div>
        </section>
    )
}

export default Tecnologias