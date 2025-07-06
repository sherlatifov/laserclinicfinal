import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import bgVideo from '../assets/bg-hero.mp4';
import bgImg from '../assets/bg-img.png';

import YandexMap from '../components/YandexMap'

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
        <div className={styles.hero}>
  <video className={styles.video} src={bgVideo} autoPlay muted loop playsInline />
  <div className={styles.heroOverlay}>
    <div className="container-fluid">
      <div className={`row justify-content-start align-items-center ${styles.heroContentWrapper}`}>
        <div className={`col-lg-6 ${styles.heroContent}`}>
          <h1 className={styles.heroContentTitle}>
            Новая эра лезерной косметологии
          </h1>
          <p className='text-white'>
            Используем передовые технологии и опыт экспертов, чтобы помочь вам выглядеть и чувствовать себя лучше каждый день.
          </p>
          <div className="btn-group flex-column flex-sm-row gap-2 mt-3">
            <Link className='btn btn-danger'>
              Записаться онлайн
            </Link>
            <Link className='btn btn-outline-danger text-white'>
              Получить консультацию
            </Link>
          </div>
        </div>
        <div className='col-6'>
          <div>
            <img src={bgImg} alt="" className={`${styles.heroImg}`} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <div>
          <h1 className='section-title'>
            Современные методики и опытный персонал для вашей красоты
          </h1>
          <p>
            Ведущий центр эстетической медицины.  Специализируемся на лазерных процедурах, помогающих добиться желаемого результата.
          </p>
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
        <div className='py-5'>
          <div className="container-fluid">
            <h1 className='section-title'>
              Все, что вы хотели спросить – коротко и ясно
            </h1>
            <div className="d-flex flex-column gap-4">
              {faqData.map((item) => {
                const isOpen = openCard === item.id;

                return (
                  <div
                    className={`card ${isOpen ? 'bg-danger' : ''}`}
                    key={item.id}
                  >
                    <div className="card-body">
                      <button
                        className={`collapseBtn fs-4 fw-semibold border-0 bg-transparent d-flex justify-content-between align-items-center w-100 ${
                          isOpen ? 'text-white' : 'text-dark'
                        }`}
                        onClick={() => toggleCard(item.id)}
                      >
                        {item.question}
                        <span
                          className={`px-2 py-1 rounded ${
                            isOpen ? 'text-white bg-secondary bg-opacity-10' : 'text-dark bg-secondary bg-opacity-10'
                          }`}
                        >
                          <i className={`bi ${isOpen ? 'bi-dash' : 'bi-plus'}`}></i>
                        </span>
                      </button>

                      {isOpen && (
                        <p className={`mt-3 ${isOpen ? 'text-white' : 'text-dark'}`}>
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className='text-center w-100'>
              <Link className='btn btn-dark w-100'>
                Смотреть все вопросы
            </Link>
          </div>
          </div>
        </div>
        <YandexMap />
    </div>
  );
};