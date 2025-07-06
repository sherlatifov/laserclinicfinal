import React from "react";

export default function TaxDeduction() {

  return (
    <div className="container-fluid py-5">
        <div className="col-8">
            <h1 className="section-title">
                Заявление на предоставление справки для налоговых органов
            </h1>
            <div className="">
                <h3 className="fw-5 fw-semibold">
                    Уважаемые пациенты!
                </h3>
                <p className="fs-6 fw-medium">
                    Обращаем ваше внимание, что согласно приказа ФНС России от 08.11.2023 № ЕА-7-11/824@ утверждена новая форма справки 3НДФЛ на расходы налогоплательщика с 01.01.2024г.
                </p>
            </div>
            <div className="card">
                <div className="card-body">
                    <span className="bg-secondary-subtle px-2 py-1 rounded text-secondary">
                        Срок подготовки документов 
                    </span>
                    <h2 className="fs-1  fw-semibold">
                        10 календарных дней
                    </h2>
                    <p className="fs-6 fw-medium text-dark">
                        Хранение готовых документов на амбулаторной площадке не более 3-х месяцев. После истечения указанного срока документы будут утилизированы. Для получения документов после окончания срока хранения необходимо подать заявку повторно.
                    </p>
                </div>
            </div>
            <div className="card border border-secondary">
                <div className="card-body">
                    <h2 className="fs-1  fw-semibold">
                        Заявление
                    </h2>
                    <p className="fs-6 fw-medium text-dark">
                        Прошу оформить справку для предоставления в налоговые органы Российской Федерации и выписать ее на имя:
                    </p>
                    <div className="row g-3">
                        <div className="col-3">
                            <input type="text" className="form-control-lg border-secondary" id="inputSurName" placeholder="Фамилия" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control-lg border-secondary" id="inputName" placeholder="Имя" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control-lg border-secondary" id="inputLastName" placeholder="Отчество" />
                        </div>
                        <div className="col-3">
                            <input type="date" className="form-control-lg border-secondary" id="inputLastName" placeholder="" />
                        </div>
                        <div className="col-6">
                            <select className="form-select form-select-lg border border-2 border-secondary" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control-lg" id="inputLastName" placeholder="Серия" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control-lg" id="inputLastName" placeholder="Номер" />
                        </div>
                        <div className="col-12 border border-1 border">
                            <h1>
                                f
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border border-secondary">
                <div className="card-body">

                </div>
            </div>
            <div className="card border border-secondary">
                <div className="card-body">
                    <h3 className="fs-5 fw-semibold">
                        Справку об оказанных медицинских услугах прошу выдать следующим пациентам
                    </h3>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
                    </div>
                    <div className="row g-3">
                        <div className="col-3">
                            <input type="text" className="form-control-lg border-secondary" id="inputSurName" placeholder="Фамилия" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control-lg border-secondary" id="inputName" placeholder="Имя" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control-lg border-secondary" id="inputLastName" placeholder="Отчество" />
                        </div>
                        <div className="col-3">
                            <input type="date" className="form-control-lg border-secondary" id="inputLastName" placeholder="" />
                        </div>
                        <div className="col-6">
                            <select className="form-select form-select-lg border border-2 border-secondary" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control-lg" id="inputLastName" placeholder="Серия" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control-lg" id="inputLastName" placeholder="Номер" />
                        </div>
                        <div className="col-12 border border-1 border">
                            <h1>
                                f
                            </h1>
                        </div>
                        <h3 className="fs-5 fw-semibold">
                            Прикрепленный документ
                        </h3>

                        <h3 className="fs-5 fw-semibold">
                            За год/за годы
                        </h3>
                        <div className="d-flex">
                            <div className="form-check form-check-inline">
                             <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label fs-5 fw-medium" for="inlineCheckbox1">2023</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label fs-5 fw-medium" for="inlineCheckbox2">2024</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label fs-5 fw-medium" for="inlineCheckbox3">2025</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="phone" className="form-control-lg border-secondary" id="inputName" placeholder="Телефон" />
                            </div>
                            <div className="col-4">
                                <input type="email" className="form-control-lg border-secondary" id="inputName" placeholder="Адресс элетронной почты" />
                            </div>
                            <div className="col-4">
                                <input type="phone" className="form-control-lg border-secondary" id="inputName" placeholder="Где получить" />
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control-lg border-secondary" id="inputName" />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-danger">
                                Отправить
                            </button>
                            <lINK>
                                Отправляя форму, Вы соглашаетесь с Политикой конфиденциальности
                            </lINK>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}