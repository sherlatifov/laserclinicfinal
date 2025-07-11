import { NavLink, Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="mt-auto d-flex flex-column w-100" style={{background: `radial-gradient(50% 50% at 50% 50%, #3D3C3D 0%, #262626 100%), #FFFFFF`}}>
        <div className="container-fluid">
            <div className="navbar navbar-expand-lg py-0 pb-3 py-lg-4">
                <ul className="navbar-nav align-items-lg-center justify-content-between w-100">
                    <div className='d-flex flex-column flex-lg-row align-items-lg-center gap-4 mt-lg-0 mt-3'>
                        <li className=" text-center">
                            <Link className='' to='/'>
                                <svg width="300" height="24" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1519_265)">
                                    <path d="M24.6934 22.3059C24.6934 22.7352 24.5475 23.1021 24.2559 23.4069C23.9643 23.7124 23.6058 23.8647 23.1795 23.8647H20.0515C19.6255 23.8647 19.2614 23.7124 18.9588 23.4069C18.6559 23.1021 18.5045 22.7352 18.5045 22.3059V4.8148H14.5024C13.4482 4.8148 12.529 5.11449 11.7442 5.71313C10.9594 6.31202 10.4327 7.11963 10.1636 8.13672L6.39622 22.3059C6.28441 22.7577 6.03794 23.1307 5.65659 23.4238C5.27525 23.7179 4.87159 23.8647 4.44584 23.8647H1.11621C0.7351 23.8647 0.437754 23.7237 0.225122 23.4415C0.0120101 23.1585 -0.0499076 22.8368 0.039849 22.4752L4.21041 6.57734C5.3314 2.2836 8.96389 0.136786 15.1074 0.136786H23.3142C23.6953 0.136786 24.0205 0.29468 24.2893 0.611584C24.5583 0.927931 24.6934 1.28954 24.6934 1.6961V22.3059Z" fill="white"/>
                                    <path d="M37.5419 8.13672L36.0955 13.4589H46.5553V4.8148H41.8802C40.8265 4.8148 39.9073 5.11449 39.1223 5.71313C38.3377 6.31202 37.8107 7.11963 37.5419 8.13672ZM27.4515 22.3397L31.5885 6.57734C32.7098 2.2836 36.342 0.136786 42.4858 0.136786H51.3311C51.7352 0.136786 52.0712 0.289356 52.3405 0.594372C52.6093 0.899633 52.7439 1.25567 52.7439 1.66224V22.3397C52.7439 22.7691 52.5925 23.1307 52.2899 23.4238C51.9872 23.7179 51.6229 23.8647 51.1969 23.8647H48.1023C47.6542 23.8647 47.2839 23.7179 46.9925 23.4238C46.7012 23.1307 46.5553 22.7577 46.5553 22.3059V18.1367H34.8845L33.7748 22.3059C33.6627 22.7577 33.4158 23.1307 33.0344 23.4238C32.6535 23.7179 32.2499 23.8647 31.8241 23.8647H28.5951C28.1693 23.8647 27.8436 23.7179 27.6198 23.4238C27.3956 23.1307 27.3394 22.7691 27.4515 22.3397Z" fill="white"/>
                                    <path d="M69.9974 4.67919H65.9947C64.2235 4.67919 63.0015 5.35714 62.3287 6.71312C61.8354 7.75244 61.0959 8.27244 60.1093 8.27244H58.1584C57.9566 8.27244 57.7435 8.23281 57.5191 8.15368C57.2947 8.07485 57.0652 7.88228 56.8298 7.57733C56.5949 7.27207 56.477 6.8938 56.477 6.44222C56.477 4.56625 57.4183 3.02383 59.3019 1.81491C61.1854 0.605566 63.2263 0.00160217 65.4233 0.00160217H70.468C76.836 0.00160217 80.0203 2.41937 80.0203 7.25535C80.0203 9.26656 79.2689 10.8484 77.7668 12.0009C79.4932 13.0858 80.3564 14.6789 80.3564 16.7804C80.3564 19.334 79.5663 21.1759 77.9855 22.3059C76.4041 23.4355 74.1346 24.0002 71.1745 24.0002H64.8851C62.6654 24.0002 60.6193 23.3847 58.7469 22.1528C56.8747 20.9212 55.9385 19.334 55.9385 17.3903C55.9385 16.7349 56.1291 16.2664 56.5104 15.9838C56.892 15.7016 57.2614 15.5601 57.6206 15.5601H59.5712C60.5802 15.5601 61.3647 16.1701 61.9251 17.3903C62.1942 17.9781 62.6537 18.4468 63.3044 18.7976C63.9544 19.1478 64.672 19.3224 65.4571 19.3224H70.6025C71.7914 19.3224 72.6822 19.1309 73.2763 18.7463C73.871 18.3622 74.1678 17.7067 74.1678 16.7804C74.1678 15.854 73.871 15.1985 73.2763 14.8146C72.6822 14.4305 71.7914 14.2383 70.6025 14.2383H66.3646C65.9394 14.2383 65.5745 14.0851 65.2716 13.7804C64.9693 13.4752 64.8176 13.1082 64.8176 12.6786V11.3232C64.8176 10.9163 64.9638 10.5545 65.255 10.2381C65.5468 9.92204 65.894 9.76383 66.2976 9.76383H69.9974C71.3201 9.76383 72.2902 9.56625 72.9065 9.17027C73.5233 8.77529 73.8317 8.12538 73.8317 7.22154C73.8317 6.31764 73.5233 5.66773 72.9065 5.27275C72.2902 4.87702 71.3201 4.67919 69.9974 4.67919Z" fill="white"/>
                                    <path d="M104.202 0.136786C104.628 0.136786 104.993 0.289356 105.295 0.594372C105.598 0.899633 105.749 1.26682 105.749 1.6961V3.25524C105.749 3.68452 105.598 4.05195 105.295 4.35747C104.993 4.66217 104.628 4.8148 104.202 4.8148H89.9077V9.62812H102.217C102.644 9.62812 103.008 9.7805 103.31 10.0855C103.613 10.3905 103.765 10.7579 103.765 11.1874V12.7463C103.765 13.1759 103.613 13.5433 103.31 13.8481C103.008 14.1536 102.644 14.3059 102.217 14.3059H89.9077V19.1869H104.169C104.594 19.1869 104.953 19.334 105.245 19.6279C105.536 19.9215 105.682 20.2833 105.682 20.7124V22.3059C105.682 22.7352 105.531 23.1021 105.228 23.4069C104.925 23.7124 104.561 23.8647 104.135 23.8647H85.2667C84.8403 23.8647 84.476 23.7124 84.1731 23.4069C83.8709 23.1021 83.7197 22.7238 83.7197 22.272V1.66224C83.7197 1.23295 83.8709 0.871088 84.1731 0.577715C84.476 0.283596 84.8403 0.136786 85.2667 0.136786H104.202Z" fill="white"/>
                                    <path d="M110.29 0.136786H122.835C129.45 0.136786 132.757 3.20997 132.757 9.35697C132.757 15.5032 129.45 18.5767 122.835 18.5767H114.965V22.3059C114.965 22.7352 114.813 23.1021 114.51 23.4069C114.208 23.7124 113.844 23.8647 113.417 23.8647H110.323C109.897 23.8647 109.533 23.7124 109.23 23.4069C108.928 23.1021 108.776 22.7352 108.776 22.3059V1.6961C108.776 1.26682 108.922 0.899633 109.213 0.594372C109.504 0.289356 109.864 0.136786 110.29 0.136786ZM120.951 4.8148H114.965V13.8988H120.951C122.79 13.8988 124.186 13.5883 125.139 12.9671C126.091 12.3455 126.568 11.1422 126.568 9.35697C126.568 7.57171 126.091 6.36812 125.139 5.747C124.186 5.12564 122.79 4.8148 120.951 4.8148Z" fill="white"/>
                                    <path d="M141.099 23.8647H138.005C137.579 23.8647 137.214 23.707 136.912 23.3902C136.609 23.0738 136.457 22.7009 136.457 22.272V1.6961C136.457 1.26682 136.609 0.89406 136.912 0.577715C137.214 0.261305 137.579 0.102915 138.005 0.102915H141.099C141.525 0.102915 141.889 0.261305 142.192 0.577715C142.494 0.89406 142.646 1.26682 142.646 1.6961V9.62812H146.178C147.142 9.62812 147.988 9.3623 148.717 8.83158C149.446 8.30044 150.135 7.44762 150.786 6.27208L153.341 1.6961C153.924 0.633814 154.709 0.102915 155.696 0.102915H159.496C159.923 0.102915 160.174 0.255548 160.253 0.560253C160.332 0.866013 160.248 1.24428 160.001 1.6961L156.436 8.20465C155.92 9.15356 155.343 9.93864 154.704 10.5603C154.064 11.1817 153.229 11.617 152.198 11.8655C152.916 12.0231 153.655 12.481 154.418 13.238C155.18 13.9951 155.853 14.8252 156.436 15.7294L160.539 22.3059C160.808 22.7577 160.886 23.1307 160.775 23.4238C160.662 23.7179 160.393 23.8647 159.967 23.8647H156.2C155.774 23.8647 155.315 23.7124 154.821 23.4069C154.328 23.1021 153.946 22.7352 153.678 22.3059L150.786 17.6958C150.09 16.5658 149.395 15.7185 148.7 15.1529C148.005 14.5882 147.164 14.3059 146.178 14.3059H142.646V22.3397C142.646 22.7691 142.494 23.1307 142.192 23.4238C141.889 23.7179 141.525 23.8647 141.099 23.8647Z" fill="white"/>
                                    <path d="M187.58 22.3059C187.58 22.7352 187.434 23.1021 187.142 23.4069C186.852 23.7124 186.492 23.8647 186.067 23.8647H182.939C182.512 23.8647 182.148 23.7124 181.845 23.4069C181.543 23.1021 181.391 22.7352 181.391 22.3059V4.8148H177.389C176.336 4.8148 175.416 5.11449 174.631 5.71313C173.847 6.31202 173.319 7.11963 173.05 8.13672L169.283 22.3059C169.172 22.7577 168.924 23.1307 168.544 23.4238C168.162 23.7179 167.759 23.8647 167.332 23.8647H164.003C163.622 23.8647 163.325 23.7237 163.112 23.4415C162.899 23.1585 162.837 22.8368 162.926 22.4752L167.098 6.57734C168.218 2.2836 171.851 0.136786 177.995 0.136786H186.201C186.582 0.136786 186.908 0.29468 187.176 0.611584C187.446 0.927931 187.58 1.28954 187.58 1.6961V22.3059Z" fill="white"/>
                                    <path d="M214.016 23.8647H211.124C210.698 23.8647 210.333 23.7124 210.03 23.4069C209.727 23.1021 209.576 22.7352 209.576 22.3059V6.9501L201 22.3059C200.753 22.7352 200.4 23.1021 199.94 23.4069C199.481 23.7124 199.038 23.8647 198.611 23.8647H193.163C192.737 23.8647 192.373 23.7124 192.07 23.4069C191.767 23.1021 191.616 22.7352 191.616 22.3059V1.6961C191.616 1.24428 191.762 0.871088 192.054 0.577715C192.344 0.283596 192.715 0.136786 193.163 0.136786H196.056C196.482 0.136786 196.846 0.283596 197.149 0.577715C197.452 0.871088 197.603 1.23295 197.603 1.66224V18.2381L206.953 1.6961C207.199 1.26682 207.541 0.899633 207.979 0.594372C208.416 0.289356 208.825 0.136786 209.206 0.136786H214.049C214.475 0.136786 214.834 0.289356 215.125 0.594372C215.417 0.899633 215.563 1.26682 215.563 1.6961V22.3059C215.563 22.7352 215.412 23.1021 215.109 23.4069C214.806 23.7124 214.442 23.8647 214.016 23.8647Z" fill="white"/>
                                    <path d="M237.087 22.3397V13.8314H225.787V22.3397C225.787 22.7691 225.636 23.1307 225.333 23.4238C225.03 23.7179 224.665 23.8647 224.24 23.8647H221.179C220.753 23.8647 220.383 23.7124 220.069 23.4069C219.755 23.1021 219.599 22.7352 219.599 22.3059V1.6961C219.599 1.26682 219.75 0.899633 220.053 0.594372C220.355 0.289356 220.73 0.136786 221.179 0.136786H224.24C224.665 0.136786 225.03 0.289356 225.333 0.594372C225.636 0.899633 225.787 1.26682 225.787 1.6961V9.15357H237.087V1.6961C237.087 1.26682 237.239 0.899633 237.542 0.594372C237.845 0.289356 238.209 0.136786 238.635 0.136786H241.695C242.144 0.136786 242.519 0.289356 242.822 0.594372C243.125 0.899633 243.276 1.26682 243.276 1.6961V22.3059C243.276 22.7352 243.119 23.1021 242.805 23.4069C242.492 23.7124 242.122 23.8647 241.695 23.8647H238.635C238.209 23.8647 237.845 23.7179 237.542 23.4238C237.239 23.1307 237.087 22.7691 237.087 22.3397Z" fill="white"/>
                                    <path d="M270.049 23.8647H267.156C266.73 23.8647 266.365 23.7124 266.063 23.4069C265.76 23.1021 265.609 22.7352 265.609 22.3059V6.9501L257.032 22.3059C256.785 22.7352 256.433 23.1021 255.973 23.4069C255.513 23.7124 255.07 23.8647 254.644 23.8647H249.195C248.77 23.8647 248.405 23.7124 248.102 23.4069C247.8 23.1021 247.648 22.7352 247.648 22.3059V1.6961C247.648 1.24428 247.794 0.871088 248.085 0.577715C248.377 0.283596 248.747 0.136786 249.195 0.136786H252.087C252.514 0.136786 252.879 0.283596 253.182 0.577715C253.484 0.871088 253.635 1.23295 253.635 1.66224V18.2381L262.985 1.6961C263.231 1.26682 263.574 0.899633 264.011 0.594372C264.449 0.289356 264.858 0.136786 265.239 0.136786H270.082C270.508 0.136786 270.867 0.289356 271.158 0.594372C271.449 0.899633 271.595 1.26682 271.595 1.6961V22.3059C271.595 22.7352 271.444 23.1021 271.141 23.4069C270.839 23.7124 270.474 23.8647 270.049 23.8647Z" fill="white"/>
                                    <path d="M280.273 23.8647H277.178C276.752 23.8647 276.388 23.707 276.086 23.3902C275.784 23.0738 275.632 22.7009 275.632 22.272V1.6961C275.632 1.26682 275.784 0.89406 276.086 0.577715C276.388 0.261305 276.752 0.102915 277.178 0.102915H280.273C280.699 0.102915 281.064 0.261305 281.366 0.577715C281.669 0.89406 281.82 1.26682 281.82 1.6961V9.62812H285.352C286.316 9.62812 287.162 9.3623 287.891 8.83158C288.62 8.30044 289.309 7.44762 289.959 6.27208L292.516 1.6961C293.099 0.633814 293.883 0.102915 294.87 0.102915H298.671C299.097 0.102915 299.349 0.255548 299.427 0.560253C299.506 0.866013 299.422 1.24428 299.175 1.6961L295.61 8.20465C295.094 9.15356 294.517 9.93864 293.878 10.5603C293.239 11.1817 292.404 11.617 291.372 11.8655C292.09 12.0231 292.829 12.481 293.592 13.238C294.354 13.9951 295.027 14.8252 295.61 15.7294L299.713 22.3059C299.983 22.7577 300.06 23.1307 299.949 23.4238C299.836 23.7179 299.568 23.8647 299.141 23.8647H295.374C294.948 23.8647 294.489 23.7124 293.995 23.4069C293.502 23.1021 293.121 22.7352 292.852 22.3059L289.959 17.6958C289.264 16.5658 288.569 15.7185 287.875 15.1529C287.18 14.5882 286.339 14.3059 285.352 14.3059H281.82V22.3397C281.82 22.7691 281.669 23.1307 281.366 23.4238C281.064 23.7179 280.699 23.8647 280.273 23.8647Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1519_265">
                                    <rect width="300" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </li>
                        <li className=''>
                            <Link className='btn btn-outline-light w-100'>
                                <i class="bi bi-chat-dots me-2"></i>
                                Получить консультацию
                            </Link>
                        </li>
                    </div>
                    <div className='d-flex flex-column flex-lg-row align-items-lg-center gap-3 mt-3 mt-lg-0'>
                        <li className='text-center'>
                            <Link className='text-white border-end px-4 fs-5 fw-semibold'>
                                +7 (958) 760-32-85
                            </Link>
                        </li>
                        <li className='text-center'>
                            <Link className='text-white border-end px-4 fs-5 fw-semibold'>
                                lazerklinick@yandex.ru
                            </Link>
                        </li>
                    <li className="px-4">
                        <div className={`${styles.footerSocials} d-flex gap-3 justify-content-center w-100 w-lg-auto`}>
                            <a href="http://vk.com" className="d-flex align-items-center justify-content-center p-3 w-100">
                                <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0924 12.7634C4.25918 12.7634 0.361617 7.9859 0.199219 0.0361328H3.62208C3.73451 5.87106 6.25793 8.34262 8.25668 8.85222V0.0361328H11.4797V5.06844C13.4534 4.85186 15.5271 2.55866 16.2267 0.0361328H19.4497C19.1861 1.34438 18.6606 2.58309 17.9061 3.67477C17.1517 4.76645 16.1844 5.68762 15.0649 6.38066C16.3146 7.01391 17.4183 7.91022 18.3033 9.01045C19.1883 10.1107 19.8345 11.3898 20.1992 12.7634H16.6514C16.3241 11.5703 15.6587 10.5023 14.7387 9.69325C13.8187 8.88417 12.685 8.37002 11.4797 8.21522V12.7634H11.0924Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="http://youtube.com" className='d-flex align-items-center justify-content-center p-3 w-100'>
                                <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48844 9.58611V3.9743C10.4806 4.91173 12.0236 5.81731 13.8485 6.79363C12.3433 7.62835 10.4806 8.56492 8.48844 9.58611ZM19.591 1.18328C19.2474 0.730524 18.6617 0.378089 18.0381 0.261409C16.2053 -0.0866411 4.77099 -0.0876311 2.93915 0.261409C2.43911 0.355149 1.99384 0.581732 1.61133 0.933772C-0.000362515 2.42967 0.504666 10.4517 0.893147 11.7512C1.05651 12.3136 1.26769 12.7193 1.53365 12.9855C1.87631 13.3376 2.34547 13.58 2.88436 13.6887C4.39345 14.0008 12.168 14.1753 18.0062 13.7355C18.5441 13.6418 19.0202 13.3916 19.3958 13.0246C20.8859 11.5347 20.7843 3.06213 19.591 1.18328Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </li>
                    </div>
                </ul>
            </div>
        </div>
        <div className={`${styles.footerBorder} py-5`}>
            <div className='container-fluid'>
                <div className="row g-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className={styles.footerNavTitle}>Страницы</h3>
                        <ul className={`${styles.footerNav} nav flex-column mt-4 gap-3`}>
                            <li>
                                <Link to="/about">О Нас</Link>
                            </li>
                            <li>
                                <Link to="/">Услуги</Link>
                            </li>
                            <li>
                                <Link to="/">Подобрать услуги</Link>
                            </li>
                            <li>
                                <Link to="/">Полезное</Link>
                            </li>
                            <li>
                                <Link to="/specialists">Наши специалисты</Link>
                            </li>
                            <li>
                                <Link to="/about-organization">Сведения об организации</Link>
                            </li>
                            <li>
                                <Link to="/">Версия для слабовидящих</Link>
                            </li>
                            <li>
                                <Link to="/tax">Налоговый вычет</Link>
                            </li>
                            <li>
                                <Link to="/"><span className='text-red'>Франшиза «Лазер Клиник»</span></Link>
                            </li>
                            <li className="d-inline d-lg-none">
                                <Link to="/">Подарочный сертификат</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className={styles.footerNavTitle}>Услуги</h3>
                        <ul className={`${styles.footerNav} nav flex-column mt-4 gap-3`}>
                            <li>
                                <NavLink>Лазерная александритовая эпиляция</NavLink>
                            </li>
                            <li>
                                <NavLink>Микроигольчатый фракционный RF-лифтинг</NavLink>
                            </li>
                            <li>
                                <NavLink>Лифтинг лица Vela Shape</NavLink>
                            </li>
                            <li>
                                <NavLink>Коррекция фигуры Vela Shape</NavLink>
                            </li>
                        </ul>
                        <div className={styles.footerCard}>
                            <h2>
                                Карьера в ЛазерКлиник
                            </h2>
                            <Link className='btn-red' to="/career">Смотреть вакансии</Link>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-12 col-md-12 col-lg-6">
                        <h3 className={styles.footerNavTitle}>Адреса в Краснодаре <span className='text-secondary'>16</span></h3>
                        <ul className={`${styles.footerNav}  mt-4 px-0 row`}>
                            {[
                            "1 Мая, 186",
                            "Бочарникова 1",
                            "Восточно-Кругликовская, 30",
                            "Душистая 77, к 1",
                            "Западный Обход 39/2, к 7",
                            "Зиповская 31",
                            "Игнатова 10/1",
                            "Красная, 160",
                            "Кубанская Набережная,130",
                            "Платановый бульвар, 3",
                            "Сормовская 122",
                            "Ставропольская, 110/1",
                            "ул. Петра Метальникова 28",
                            "Уральская 75 к 2",
                            "Чернобыльцев, 1",
                            "респ. Адыгея, пгт. Яблоновский, ул. Гагарина 157а"
                            ].map((address, i) => (
                            <li key={i} className="d-flex align-items-start gap-3 col-6 mb-3">
                                <span>
                                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                                        <path d="M14.3467 15.1014C14.3467 15.3161 14.2737 15.4995 14.1279 15.6519C13.9822 15.8047 13.8029 15.8809 13.5898 15.8809H12.0257C11.8128 15.8809 11.6307 15.8047 11.4794 15.6519C11.328 15.4995 11.2522 15.3161 11.2522 15.1014V6.35589H9.25121C8.72408 6.35589 8.26449 6.50573 7.87209 6.80505C7.47972 7.1045 7.21634 7.5083 7.08182 8.01685L5.19811 15.1014C5.1422 15.3273 5.01897 15.5138 4.8283 15.6604C4.63762 15.8075 4.43579 15.8809 4.22292 15.8809H2.5581C2.36755 15.8809 2.21888 15.8104 2.11256 15.6692C2.00601 15.5277 1.97505 15.3669 2.01992 15.1861L4.10521 7.23716C4.6657 5.09028 6.48194 4.01688 9.5537 4.01688H13.6571C13.8476 4.01688 14.0102 4.09583 14.1446 4.25428C14.2791 4.41245 14.3467 4.59326 14.3467 4.79654V15.1014Z" fill="#525152"/>
                                        <path d="M19.8208 15.8809H18.2738C18.0609 15.8809 17.8785 15.802 17.7273 15.6436C17.5759 15.4854 17.5 15.2989 17.5 15.0845V4.79654C17.5 4.58189 17.5759 4.39552 17.7273 4.23734C17.8785 4.07914 18.0609 3.99994 18.2738 3.99994H19.8208C20.034 3.99994 20.2162 4.07914 20.3676 4.23734C20.5187 4.39552 20.5946 4.58189 20.5946 4.79654V8.76254H22.3603C22.8423 8.76254 23.2656 8.62963 23.6299 8.36428C23.9943 8.09871 24.3389 7.6723 24.6642 7.08453L25.9421 4.79654C26.2337 4.26539 26.6259 3.99994 27.1193 3.99994H29.0196C29.2327 3.99994 29.3587 4.07626 29.398 4.22861C29.4373 4.38149 29.3952 4.57063 29.2721 4.79654L27.4895 8.05081C27.2314 8.52527 26.943 8.91781 26.6235 9.22861C26.3037 9.53932 25.8859 9.757 25.3705 9.88121C25.7293 9.96004 26.0991 10.189 26.4803 10.5675C26.8612 10.946 27.1979 11.3611 27.4895 11.8132L29.5412 15.1014C29.6754 15.3273 29.7147 15.5138 29.6588 15.6604C29.6026 15.8075 29.4681 15.8809 29.2552 15.8809H27.3715C27.1586 15.8809 26.9288 15.8047 26.6822 15.6519C26.4355 15.4995 26.2447 15.3161 26.1105 15.1014L24.6642 12.7964C24.3165 12.2314 23.9691 11.8077 23.6213 11.525C23.2739 11.2426 22.8537 11.1015 22.3603 11.1015H20.5946V15.1184C20.5946 15.333 20.5187 15.5138 20.3676 15.6604C20.2162 15.8075 20.034 15.8809 19.8208 15.8809Z" fill="#525152"/>
                                    </svg>
                                </span>
                                <Link className=''>{address}</Link>
                            </li>
                            ))}
                        </ul>
                    </div> 
                </div>
                <div className={` ${styles.footerCard} d-block d-md-none mt-4`}>
                        <div type="button" data-bs-toggle="collapse" data-bs-target="#footerAdresses" aria-expanded="false" aria-controls="footerAdresses">
                            <h2>Адреса в Краснодаре <span className='text-secondary'>16</span></h2>
                        </div> 
                        <div class="collapse" id="footerAdresses">
                            <div className={` ${styles.footerCard}`}>
                                <ul className={`${styles.footerNav} list-unstyled row align-items-start`}>
                                    {[
                                    "1 Мая, 186",
                                    "Бочарникова 1",
                                    "Восточно-Кругликовская, 30",
                                    "Душистая 77, к 1",
                                    "Западный Обход 39/2, к 7",
                                    "Зиповская 31",
                                    "Игнатова 10/1",
                                    "Красная, 160",
                                    "Кубанская Набережная,130",
                                    "Платановый бульвар, 3",
                                    "Сормовская 122",
                                    "Ставропольская, 110/1",
                                    "ул. Петра Метальникова 28",
                                    "Уральская 75 к 2",
                                    "Чернобыльцев, 1",
                                    "респ. Адыгея, пгт. Яблоновский, ул. Гагарина 157а"
                                    ].map((address, i) => (
                                    <li key={i} className="col-12">
                                        <Link className='bg-transparent'>{address}</Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className='py-5 d-flex justify-content-between align-items-center flex-md-row flex-column gap-3'>
                <Link to='/policy' className={styles.footerBtmLink}>
                    Политика конфиденциальности
                </Link>
                <Link to='' className={styles.footerBtmLink}>
                    Обработка файлов cookie
                </Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;