import { Link } from 'react-router-dom';
import YandexMap from '../components/YandexMap'

export default function About() {
  return (
    <div>
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
      <div className="container-fluid">
        <h1 className='section-title'>
            Премиальный центр <span className='text-red'>эстетической медицины,</span> где инновации встречаются с индивидуальным подходом
        </h1>
        <div className='d-block d-md-flex flex-md-row flex-column justify-content-between'>
            <div className='h-100 w-100 d-flex justify-content-md-center justify-content-start align-items-center'>
              <div className=" d-flex flex-column">
                <h2 className="">
                  16 <span className='position-absolute t-0 fs-1'>лет</span>
                </h2>
                <p>
                  Безупречного опыта
                </p>
              </div>
            </div>
            <div className='h-100 w-100 d-flex justify-content-md-center justify-content-start align-items-center`'>
              <div className="d-flex flex-column">
                <h2>
                  200 000+
                </h2>
                <p>
                  Довольных клиентов 
                </p>
              </div>
            </div>
            <div className='h-100 w-100 d-flex justify-content-md-center justify-content-start align-items-center'>
              <div className="d-flex flex-column">
                <h2>
                  30+
                </h2>
                <p>
                  Открытых центров по России 
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className='container-fluid'>
            <h3 className='fs-4 fw-semibold'>
              Почему нас выбирают
            </h3>
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
          </div>
          <YandexMap />
    </div>
  );
};