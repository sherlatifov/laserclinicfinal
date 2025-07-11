import { Link } from 'react-router-dom';
import YandexMap from '../components/YandexMap'

export default function Contact() {
    const cards = [
    {
        id: 1,
        cardTitle: "Отдел контроля качества",
        cardText: "Для жалоб, предложений и оценки сервиса",
        cardPhone: "+7 (XXX) XXX-XX-XX ",
        cardEmail: "report@laserclinic.ru",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                <path d="M20.4997 24L22.8331 26.3333L27.4997 21.6667M14.4914 20.0567C14.3211 19.2896 14.3473 18.492 14.5674 17.7377C14.7876 16.9835 15.1946 16.297 15.7508 15.742C16.307 15.187 16.9943 14.7814 17.749 14.5628C18.5037 14.3443 19.3014 14.3198 20.0681 14.4917C20.4901 13.8317 21.0714 13.2886 21.7585 12.9123C22.4456 12.5361 23.2164 12.3389 23.9997 12.3389C24.7831 12.3389 25.5539 12.5361 26.241 12.9123C26.9281 13.2886 27.5094 13.8317 27.9314 14.4917C28.6993 14.319 29.4983 14.3434 30.2542 14.5625C31.0102 14.7816 31.6984 15.1883 32.2549 15.7449C32.8114 16.3014 33.2181 16.9896 33.4372 17.7455C33.6563 18.5014 33.6807 19.3005 33.5081 20.0683C34.168 20.4903 34.7112 21.0717 35.0874 21.7588C35.4636 22.4459 35.6608 23.2167 35.6608 24C35.6608 24.7834 35.4636 25.5541 35.0874 26.2412C34.7112 26.9283 34.168 27.5097 33.5081 27.9317C33.68 28.6984 33.6555 29.4961 33.4369 30.2508C33.2183 31.0055 32.8127 31.6928 32.2577 32.249C31.7027 32.8051 31.0163 33.2122 30.262 33.4323C29.5078 33.6525 28.7101 33.6786 27.9431 33.5083C27.5216 34.1709 26.9398 34.7163 26.2515 35.0942C25.5633 35.4721 24.7908 35.6702 24.0056 35.6702C23.2204 35.6702 22.4479 35.4721 21.7596 35.0942C21.0713 34.7163 20.4895 34.1709 20.0681 33.5083C19.3014 33.6802 18.5037 33.6558 17.749 33.4372C16.9943 33.2186 16.307 32.813 15.7508 32.258C15.1946 31.703 14.7876 31.0165 14.5674 30.2623C14.3473 29.508 14.3211 28.7104 14.4914 27.9433C13.8264 27.5225 13.2786 26.9402 12.899 26.2508C12.5194 25.5613 12.3203 24.7871 12.3203 24C12.3203 23.213 12.5194 22.4387 12.899 21.7493C13.2786 21.0598 13.8264 20.4776 14.4914 20.0567Z" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ),
    },
    {
        id: 2,
        cardTitle: "Отдел маркетинга и рекламы",
        cardText: "Сотрудничество с блогерами, рекламные запросы",
        cardPhone: "+7 (XXX) XXX-XX-XX ",
        cardEmail: "marketing@laserclinic.ru",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                <path d="M33.3342 13.5V18.1667M35.6675 15.8333H31.0008M14.6675 29.8333V32.1667M15.8342 31H13.5008M21.594 28.0833C21.4898 27.6796 21.2794 27.3111 20.9845 27.0163C20.6897 26.7214 20.3212 26.511 19.9175 26.4068L12.76 24.5612C12.6379 24.5265 12.5304 24.453 12.4539 24.3517C12.3773 24.2504 12.3359 24.1269 12.3359 24C12.3359 23.8731 12.3773 23.7496 12.4539 23.6483C12.5304 23.547 12.6379 23.4735 12.76 23.4388L19.9175 21.592C20.3211 21.4879 20.6895 21.2777 20.9843 20.983C21.2791 20.6884 21.4897 20.3202 21.594 19.9167L23.4397 12.7592C23.474 12.6366 23.5474 12.5286 23.6489 12.4516C23.7503 12.3747 23.8741 12.333 24.0014 12.333C24.1287 12.333 24.2525 12.3747 24.354 12.4516C24.4554 12.5286 24.5288 12.6366 24.5632 12.7592L26.4077 19.9167C26.5118 20.3204 26.7223 20.6889 27.0171 20.9837C27.3119 21.2786 27.6804 21.489 28.0842 21.5932L35.2417 23.4377C35.3647 23.4716 35.4733 23.545 35.5506 23.6466C35.628 23.7482 35.6699 23.8723 35.6699 24C35.6699 24.1277 35.628 24.2518 35.5506 24.3534C35.4733 24.455 35.3647 24.5284 35.2417 24.5623L28.0842 26.4068C27.6804 26.511 27.3119 26.7214 27.0171 27.0163C26.7223 27.3111 26.5118 27.6796 26.4077 28.0833L24.562 35.2408C24.5277 35.3634 24.4542 35.4714 24.3528 35.5484C24.2514 35.6253 24.1275 35.667 24.0002 35.667C23.8729 35.667 23.7491 35.6253 23.6477 35.5484C23.5463 35.4714 23.4728 35.3634 23.4385 35.2408L21.594 28.0833Z" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ),
    },
    {
        id: 3,
        cardTitle: "HR-отдел",
        cardText: "Вакансии и трудоустройство",
        cardPhone: "+7 (XXX) XXX-XX-XX ",
        cardEmail: "hr@laserclinic.ru",
        cardBg: 'rgba(61, 60, 61, 1)',
        cardTextColor: "text-light",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                <path d="M20.5 33.3333L24 26.3333M24 26.3333L27.5 33.3333M24 26.3333V21.6667M17 19.3333L24 21.6667M24 21.6667L31 19.3333M25.1667 15.8333C25.1667 16.4777 24.6443 17 24 17C23.3557 17 22.8333 16.4777 22.8333 15.8333C22.8333 15.189 23.3557 14.6667 24 14.6667C24.6443 14.6667 25.1667 15.189 25.1667 15.8333Z" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ),
    },
    {
        id: 4,
        cardTitle: "Для партнёров и поставщиков",
        cardText: "Коммерческие предложения, закупки оборудования",
        cardPhone: "+7 (XXX) XXX-XX-XX",
        cardEmail: "marketing@laserclinic.ru",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                <path d="M22.834 29.8333L25.1673 32.1666C25.3971 32.3965 25.67 32.5788 25.9702 32.7031C26.2705 32.8275 26.5923 32.8915 26.9173 32.8915C27.2423 32.8915 27.5641 32.8275 27.8644 32.7031C28.1647 32.5788 28.4375 32.3965 28.6673 32.1666C28.8971 31.9368 29.0794 31.664 29.2038 31.3637C29.3282 31.0635 29.3922 30.7416 29.3922 30.4166C29.3922 30.0916 29.3282 29.7698 29.2038 29.4696C29.0794 29.1693 28.8971 28.8965 28.6673 28.6666M26.334 26.3333L29.2507 29.25C29.7148 29.7141 30.3443 29.9749 31.0007 29.9749C31.657 29.9749 32.2865 29.7141 32.7507 29.25C33.2148 28.7858 33.4755 28.1564 33.4755 27.5C33.4755 26.8436 33.2148 26.2141 32.7507 25.75L28.224 21.2233C27.5677 20.5679 26.6782 20.1997 25.7507 20.1997C24.8231 20.1997 23.9336 20.5679 23.2773 21.2233L22.2507 22.25C21.7865 22.7141 21.157 22.9749 20.5007 22.9749C19.8443 22.9749 19.2148 22.7141 18.7507 22.25C18.2865 21.7858 18.0258 21.1564 18.0258 20.5C18.0258 19.8436 18.2865 19.2141 18.7507 18.75L22.029 15.4716C23.0933 14.4101 24.4812 13.734 25.9731 13.5501C27.4649 13.3663 28.9755 13.6853 30.2657 14.4566L30.814 14.7833C31.3107 15.0831 31.9014 15.1871 32.4707 15.075L34.5007 14.6666M34.5006 13.5L35.6673 26.3333H33.334M13.5007 13.5L12.334 26.3333L19.9173 33.9166C20.3814 34.3808 21.0109 34.6415 21.6673 34.6415C22.3237 34.6415 22.9532 34.3808 23.4173 33.9166C23.8814 33.4525 24.1422 32.823 24.1422 32.1666C24.1422 31.5103 23.8814 30.8808 23.4173 30.4166M13.5007 14.6666H22.834" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ),
    },
    {
        id: 5,
        cardTitle: "Для СМИ и прессы",
        cardText: "Аккредитация журналистов, пресс-релизы",
        cardPhone: "+7 (XXX) XXX-XX-XX",
        cardEmail: "press@laserclinic.ru",
        cardBg: 'rgba(61, 60, 61, 1)',
        cardTextColor: "text-light",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                <path d="M27.5007 31H21.6673M31.0007 26.3333H21.6673M14.6673 35.6666H33.334C33.9528 35.6666 34.5463 35.4208 34.9839 34.9832C35.4215 34.5456 35.6673 33.9522 35.6673 33.3333V14.6666C35.6673 14.0478 35.4215 13.4543 34.9839 13.0167C34.5463 12.5791 33.9528 12.3333 33.334 12.3333H19.334C18.7151 12.3333 18.1217 12.5791 17.6841 13.0167C17.2465 13.4543 17.0007 14.0478 17.0007 14.6666V33.3333C17.0007 33.9522 16.7548 34.5456 16.3172 34.9832C15.8796 35.4208 15.2862 35.6666 14.6673 35.6666ZM14.6673 35.6666C14.0485 35.6666 13.455 35.4208 13.0174 34.9832C12.5798 34.5456 12.334 33.9522 12.334 33.3333V22.8333C12.334 22.2145 12.5798 21.621 13.0174 21.1834C13.455 20.7458 14.0485 20.5 14.6673 20.5H17.0007M22.834 17H29.834C30.4783 17 31.0007 17.5223 31.0007 18.1666V20.5C31.0007 21.1443 30.4783 21.6666 29.834 21.6666H22.834C22.1897 21.6666 21.6673 21.1443 21.6673 20.5V18.1666C21.6673 17.5223 22.1897 17 22.834 17Z" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ),
    },
    {
        id: 6,
        cardTitle: "Для правоохранительных органов",
        cardText: "Официальные запросы от полиции, МВД, Росздравнадзора, Роскомнадзора",
        cardPhone: "+7 (XXX) XXX-XX-XX ",
        cardEmail: "Врач-дерматовенеролог, косметолог",
        image: "security@laserclinic.ru",
        icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                <path d="M18.1673 31V24C18.1673 22.4529 18.7819 20.9692 19.8759 19.8752C20.9698 18.7812 22.4536 18.1666 24.0007 18.1666C25.5477 18.1666 27.0315 18.7812 28.1254 19.8752C29.2194 20.9692 29.834 22.4529 29.834 24V31M18.1673 31H29.834M18.1673 31C17.5485 31 16.955 31.2458 16.5174 31.6834C16.0798 32.121 15.834 32.7145 15.834 33.3333V34.5C15.834 34.8094 15.9569 35.1061 16.1757 35.3249C16.3945 35.5437 16.6912 35.6666 17.0007 35.6666H31.0007C31.3101 35.6666 31.6068 35.5437 31.8256 35.3249C32.0444 35.1061 32.1673 34.8094 32.1673 34.5V33.3333C32.1673 32.7145 31.9215 32.121 31.4839 31.6834C31.0463 31.2458 30.4528 31 29.834 31M34.5007 24H35.6673M31.584 15.25L31.0007 15.8333M12.334 24H13.5007M24.0007 12.3333V13.5M15.7512 15.7505L16.576 16.5753M24.0007 24V31" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ),
    },
    {
        id: 7,
        cardTitle: "Образцы документов",
        cardText: "Литвинова",
        cardPhone: "Врач-дерматовенеролог, косметолог",
        cardEmail: "Врач-дерматовенеролог, косметолог",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                <path d="M26.3327 12.3333V17C26.3327 17.6188 26.5785 18.2123 27.0161 18.6499C27.4537 19.0875 28.0472 19.3333 28.666 19.3333H33.3327M27.4993 12.3333H16.9993C16.3805 12.3333 15.787 12.5791 15.3494 13.0167C14.9118 13.4543 14.666 14.0478 14.666 14.6666V33.3333C14.666 33.9522 14.9118 34.5456 15.3494 34.9832C15.787 35.4208 16.3805 35.6666 16.9993 35.6666H30.9993C31.6182 35.6666 32.2117 35.4208 32.6493 34.9832C33.0868 34.5456 33.3327 33.9522 33.3327 33.3333V18.1666L27.4993 12.3333Z" stroke="#C62628" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>  
                ),
    },
    
    ];
  return (
    <>
    <div className='container-fluid'>
        <h1 className='section-title'>
            Контакты
        </h1>
        <div className='row g-3'>
            {cards.map((card) => (
            <div className="col-12 col-md-4" key={card.id}>
            <div className="card">
                <div className="card-body d-flex align-items-center justify-content-between">
                    <h2 className='fs-5 fw-semibold'>{card.cardTitle}</h2>
                    <div>
                        {card.icon}
                    </div>
                </div>
            </div>
            </div>
            ))}
        </div>
        <div className="row g-5 py-3 my-3 py-lg-5 my-lg-0">
            {cards.map((card) => (
            <div className="" key={card.id}>
            <div className='card' style={{backgroundColor: card.cardBg}}>
                <div className="card-body">
                    <div className='d-flex flex-column gap-5'>
                        <div className='d-flex flex-column'>
                            <h2 className={`${card.cardTextColor} fs-5 fw-semibold`}>{card.cardTitle}</h2>
                            <p className={`${card.cardTextColor}`}>
                                {card.cardText}
                            </p>
                        </div>
                        <div className='d-flex flex-column'>
                            <h2 className={`${card.cardTextColor} fs-5 fw-semibold`}>{card.cardPhone}</h2>
                            <p className={`${card.cardTextColor}`}>
                                {card.cardEmail}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            ))}
        </div>
    </div>
    <YandexMap />
    </>
  );
};