import { useState, useEffect } from 'react'
import styles from './Certificados.module.scss';
import ICertificado from 'interfaces/ICertificados';
import { getCertificados } from 'services/certificados';
import Loader from 'components/Loader';
import { LiaCertificateSolid } from 'react-icons/lia';
import SubTitulo from 'components/SubTitulo';

function Certificados() {
    const [certificados, setCertificados] = useState<ICertificado[]>([]);
    const pegarCertificados = async () => {
        setCertificados(await getCertificados());
    }

    useEffect(() => {
        pegarCertificados();
    }, [])


    return (
        <section className={styles.certificados}>
            <SubTitulo texto='Certificates' />            
            <div className={styles.certificados__certificado}>
                {certificados.length > 0 ? certificados.map(e => (
                    <div key={e._id}>
                        <h3>{e.nome}</h3>
                        <h4><LiaCertificateSolid /> {e.escola} - {e.horas}h</h4>
                    </div>
                )) : <Loader />}
            </div>
        </section>
    )
}

export default Certificados