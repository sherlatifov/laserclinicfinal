
import styles from './Jurisdiction.module.css'
import { Link } from 'react-router-dom';

export default function Jurisdiction() {
  return (
        <>
        <div className='d-flex flex-column gap-3 gap-lg-0'>
            <div className="card">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item col-12 col-lg-2 text-center bg-secondary-subtle border border-start-0 border-end-0">
                        <h4 className='fs-6 fw-semibold'>
                            ОГРН
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg-2 text-center border border-end-0">
                        <h4 className='fs-6 fw-medium border-lg-end'>
                            1132310011382
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg-3 text-center border border-start-0 border-end-0">
                        <h4 className='fs-6 fw-medium border-lg-end'>
                            Свидетельство серия 23 №008798713
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg border border-start-0">
                        <h4 className='fs-6 fw-medium'>
                            Выдано ИФНС №2 по г. Краснодару 17 декабря 2013 г
                        </h4>
                    </li>
                </ul>
            </div>
            <div className="card">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item col-12 col-lg-2 text-center bg-secondary-subtle">
                        <h4 className='fs-6 fw-semibold text'>
                            ИНН
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg-2 border border-end-0 text-center">
                        <h4 className='fs-6 fw-medium border-lg-end'>
                            2310174794
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg-3 border border-end-0 border-start-0 text-center">
                        <h4 className='fs-6 fw-medium border-lg-end'>
                            Свидетельство серия 23 №008796611
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg">
                        <h4 className='fs-6 fw-medium'>
                            Выдано ИФНС №2 по г. Краснодару 17 декабря 2013 г
                        </h4>
                    </li>
                </ul>
            </div>
            <div className="card">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item col-12 col-lg-2 text-center bg-secondary-subtle">
                        <h4 className='fs-6 fw-semibold text'>
                            Учредитель
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg">
                        <h4 className='fs-6 fw-medium'>
                            Суцепина Ольга Геннадьевна, +7 (958) 760-32-85
                        </h4>
                    </li>
                </ul>
            </div>
            <div className="card">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item col-12 col-lg-2 text-center bg-secondary-subtle">
                        <h4 className='fs-6 fw-semibold text'>
                            e-mail
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg">
                        <h4 className='fs-6 fw-medium'>
                            <Link className=''>1centrfoto@gmail.com</Link>
                        </h4>
                    </li>
                </ul>
            </div>
        </div>
        </>
  );
}
