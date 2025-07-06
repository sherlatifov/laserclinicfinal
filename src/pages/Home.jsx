import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import bgVideo from '../assets/bg-hero.mp4';
import personImg from '../assets/bg-img.png';
import Collapse from '../components/Collapse/Collapse';
import img1 from '../assets/home/img1.png';
import img2 from '../assets/home/img2.png';
import img3 from '../assets/home/img3.png';
import img4 from '../assets/home/img4.png';
import img5 from '../assets/home/img5.png';



import YandexMap from '../components/YandexMap'
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
  ];
export default function Home() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (cardId) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };

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
        'Противопоказания включают беременность, онкологические заболевания, кожные инфекции в зоне обработки и приём некоторых медикаментов. Перед процедурой рекомендуется консультация с врачом.',
    },
    {
      id: 3,
      question: 'Как быстро увижу результат?',
      answer:
        'Обычно результат заметен уже после первой процедуры, но для устойчивого эффекта требуется курс из 6-8 сеансов с интервалом 4-6 недель.',
    },
  ];
  return (
    <div>
      <div className={`${styles.hero} position-relative`}>
        {/* Видео-фон */}
        <video
          className={`${styles.video}`}
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />
         {/* Контент поверх видео */}
        <div className="position-relative z-3 h-100">
          <div className="row d-flex flex-column-reverse flex-lg-row align-items-center h-100">
            {/* Текст слева */}
            <div className={`${styles.heroText} col-md-6 bg-white py-5`}>
              <h1 className="display-4 fw-bold text-dark">Новая эра лазерной косметологии</h1>
              <p className="lead text-dark">
                Используем передовые технологии и опыт экспертов, чтобы помочь вам выглядеть и чувствовать себя лучше каждый день.
              </p>
              <div className="btn-group flex-column w-100 gap-2">
                <button className="btn btn-danger">Записаться онлайн</button>
                <button className="btn btn-outline-danger">Записаться онлайн</button>
              </div>
            </div>

            {/* Фото справа, прижатое к низу */}
            <div className="col-md-6 d-flex justify-content-end align-items-center-end w-100 h-100">
              <img
                src={personImg}
                alt="Доктор"
                className="hero-person-img img-fluid h-100"
              />
            </div>
          </div>
        </div>
      </div>








        <div className='container-fluid'>
          <h1 className='section-title'>
            Современные методики и опытный персонал для вашей красоты
          </h1>
          <p>
            Ведущий центр эстетической медицины.  Специализируемся на лазерных процедурах, помогающих добиться желаемого результата.
          </p>
        </div>

      <div className="row g-0" style={{ maxHeight: '600px', overflow: 'hidden' }}>
  {/* Левая сторона */}
  <div className="col-4">
    <div className="card h-100">
      <img src={img1} alt="" className="img-fluid h-100 object-fit-cover" />
      <div className="card-img-overlay text-white bg-dark bg-opacity-50">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Описание левой карточки</p>
        <p className="card-text"><small>Обновлено 3 мин назад</small></p>
      </div>
    </div>
  </div>

  {/* Правая сторона */}
  <div className="col-8 d-flex flex-column justify-content-between h-100">
    {/* Верхняя строка */}
    <div className="row  flex-grow-1">
      <div className="col-4">
        <div className="card h-50">
          <img src={img1} alt="" className="img-fluid h-100 object-fit-cover" />
          <div className="card-img-overlay text-white bg-dark bg-opacity-50">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Правая верхняя левая</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-50">
          <img src={img1} alt="" className="img-fluid h-100 object-fit-cover" />
          <div className="card-img-overlay text-white bg-dark bg-opacity-50">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Правая верхняя правая</p>
          </div>
        </div>
      </div>
    </div>

    {/* Нижняя строка */}
    <div className="row flex-grow-1">
      <div className="col">
        <div className="card h-100">
          <img src={img1} alt="" className="img-fluid  object-fit-cover" />
          <div className="card-img-overlay text-white bg-dark bg-opacity-50">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Правая верхняя правая</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={img1} alt="" className="img-fluid h-100 object-fit-cover" />
          <div className="card-img-overlay text-white bg-dark bg-opacity-50">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Правая верхняя правая</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        <div>
          <h1 className='section-title'>
            Качественные медицинские услуги с заботой о вашей красоте
          </h1>
        </div>
        <div>
          <h1 className='section-title'>
            Специальные предложения для вашей красоты
          </h1>

        </div>
        <div className='py-5'>
          <div className="container-fluid">
            <h1 className='section-title'>
              Все, что вы хотели спросить – коротко и ясно
            </h1>
            <div className='d-flex flex-column gap-5'>
                <Collapse items={faqData} />
            </div>
          <div className='text-center mt-5'>
              <Link className='btn btn-dark'>
                Смотреть все вопросы
              </Link>
          </div>
          </div>
        </div>
        <div>
          <h1 className='section-title'>
            Опытные врачи с индивидуальным подходом к каждому
          </h1>
          <div>
          </div>
          <div className='text-center w-100 w-lg-auto'>
            <Link className='btn btn-dark w-100' to="/specialists">
              Смотреть всех Специалистов
            </Link>
          </div>
        </div>
        <YandexMap />
    </div>
  );
};