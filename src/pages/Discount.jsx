import { Link } from 'react-router-dom';

export default function Discount() {
  return (
    <div className='container-fluid'>
        <h1 className='section-title'>
            -50% на посещения!
        </h1>
        <div className="row">
            <div className="col-12 col-md-6">

            </div>
            <div className="col-12 col-md-6">
                <h2 className='fs-1 fw-semibold'>Специальное предложение</h2>
                <p>
                    Скидка 50% на лазерную александритовую эпиляцию для женщин. Скидка действует для новых клиентов сети "Лазер Клиник" на первое и ВСЕ  последующие посещения до 30.04.2025 года! Скидка действует в филиалах по адресам:
                </p>
                <ul className='my-0 p-0'>
                    <li>
                        ул. Душистая, 77 к1;
                    </li>
                    <li>
                        ул. Гагарина, 157 А (пгт Яблоновский);
                    </li>
                    <li>
                        ул. Уральская, 75 к2;
                    </li>
                    <li>
                        ул. Кубанская Набережная, 130;
                    </li>
                    <li>
                        ул. Игнатова, 10/1.
                    </li>
                </ul>
                <Link className='btn btn-danger w-100 my-4'>Записаться по акции</Link>
                <div className="card">
                    <table class="table w-100">
                        <thead>
                            <tr className=''>
                                <th scope="col" className='w-50'>Зоны</th>
                                <th scope="col" className='w-50'>Стоимость со скидкой 50%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Лоб</td>
                                <td>600 РУБ</td>
                            </tr>
                            <tr>
                                <td>Межбровье</td>
                                <td>475</td>
                            </tr>
                            <tr>
                                <td>Брови</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <td>Верхняя губа</td>
                                <td>450</td>
                            </tr>
                            <tr>
                                <td>Подбородок</td>
                                <td>450</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};