
import React, { useState } from 'react';
import ProfileCard from "../components/ProfileCard";
import { Link } from 'react-router-dom';

export default function Specialists() {
    const [activeTab, setActiveTab] = useState('home');
    const profiles = [
    {
        id: 1,
        firstName: "Анастасия",
        lastName: "Литвинова",
        specialty: "Врач-дерматовенеролог, косметолог",
        image: "images/specialists/img1.png",
    },
    {
        id: 2,
        firstName: "Марина",
        lastName: "Ионайтене",
        specialty: "Косметолог",
        image: "/images/specialists/img2.png",
    },
    {
        id: 3,
        firstName: "Людмила",
        lastName: "Качарова",
        specialty: "Косметолог",
        image: "/images/specialists/img3.png",
    },
    {
        id: 4,
        firstName: "Марина",
        lastName: "Горшкова",
        specialty: "Врач-дерматовенеролог, косметолог",
        image: "/images/specialists/img4.png",
    },
    {
        id: 5,
        firstName: "Елена",
        lastName: "Кузнецова",
        specialty: "Маркетолог",
        image: "/images/specialists/img3.png",
    },
    {
        id: 6,
        firstName: "Елена",
        lastName: "Кузнецова",
        specialty: "Маркетолог",
        image: "/images/specialists/img2.png",
    },
    {
        id: 7,
        firstName: "Елена",
        lastName: "Кузнецова",
        specialty: "Маркетолог",
        image: "/images/specialists/img4.png",
    },
    {
        id: 8,
        firstName: "Елена",
        lastName: "Кузнецова",
        specialty: "Маркетолог",
        image: "/images/specialists/img1.png",
    },
    {
        id: 9,
        firstName: "Елена",
        lastName: "Кузнецова",
        specialty: "Маркетолог",
        image: "/images/specialists/img3.png",
    },
    {
        id: 10,
        firstName: "Елена",
        lastName: "Кузнецова",
        specialty: "Маркетолог",
        image: "/images/specialists/img2.png",
    },
    {
        id: 11,
        firstName: "Елена",
        lastName: "Кузнецова",
        specialty: "Маркетолог",
        image: "/images/specialists/img4.png",
    },
    {
        id: 12,
        firstName: "Елена",
        lastName: "Кузнецова",
        specialty: "Маркетолог",
        image: "/images/specialists/img1.png",
    },
    ];
  return (
    <div className='container-fluid py-5'>
        <h1 className='section-title'>Специалисты</h1>
        <nav className='d-flex justify-content-between w-100 flex-column flex-lg-row mt-5'>
                <div className="card rounded-4">
                    <div className="card-body px-0 py-1">
                        <ul className="nav mx-0 nav-pills d-flex align-items-center justify-content-around">
                            <li className="nav-item ">
                                <button
                                    className={`nav-link rounded text-dark fw-medium ${activeTab === 'home' ? 'bg-secondary-subtle' : ''}`}
                                    onClick={() => setActiveTab('home')}
                                >
                                    Все
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link text-dark fw-medium ${activeTab === 'profile' ? 'bg-secondary-subtle' : ''}`}
                                    onClick={() => setActiveTab('profile')}
                                >
                                    Врачи
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link border-start text-dark fw-medium ${activeTab === 'contact' ? 'bg-secondary-subtle' : ''}`}
                                    onClick={() => setActiveTab('contact')}
                                >
                                    Косметологи
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className='d-flex flex-column-reverse flex-lg-row list-unstyled gap-3 mt-3 mt-lg-0'>
                    <li className='nav-item'>
                        <div className="input-group">
                            <span className="input-group-text border border-secondary border-end-0 bg-transparent" id="icon-select">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#99A9C1" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#99A9C1" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <select className="ps-0 form-control form-select border border-secondary border-start-0 fw-medium fs-6 bg-transparent" aria-label="Large select example">
                                <option selected>Краснодар</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>  
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div className='input-group'>
                            <form className="d-flex input-group" role="search">
                                <input className="form-control border border-secondary border-end-0 bg-transparent fs-small fw-medium" type="search" placeholder="Поиск" aria-label="Search"/>
                                <span className="input-group-text border border-secondary border-start-0 bg-transparent" id="icon-select">
                                    <i className="bi bi-search text-secondary"></i>
                                </span>
                            </form>  
                        </div>
                    </li>
                </ul>
        </nav>
        <div className="row g-4 mt-3">
            {profiles.map((profile) => (
            <div className="col-12 col-sm-6 col-lg-3" key={profile.id}>
                <ProfileCard profile={profile} />
            </div>
            ))}
        </div>
    </div>
  );
};