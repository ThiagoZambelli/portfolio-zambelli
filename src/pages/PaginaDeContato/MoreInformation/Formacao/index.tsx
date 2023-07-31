import React, { useEffect, useState } from 'react'
import styles from './Formacao.module.scss';
import IFormacao from 'interfaces/IFormacao';
import { getFormacoes } from 'services/formacoes';
import Loader from 'components/Loader';
import SubTitulo from 'components/SubTitulo';


function Formacao() {
    const [formacoes, setFormacoes] = useState<IFormacao[]>([]);

    const pegarFormacoesNaAPI = async () => {
        setFormacoes(await getFormacoes())
    }

    useEffect(() => {
        pegarFormacoesNaAPI();
    }, [])

    return (
        <section className={styles.formacoes}>
            <SubTitulo texto='Formation' />            
            <div>
                {formacoes.length > 0 ? formacoes.map(e => (
                    <div key={e._id} className={styles.formacoes__formacao}>
                        <h3>{e.nome}</h3>
                        <h4>{e.escola} - {e.tipo}</h4>
                    </div>
                )) : <Loader />}
            </div>
        </section>
    )
}

export default Formacao