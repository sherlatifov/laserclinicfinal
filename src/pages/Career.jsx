
import Collapse from '../components/Collapse/Collapse';
import cardImg from '../assets/career/img.png';
import { Link } from 'react-router-dom';
import styles from '../styles/Career.module.css';

export default function Career() {
    
  return (
    <div className='container-fluid'>
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
  );
};