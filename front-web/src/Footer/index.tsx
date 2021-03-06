/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">


            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
               
                <a href="">
                    <LinkedinIcon />
                </a>
                <a href="">
                    <InstagramIcon />
                </a>
            </div>

        </footer>
    )
}

export default Footer;