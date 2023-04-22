import './index.css';

import telegram from './img/telegram.svg';
import whatsapp from './img/whatsapp.svg';
import vk from './img/vk.svg';
import viber from './img/viber.svg';
import instagram from './img/instagram.svg';
import { Logo } from '../Logo/Logo';


export function Footer() {
    return <footer className='footer'> 
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='foooter__col'>
                <Logo />
                    <p className='footer__copyright'>Наелся и спит</p>
                </div>
                <div className='foooter__col'>
                    <nav className='menu-bottom'>
                        <a href='/' className='menu-bottom__item'>Каталог</a>
                        <a href='/' className='menu-bottom__item'>Акции</a>
                        <a href='/' className='menu-bottom__item'>Новости</a>
                        <a href='/' className='menu-bottom__item'>Обзор</a>
                    </nav>
                </div>
                <div className='foooter__col'>
                    <nav className='menu-bottom'>
                        <a href='/' className='menu-bottom__item'>Оплата</a>
                        <a href='/' className='menu-bottom__item'>Ответы на вопросы</a>
                        <a href='/' className='menu-bottom__item'>Обратная связь</a>
                        <a href='/' className='menu-bottom__item'>Контакты</a>
                    </nav>
                </div>
                <div className='foooter__col'>
                    <div className='contacts'>
                        +7 (990) 20-30-00
                        <ul className='socials contacts_socials'>
                        <li className=''>
                            <a href='/'>
                                <img src={telegram} alt=""/>
                             </a>
                        </li>
                        <li className=''>
                            <a href='/'>
                                <img src={whatsapp} alt=""/>
                            </a>
                        </li>
                        <li className=''>
                            <a href='/'>
                                <img src={vk} alt="" />
                            </a>
                        </li>
                        <li className=''>
                            <a href='/'>
                                <img src={viber} alt="" />
                            </a>
                        </li>
                        <li className=''>
                            <a href='/'>
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </footer>
 }
