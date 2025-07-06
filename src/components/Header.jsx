import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${menuOpen ? styles.navExpanded : 'bg-white'}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex align-items-center">
          <Link className="">
            
          </Link>
          <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            Меню
            <span className="navbar-toggler-icon ms-2"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-2 mt-3 me-auto">
              <li className="nav-item">
                <NavLink className={`${styles.navLink}`} to="/specialists">Специалисты</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/about">О клинике</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/blog">Блог</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/reviews">Отзывы</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/discount">Акции и скидки</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/contacts">Контакты</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={styles.navLink} to="/faq">FAQ</NavLink>
              </li>
            </ul>
            <ul className='navbar-nav gap-2 mt-3'>
              <li className="nav-item">
                <div className="input-group">
                    <span class="input-group-text border border-secondary border-end-0 bg-white" id="icon-select">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#99A9C1" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#99A9C1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <select className="ps-0 form-control form-select form-select-lg border border-secondary border-start-0 fw-medium fs-6" aria-label="Large select example">
                        <option selected>Краснодар</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
              </li>
              <li className="nav-item">
                <div className="input-group">
                    <span className="input-group-text border border-end-0 border-secondary bg-white" id="icon-select">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="#99A9C1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <select className="ps-0 form-control form-select form-select-lg border border-secondary border-start-0 fw-medium fs-6" aria-label="Large select example">
                        <option selected>Адреса клиник</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-lg btn-dark px-4 py-1 w-100 border border-2 border-dark" to="/login">Войти</NavLink>
              </li>
            </ul>
          </div>
          </div>
      </nav>
    </header>
  );
}