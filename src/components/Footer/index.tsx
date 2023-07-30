import React from 'react'
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__body}>
                <div>
                    <h3>Social media</h3>
                    <Link to='https://www.linkedin.com/in/thiagozambelli'><AiFillLinkedin /></Link>
                    <Link to='https://github.com/ThiagoZambelli'><AiFillGithub /></Link>
                </div>
                <div>
                    <h3>Thiago Zambelli</h3>
                    <p>A programmer focused on the MERN stack, but not limited to it, always seeking to be better today than he was yesterday.</p>
                </div>
            </section>
            <section className={styles.footer__footer}>
                <p>&#169; copyright by Thiago Zambelli</p>
            </section>
        </footer>
    )
}

export default Footer