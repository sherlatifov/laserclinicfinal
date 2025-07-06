
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
        image: "/images/specialists/img1.png",
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
        <div className='row'>
            <div className='col-12 col-lg-6'>
                <div className="card rounded-4 w-100 h-100">
                    <div className="card-body px-1 py-1 w-auto">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
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
            </div>
            <div className="col-12 col-lg-6 h-100">
                <ul className='navbar-nav flex-column-reverse flex-md-row list-unstyled gap-3 w-auto h-100'>
                    <li className='nav-item w-100'>
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
                    <li className='nav-item w-100'>
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
            </div>
        </div>
        <div className="row g-4 mt-3">
            {profiles.map((profile) => (
            <div className="col-12 col-sm-6 col-lg-3" key={profile.id}>
                <ProfileCard profile={profile} />
            </div>
            ))}
        </div>
        <nav aria-label="Page navigation example" className='d-flex justify-content-center mt-5'>
            <ul className="pagination pagination-lg">
                <li className="page-item me-4">
                    <a className="page-link page-link-arrow px-3" href="#" aria-label="Previous">
                        <i className="bi bi-chevron-left"></i>
                    </a>
                </li>
                <li className="page-item"><a className="page-link active-pagination" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#">6</a></li>
                <li className="page-item"><a className="page-link" href="#">7</a></li>
                <li className="page-item ms-4">
                    <a className="page-link page-link-arrow px-3" href="#" aria-label="Next">
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  );
};