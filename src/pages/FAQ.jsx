
import Collapse from '../components/Collapse/Collapse';
import cardImg from '../assets/faq/img.png';
import { Link } from 'react-router-dom';
import styles from '../styles/FAQ.module.css';

export default function FAQ() {
    const faqData = [
    {
        id: 1,
        question: 'Как подготовиться к лазерной эпиляции?',
        answer:
        'За день до процедуры нужно побрить обрабатываемую зону, но не использовать воск или эпилятор. За 2 недели избегайте загара и откажитесь от косметики с ретинолом или кислотами. В день визита кожа должна быть чистой, без кремов и макияжа',
    },
    {
        id: 2,
        question: 'Есть ли противопоказания к процедурам?',
        answer:
        'За день до процедуры нужно побрить обрабатываемую зону, но не использовать воск или эпилятор. За 2 недели избегайте загара и откажитесь от косметики с ретинолом или кислотами. В день визита кожа должна быть чистой, без кремов и макияжа',
    },
    {
        id: 3,
        question: 'Как быстро увижу результат?',
        answer:
        'Обычно результат заметен уже после первой процедуры, но для устойчивого эффекта требуется курс из 6-8 сеансов с интервалом 4-6 недель.',
    },
    {
        id: 4,
        question: 'Какой эффект можно ожидать после первой процедуры?',
        answer:
        'Обычно результат заметен уже после первой процедуры, но для устойчивого эффекта требуется курс из 6-8 сеансов с интервалом 4-6 недель.',
    },
    {
        id: 5,
        question: 'Есть ли болевые ощущения во время сеанса?',
        answer:
        'Обычно результат заметен уже после первой процедуры, но для устойчивого эффекта требуется курс из 6-8 сеансов с интервалом 4-6 недель.',
    },
    {
        id: 6,
        question: 'Сколько длится эффект от Fotona 4D?',
        answer:
        'Можно ли сочетать Fotona 4D с другими методиками?',
    },
    ];
  return (
    <div className="container-fluid py-5">
        <h2 className='section-title'>
            Ответы на вопросы
        </h2>
        <div className="d-flex flex-column flex-lg-row justify-content-end mt-3 mt-lg-5">
            <input type="text" className='form-control w-auto bg-transparent' placeholder='Поиск'/>
        </div>
        <div className='d-flex flex-column gap-5 mt-3 mt-lg-5'>
            <Collapse items={faqData} />
        </div>
        <div class={` ${styles.btmFormCard} card mt-5 h-100`}>
            <div class="row g-0 d-flex align-items-center flex-md-row flex-column-reverse">
                <div class="col-12 col-md-6 h-100">
                    <div className={`${styles.cardBody} card-body`}>
                        <div className="d-md-block d-none">
                            <h5 class="card-title fs-2 fw-semibold">Остались вопросы?</h5>
                            <p class="card-text fs-5 fw-semibold">Задайте их, и мы постараемся как можно быстрее ответить</p>
                        </div>
                        <div className='d-block d-md-none'>
                            <h5 class="card-title fs-1 fw-bold">Задайте вопрос специалисту</h5>
                            <p class="card-text fs-5 fw-semibold">Анастасия Михайловна ответит на все ваши вопросы</p>
                        </div>
                        <form action="d-flex">
                            <div className="row g-2 mt-2">
                                <div className="col-12 col-lg">
                                    <input type="text" className='form-control w-100' placeholder='Ваше имя' />
                                </div>
                                <div className="col-12 col-lg">
                                    <input type="phone" className='form-control w-100' placeholder='Телефон' />
                                </div>
                                <div className='col-12'>
                                    <textarea className="form-control noresize" id="exampleFormControlTextarea1" rows="3" placeholder='Ваш вопрос'></textarea>
                                </div>
                                <div>
                                    <p className='text-secondary fw-medium'>Отправляя форму, Вы соглашаетесь <Link className='text-dark fw-medium' to='/policy'>с Политикой конфиденциальности</Link></p>
                                </div>
                                <div className='d-flex flex-column flex-lg-row'>
                                    <input type="submit" className='btn-red w-auto' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-12 col-md-6 position-relative">
                    <div className={`${styles.cardGradient}`}>
                        <img src={cardImg} className={` ${styles.cardImg} img-fluid w-100 h-100`} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};