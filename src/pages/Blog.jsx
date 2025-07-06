import { Link } from 'react-router-dom';
import YandexMap from '../components/YandexMap'

export default function Blog() {
  return (
    <div>
        <div className='container-fluid'>
            <h1 className='section-title'>
                Блог
            </h1>
            <div className='row'>
                <div className="col-12 col-lg-6">
                    <div className="card bg-transparent">

                        <div className="card-body d-flex">
                            <div className="d-flex flex-column gap-1">
                                <h3 className='fs-5 fw-semibold'>
                                    Запуск новой услуги: лазерное омоложение Fotona 4D
                                </h3>
                                <p>
                                    15 апреля 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};