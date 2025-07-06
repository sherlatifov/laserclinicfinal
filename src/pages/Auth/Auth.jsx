import { Link } from 'react-router-dom';

export default function Auth() {
  return (
    <div className='py-5'>
        <div className='container-fluid'>
            <div className='row g-5'>
                <div className="col-3">
                    <h4 className='d-flex align-items-center fs-4 gap-2'>
                        <svg width="37" height="20" viewBox="0 0 37 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8115 9.84819V3.96615H12.3916C11.4909 3.96615 10.7056 4.21796 10.0351 4.72201C9.36454 5.22599 8.91419 5.90586 8.6844 6.76191L5.46553 18.6876C5.36971 19.0681 5.15914 19.382 4.83333 19.6291C4.5076 19.8764 4.16257 20 3.79871 20H0.953825C0.628119 20 0.374035 19.8813 0.192117 19.6434C0.0102775 19.4056 -0.0426423 19.1346 0.0340569 18.8302L3.59768 5.44948C4.55557 1.8356 7.65929 0.0285495 12.9088 0.0285495H19.9211C20.2467 0.0285495 20.5244 0.161501 20.7544 0.428173C20.9844 0.694589 21.0995 0.998806 21.0995 1.34108V6.49722C18.949 7.02982 17.0669 8.06616 15.8115 9.84819Z" fill="#C62628"/>
                            <path d="M19.7771 20H17.1334C16.7695 20 16.4582 19.8669 16.1996 19.6007C15.9408 19.3345 15.8113 19.0204 15.8113 18.6589V13.6915L16.0142 12.9286C16.6788 10.4222 18.3757 8.7852 21.1046 8.01704H24.1166C24.9406 8.01704 25.6638 7.79355 26.2865 7.34684C26.9093 6.89982 27.4983 6.18178 28.0542 5.19263L30.2381 1.34108C30.7362 0.446941 31.4066 0 32.2497 0H35.4972C35.8611 0 36.0766 0.128321 36.144 0.385222C36.2108 0.642122 36.1388 0.960484 35.9285 1.34108L32.882 6.81915C32.4414 7.61775 31.9479 8.27852 31.4019 8.80189C30.8559 9.32484 30.1422 9.69109 29.2613 9.90034C29.8741 10.0334 30.5062 10.4186 31.1579 11.0556C31.8091 11.693 32.3841 12.3917 32.882 13.1527L36.388 18.6876C36.6183 19.0681 36.6851 19.382 36.5893 19.6291C36.4937 19.8764 36.2636 20 35.8997 20H32.681C32.3171 20 31.9238 19.8717 31.5027 19.6147C31.0812 19.3581 30.7551 19.049 30.5256 18.6876L28.0542 14.8074C27.46 13.8565 26.8665 13.1433 26.2723 12.6678C25.6786 12.192 24.9598 11.9545 24.1166 11.9545H21.0994V18.7163C21.0994 19.0776 20.9699 19.382 20.7114 19.6291C20.4526 19.8764 20.1415 20 19.7771 20Z" fill="#C62628"/>
                        </svg>
                        Личный кабинет
                    </h4>
                    <ul className='navbar-nav gap-3 mt-4'>
                        <li className='nav-item d-flex align-items-center px-3 py-2 bg-danger rounded-3 gap-2'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1053 14.2652 12 14 12H10C9.73478 12 9.48043 12.1053 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21M3 9.99997C2.99993 9.70904 3.06333 9.42159 3.18579 9.15768C3.30824 8.89378 3.4868 8.65976 3.709 8.47197L10.709 2.47297C11.07 2.16788 11.5274 2.00049 12 2.00049C12.4726 2.00049 12.93 2.16788 13.291 2.47297L20.291 8.47197C20.5132 8.65976 20.6918 8.89378 20.8142 9.15768C20.9367 9.42159 21.0001 9.70904 21 9.99997V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.99997Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <Link className='text-white'> Главная страница </Link>
                        </li>
                        <li className='nav-item d-flex align-items-center px-3 py-2 gap-2'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 14H13C13.5304 14 14.0391 13.7893 14.4142 13.4142C14.7893 13.0391 15 12.5304 15 12C15 11.4696 14.7893 10.9609 14.4142 10.5858C14.0391 10.2107 13.5304 10 13 10H10C9.4 10 8.9 10.2 8.6 10.6L3 16M7 20L8.6 18.6C8.9 18.2 9.4 18 10 18H14C15.1 18 16.1 17.6 16.8 16.8L21.4 12.4C21.7859 12.0353 22.0111 11.5323 22.0261 11.0016C22.0411 10.4708 21.8447 9.95589 21.48 9.57C21.1153 9.18411 20.6123 8.95889 20.0816 8.94389C19.5508 8.92889 19.0359 9.12533 18.65 9.49L14.45 13.39M2 15L8 21M19.5 8.5C20.2 7.8 21 6.9 21 5.8C21.0699 5.18893 20.9314 4.57216 20.6069 4.04964C20.2825 3.52712 19.7911 3.12947 19.2124 2.92114C18.6337 2.71281 18.0016 2.706 17.4185 2.90182C16.8355 3.09763 16.3356 3.4846 16 4C15.643 3.52458 15.143 3.17613 14.5735 3.00578C14.0039 2.83544 13.3947 2.85219 12.8353 3.05356C12.2759 3.25494 11.7958 3.63034 11.4655 4.12465C11.1352 4.61896 10.972 5.20614 11 5.8C11 7 11.8 7.8 12.5 8.6L16 12L19.5 8.5Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <Link className='text-dark'> Cоветы по уходу </Link>
                        </li>
                        <li className='nav-item d-flex align-items-center px-3 py-2 gap-2'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.09 10.37C19.0353 10.7224 19.8765 11.3075 20.5358 12.0712C21.195 12.8349 21.6511 13.7524 21.8617 14.7391C22.0724 15.7257 22.0309 16.7495 21.741 17.7158C21.4512 18.6822 20.9223 19.5598 20.2034 20.2676C19.4845 20.9754 18.5987 21.4905 17.628 21.7652C16.6572 22.04 15.6329 22.0655 14.6497 21.8395C13.6665 21.6134 12.7561 21.1431 12.0028 20.472C11.2495 19.8009 10.6776 18.9507 10.34 18M7 6H8V10M16.71 13.88L17.41 14.59L14.59 17.41M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <Link className='text-dark'> Реферальная программа </Link>
                        </li>
                        <li className='nav-item d-flex align-items-center px-3 py-2 gap-2'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V6M16 2V6M3 10H21M9 16L11 18L15 14M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <Link className='text-dark'> История посещений </Link>
                        </li>
                        <li className='nav-item d-flex align-items-center px-3 py-2 gap-2'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <Link className='text-dark'> Выйти </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-9">
                    <div className="card">
                        <div className="card-body">
                            <h3 className='card-title'>
                                Главная страница
                            </h3>
                            <div className="row"> 
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-content">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="d-flex flex-column gap-2">
                                                            <div className="card bg-light">
                                                                <div className="card-body">
                                                                    <div className="d-flex flex-column flex-lg-row">
                                                                        <img src="" alt="" />
                                                                        <div className="d-flex flex-column">
                                                                            <h3>Фролова Мария Сергеевна</h3>
                                                                            <div className="d-flex gap-2">
                                                                                <Link className='btn btn-light'>
                                                                                    <span></span>
                                                                                    mfrolova73@mail.ru
                                                                                </Link>
                                                                                <Link className='btn btn-light'>
                                                                                    <span></span>
                                                                                    8 932 547 02 12
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <button className='ms-auto'>
                                                                                Редактировать
                                                                        </button>
                                                                    </div>
                                                                    <div className='card'>
                                                                        <div className="card-body">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card bg-light">
                                                                <div className="card-body">
                                                                    <div className="d-flex flex-column flex-lg-row">
                                                                        <img src="" alt="" />
                                                                        <div className="d-flex flex-column">
                                                                            <h3>Фролова Мария Сергеевна</h3>
                                                                            <div className="d-flex gap-2">
                                                                                <Link className='btn btn-light'>
                                                                                    <span></span>
                                                                                    mfrolova73@mail.ru
                                                                                </Link>
                                                                                <Link className='btn btn-light'>
                                                                                    <span></span>
                                                                                    8 932 547 02 12
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <button className='ms-auto'>
                                                                                Редактировать
                                                                        </button>
                                                                    </div>
                                                                    <div className='card'>
                                                                        <div className="card-body">
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className='card-title'>
                                                Главная страница
                                            </h3>
                                            <div className="card-content">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="d-flex flex-column gap-2">
                                                            <div className="card bg-light">
                                                                <div className="card-body">
                                                                    <div className="d-flex flex-column flex-lg-row">
                                                                        <img src="" alt="" />
                                                                        <div className="d-flex flex-column">
                                                                            <h3>Фролова Мария Сергеевна</h3>
                                                                            <div className="d-flex gap-2">
                                                                                <Link className='btn btn-light'>
                                                                                    <span></span>
                                                                                    mfrolova73@mail.ru
                                                                                </Link>
                                                                                <Link className='btn btn-light'>
                                                                                    <span></span>
                                                                                    8 932 547 02 12
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <button className='ms-auto'>
                                                                                Редактировать
                                                                        </button>
                                                                    </div>
                                                                    <div className='card'>
                                                                        <div className="card-body">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card bg-light">
                                                                <div className="card-body">
                                                                    <div className="d-flex flex-column flex-lg-row">
                                                                        <img src="" alt="" />
                                                                        <div className="d-flex flex-column">
                                                                            <h3>Фролова Мария Сергеевна</h3>
                                                                            <div className="d-flex gap-2">
                                                                                <Link className='btn btn-light'>
                                                                                    <span></span>
                                                                                    mfrolova73@mail.ru
                                                                                </Link>
                                                                                <Link className='btn btn-light'>
                                                                                    <span></span>
                                                                                    8 932 547 02 12
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <button className='ms-auto'>
                                                                                Редактировать
                                                                        </button>
                                                                    </div>
                                                                    <div className='card'>
                                                                        <div className="card-body">
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>  
                </div>
            </div>
        </div>
    </div>
  );
};