
import Collapse from '../components/Collapse/Collapse';
import cardImg from '../assets/career/img.png';
import topImg from '../assets/career/topImg.png';
import { Link } from 'react-router-dom';
import styles from '../styles/Career.module.css';

export default function Career() {
    
  return (
    <>
    <div className='container-fluid'>
        <div>
            <h1 className='section-title'>
                Карьера в ЛазерКлиник
            </h1>
            <div className="row d-flex flex-column-reverse flex-lg-column">
                <div className="row col-12">
                    <div className="col-12 col-lg-6">
                        <p className='fs-5 fw-semibold'>
                            Станьте частью нашей команды!
                        </p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className='fs-6 fw-medium'>
                            Мы объединяем профессионалов, для которых эстетическая медицина – это наука, искусство и призвание. Если вы разделяете наш подход к качеству и заботе о пациентах – давайте развиваться вместе!
                        </p>
                    </div>
                </div>
                <div className='col-12'>
                    <div className={` ${styles.topCard} card`}>
                        <div className="card-body p-0">
                            <img src={topImg} alt="" className={` ${styles.topCardImg} img-fluid`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1 className='section-title'>Как присоединиться к команде?</h1>
            <div className='row g-3'>
                <div className='col-12 col-lg-3'>
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column justify-content-between gap-5 pt-4 px-4">
                            <div className='d-flex justify-content-between'>
                                <h5 className='card-title fs-2 fw-semibold'>
                                    Отправьте резюме
                                </h5>
                                <h5 className='fs-2 fw-semibold text-dark text-opacity-25'>
                                    01
                                </h5>
                            </div>
                            <p className='card-text fw-medium'>
                                Пришлите ваше резюме и портфолио (если требуется) на <Link>hr@lasclinic.ru</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3'>
                    <div className="card h-100">
                        <div className="card-body d-flex justify-content-between flex-column gap-5 pt-4 px-4">
                            <div className='d-flex justify-content-between'>
                                <h5 className='card-title fs-2 fw-semibold'>
                                    Участвуйте в собеседовании
                                </h5>
                                <h5 className='fs-2 fw-semibold text-dark text-opacity-25'>
                                    02
                                </h5>
                            </div>
                            <p className='card-text fw-medium'>
                                Очная встреча с руководителем направления 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3'>
                    <div className="card h-100">
                        <div className="card-body d-flex justify-content-between flex-column gap-5 pt-4 px-4">
                            <div className='d-flex justify-content-between'>
                                <h5 className='card-title fs-2 fw-semibold'>
                                    Пройдите адаптацию
                                </h5>
                                <h5 className='fs-2 fw-semibold text-dark text-opacity-25'>
                                    03
                                </h5>
                            </div>
                            <p className='card-text fw-medium'>
                                3 месяца с наставником обучение стандартам и работе на оборудовании
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3'>
                    <div className="card h-100">
                        <div className="card-body d-flex justify-content-between flex-column gap-5 pt-4 px-4">
                            <div className='d-flex justify-content-between'>
                                <h5 className='card-title fs-2 fw-semibold'>
                                    Добро пожаловать!
                                </h5>
                                <h5 className='fs-2 fw-semibold text-dark text-opacity-25'>
                                    04
                                </h5>
                            </div>
                            <p className='card-text fw-medium align-content-end'>
                                Доступ к закрытым тренингам, участие в конференциях за счет клиники и расширенный соцпакет
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-dark'>
        <div className="container-fluid">
        <h1 className='section-title text-light'>
            Актуальные вакансии
        </h1>
        </div>
    </div>
    <div className="container-fluid">
        <div class={` ${styles.btmFormCard} card mt-5`}>
            <div class="row g-0 d-flex align-items-center">
                <div class="col-12 col-md-6 h-100">
                    <div class="card-body">
                        <h5 class="card-title fs-2 fw-semibold">Не нашли подходящую вакансию?</h5>
                        <p class="card-text fs-5 fw-semibold">Напишите нам, мы всегда в поиске настоящих профессионалов</p>
                        <form action="">
                            <div className="row g-2">
                                <div className="col">
                                    <input type="text" className='form-control w-100' placeholder='Ваше имя' />
                                </div>
                                <div className="col">
                                    <input type="phone" className='form-control w-100' placeholder='Телефон' />
                                </div>
                                <div className="col">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-12'>
                                    <textarea className="form-control noresize" id="exampleFormControlTextarea1" rows="3" placeholder="Небольшой рассказ о себе"></textarea>
                                </div>
                                <div>
                                    <input type="file" name="" id="" value="" />
                                </div>
                                <div className='col-12'>
                                    <div className='row justify-content-start'>
                                        <div className="col-2">
                                            <input type="submit" className='btn-red' />
                                        </div>
                                        <div className="col-6">
                                        <p className='text-secondary fw-medium '>Отправляя форму, Вы соглашаетесь <Link className='text-dark fw-medium' to='/policy'>с Политикой конфиденциальности</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-12 col-md-6 position-relative">
                    <div className={`${styles.cardGradient}`}>
                        <img src={cardImg} className={` ${styles.cardImg} img-fluid w-100`} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};