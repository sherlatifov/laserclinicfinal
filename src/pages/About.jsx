import { Link } from 'react-router-dom';
import cardImg from '../assets/about/cardImg.png'

import AboutCarousel from '../components/Sliders/AboutCarousel';
import ShoortInfo from '../components/PageParts/ShortInfo/ShortInfo';
import Jurisdiction from '../components/PageParts/Jurisdiction/Jurisdiction';
import YandexMap from '../components/YandexMap'

export default function About() {
  return (
    <div className='my-5'>
      <div className='container-fluid'>
        <h1 className='section-title'>
            О Лазер Клиник
        </h1>
        <div className='d-flex flex-md-row flex-column'>
            <p className='fw-semibold'>
              Наша клиника сочетает в себе современные методики и высококвалифицированный персонал, чтобы обеспечить наилучший результат от каждой процедуры.
            </p>
            <p className='fw-semibold'>
              Мы стремимся к индивидуальному подходу к каждому клиенту, уделяя внимание всем нюансам и пожеланиям. Мы понимаем, что красота и здоровье — это два неразрывно связанных аспекта, и наши косметологи работают на результат.
            </p>
        </div>
      </div>
      <div className='container-fluid'>
        <AboutCarousel />
      </div>
      <div className="container-fluid">
        <h1 className='section-title'>
            Премиальный центр <span className='text-red'>эстетической медицины,</span> где инновации встречаются с индивидуальным подходом
        </h1>
        <ShoortInfo />
      </div>
          <div className="container-fluid">
          <h3 className=''>
            Почему нас выбирают
          </h3>
          <div className='row g-3'>
            <div className="col-12 col-lg-6">
              <div className='card'>
                <img src={cardImg} className="card-img img-fluid" alt="..."></img>
                <div className="card-img-overlay d-flex flex-column justify-content-end gap-0">
                  <div>
                    <h3 className='card-title'>
                      Сертифицированное оборудование
                    </h3>
                    <p className='card-text'>
                      Используем только качественное медицинское оборудование (Lumenis, Candela) для безопасных и эффективных процедур
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-row flex-md-column gap-3 gap-md-5">
                        <div>
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                            <path d="M24.0002 22.8333V27.4999M26.3335 25.1666H21.6668M28.6668 16.9999V14.6666C28.6668 14.0477 28.421 13.4543 27.9834 13.0167C27.5458 12.5791 26.9523 12.3333 26.3335 12.3333H21.6668C21.048 12.3333 20.4545 12.5791 20.0169 13.0167C19.5793 13.4543 19.3335 14.0477 19.3335 14.6666V16.9999M31.0002 16.9999V33.3333M17.0002 16.9999V33.3333M14.6668 16.9999H33.3335C34.6222 16.9999 35.6668 18.0446 35.6668 19.3333V30.9999C35.6668 32.2886 34.6222 33.3333 33.3335 33.3333H14.6668C13.3782 33.3333 12.3335 32.2886 12.3335 30.9999V19.3333C12.3335 18.0446 13.3782 16.9999 14.6668 16.9999Z" stroke="#C62628" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="card-title fs-5 fw-semibold">
                            Врачи с 10+ лет опыта
                          </h3>
                          <p className='card-text'>
                            Постоянное обучение у мировых экспертов
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-row flex-md-column gap-3 gap-md-5">
                        <div>
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                            <path d="M33.3332 13.5V18.1666M35.6665 15.8333H30.9998M14.6665 29.8333V32.1666M15.8332 31H13.4998M21.593 28.0833C21.4889 27.6795 21.2784 27.3111 20.9836 27.0162C20.6887 26.7214 20.3203 26.511 19.9165 26.4068L12.759 24.5611C12.6369 24.5265 12.5294 24.4529 12.4529 24.3517C12.3764 24.2504 12.335 24.1269 12.335 24C12.335 23.873 12.3764 23.7496 12.4529 23.6483C12.5294 23.547 12.6369 23.4735 12.759 23.4388L19.9165 21.592C20.3201 21.4879 20.6885 21.2776 20.9833 20.983C21.2781 20.6884 21.4887 20.3202 21.593 19.9166L23.4387 12.7591C23.473 12.6365 23.5465 12.5285 23.6479 12.4516C23.7493 12.3747 23.8731 12.333 24.0004 12.333C24.1277 12.333 24.2515 12.3747 24.353 12.4516C24.4544 12.5285 24.5279 12.6365 24.5622 12.7591L26.4067 19.9166C26.5108 20.3204 26.7213 20.6888 27.0161 20.9837C27.311 21.2785 27.6794 21.489 28.0832 21.5931L35.2407 23.4376C35.3638 23.4716 35.4723 23.545 35.5497 23.6466C35.627 23.7481 35.6689 23.8723 35.6689 24C35.6689 24.1276 35.627 24.2518 35.5497 24.3534C35.4723 24.455 35.3638 24.5283 35.2407 24.5623L28.0832 26.4068C27.6794 26.511 27.311 26.7214 27.0161 27.0162C26.7213 27.3111 26.5108 27.6795 26.4067 28.0833L24.561 35.2408C24.5267 35.3634 24.4532 35.4714 24.3518 35.5483C24.2504 35.6253 24.1266 35.6669 23.9993 35.6669C23.872 35.6669 23.7481 35.6253 23.6467 35.5483C23.5453 35.4714 23.4718 35.3634 23.4375 35.2408L21.593 28.0833Z" stroke="#C62628" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="card-title fs-5 fw-semibold">
                            Гарантия результата
                          </h3>
                          <p className='card-text'>
                            Бесплатные коррекции при необходимости
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-row flex-md-column gap-3 gap-md-5">
                        <div>
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                            <path d="M22.833 26.3333H25.1663C25.7852 26.3333 26.3787 26.0875 26.8163 25.6499C27.2538 25.2123 27.4997 24.6188 27.4997 24C27.4997 23.3812 27.2538 22.7877 26.8163 22.3501C26.3787 21.9125 25.7852 21.6667 25.1663 21.6667H21.6663C20.9663 21.6667 20.383 21.9 20.033 22.3667L13.4997 28.6667M18.1663 33.3333L20.033 31.7C20.383 31.2333 20.9663 31 21.6663 31H26.333C27.6163 31 28.783 30.5333 29.5997 29.6L34.9663 24.4667C35.4165 24.0412 35.6793 23.4543 35.6968 22.8352C35.7143 22.216 35.4851 21.6152 35.0597 21.165C34.6342 20.7148 34.0474 20.452 33.4282 20.4345C32.809 20.417 32.2082 20.6462 31.758 21.0717L26.858 25.6217M12.333 27.5L19.333 34.5M32.7497 19.9167C33.5663 19.1 34.4997 18.05 34.4997 16.7667C34.5812 16.0537 34.4196 15.3342 34.0411 14.7246C33.6626 14.115 33.0893 13.6511 32.4141 13.408C31.739 13.1649 31.0015 13.157 30.3213 13.3855C29.6411 13.6139 29.0579 14.0654 28.6663 14.6667C28.2499 14.112 27.6666 13.7055 27.002 13.5067C26.3375 13.308 25.6268 13.3276 24.9742 13.5625C24.3216 13.7974 23.7615 14.2354 23.3761 14.8121C22.9907 15.3888 22.8004 16.0738 22.833 16.7667C22.833 18.1667 23.7663 19.1 24.583 20.0333L28.6663 24L32.7497 19.9167Z" stroke="#C62628" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="card-title fs-5 fw-semibold">
                            Персональный подход
                          </h3>
                          <p className='card-text'>
                            Программа лечения с учетом ваших особенностей
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-row flex-md-column gap-3 gap-md-5">
                        <div>
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#C62628"/>
                            <path d="M12.3335 16.9999C13.0335 17.5833 13.7335 18.1666 15.2502 18.1666C18.1668 18.1666 18.1668 15.8333 21.0835 15.8333C24.1168 15.8333 23.8835 18.1666 26.9168 18.1666C29.8335 18.1666 29.8335 15.8333 32.7502 15.8333C34.2668 15.8333 34.9668 16.4166 35.6668 16.9999M12.3335 23.9999C13.0335 24.5833 13.7335 25.1666 15.2502 25.1666C18.1668 25.1666 18.1668 22.8333 21.0835 22.8333C24.1168 22.8333 23.8835 25.1666 26.9168 25.1666C29.8335 25.1666 29.8335 22.8333 32.7502 22.8333C34.2668 22.8333 34.9668 23.4166 35.6668 23.9999M12.3335 30.9999C13.0335 31.5833 13.7335 32.1666 15.2502 32.1666C18.1668 32.1666 18.1668 29.8333 21.0835 29.8333C24.1168 29.8333 23.8835 32.1666 26.9168 32.1666C29.8335 32.1666 29.8335 29.8333 32.7502 29.8333C34.2668 29.8333 34.9668 30.4166 35.6668 30.9999" stroke="#C62628" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="card-title fs-5 fw-semibold">
                            Максимум комфорта
                          </h3>
                          <p className='card-text'>
                            Персональное сопровождение и удобные современные кабинеты
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
          <div>
            <h1 className='section-title'>
              Оборудование
            </h1>
          </div>
          <div>
            <h1 className='section-title'>
              Ваша оценка – наша мотивация быть лучше
            </h1>
          </div>
          <div className='container-fluid'>
            <h1 className='section-title'>
              Юридическая информация
            </h1>
            <Jurisdiction />
          </div>
          <YandexMap />
    </div>
  );
};