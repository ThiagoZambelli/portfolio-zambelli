import React from 'react'
import styles from './Contatos.module.scss';
import Titulo from 'components/Titulo';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillGithub, AiOutlineDownload, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

function Contatos() {
    return (
        <section className={styles.contatos}>
            <Titulo titulo='My Contacts' />
            <div className={styles.contatos__body}>
                <div>
                    <h3>Social media</h3>
                    <Link to={'https://www.linkedin.com/in/thiagozambelli'}><AiFillLinkedin />Linkedin</Link>
                    <Link to={'https://github.com/ThiagoZambelli'}><AiFillGithub />Github</Link>
                </div>
                <div>
                    <h3>Resume</h3>
                    <a download href={'../assets/Resume - Thiago Zambelli.pdf'}><AiOutlineDownload />Resume</a>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <p><strong><AiOutlineMail />Email:</strong> thiagozamoliveira@gmail.com</p>
                    <p><strong><AiOutlinePhone />Phone Number:</strong>(52) 9 9590-4824</p>
                </div>
            </div>
        </section>
    )
}

export default Contatos