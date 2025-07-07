
import styles from './Jurisdiction.module.css'
import { Link } from 'react-router-dom';

export default function Jurisdiction() {
  return (
        <>
        <div className='d-flex flex-column gap-3 gap-lg-0'>
            <div className="card">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item col-12 col-lg-2 text-center bg-secondary-subtle">
                        <h4 className='fs-6 fw-semibold text'>
                            ОГРН
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg">1132310011382</li>
                    <li class="list-group-item col-12 col-lg-3">Свидетельство серия 23 №008798713 </li>
                    <li class="list-group-item col-12 col-lg-6">Выдано ИФНС №2 по г. Краснодару 17 декабря 2013 г</li>
                </ul>
            </div>
            <div className="card">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item col-12 col-lg-2 text-center bg-secondary-subtle">
                        <h4 className='fs-6 fw-semibold text'>
                            ИНН
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg">2310174794</li>
                    <li class="list-group-item col-12 col-lg-3 ">Свидетельство серия 23 №008796611 </li>
                    <li class="list-group-item col-12 col-lg-6">Выдано ИФНС №2 по г. Краснодару 17 декабря 2013 г</li>
                </ul>
            </div>
            <div className="card">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item col-12 col-lg-2 text-center bg-secondary-subtle">
                        <h4 className='fs-6 fw-semibold text'>
                            Учредитель
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg">Суцепина Ольга Геннадьевна, +7 (958) 760-32-85</li>
                </ul>
            </div>
            <div className="card">
                <ul class="list-group list-group-horizontal-lg">
                    <li class="list-group-item col-12 col-lg-2 text-center bg-secondary-subtle">
                        <h4 className='fs-6 fw-semibold text'>
                            e-mail
                        </h4>
                    </li>
                    <li class="list-group-item col-12 col-lg"><Link className=''>1centrfoto@gmail.com</Link></li>
                </ul>
            </div>
        </div>
        </>
  );
}
