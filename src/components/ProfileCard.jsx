import React from "react";

export default function ProfileCard({ profile }) {
  const { firstName, lastName, specialty, image } = profile;

  return (
    <div className="card h-100">
        <div className='card-img'>
            <div className="position-absolute d-flex mt-5 img-fluid justify-content-center h-100 w-100">
                <svg width="343" height="188" viewBox="0 0 343 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.05">
                <path d="M148.271 92.4543V37.234H116.351C107.945 37.234 100.616 39.598 94.3571 44.33C88.0984 49.0613 83.8951 55.4439 81.7504 63.4805L51.7069 175.438C50.8126 179.011 48.8473 181.958 45.8063 184.277C42.7661 186.599 39.5458 187.759 36.1497 187.759H9.59687C6.55689 187.759 4.1854 186.644 2.48747 184.411C0.790262 182.179 0.296334 179.635 1.01221 176.777L34.2733 51.1595C43.2139 17.2325 72.1824 0.268021 121.179 0.268021H186.628C189.667 0.268021 192.259 1.51616 194.406 4.01967C196.553 6.52077 197.626 9.37674 197.626 12.59V60.9956C177.555 65.9956 159.988 75.7248 148.271 92.4543Z" fill="url(#paint0_linear_829_8045)"/>
                <path d="M185.284 187.759H160.609C157.213 187.759 154.307 186.509 151.894 184.01C149.478 181.511 148.269 178.562 148.269 175.169V128.535L150.164 121.374C156.366 97.843 172.205 82.475 197.675 75.2636H225.787C233.478 75.2636 240.228 73.1654 246.04 68.9718C251.852 64.7752 257.35 58.0343 262.538 48.7481L282.922 12.59C287.571 4.19586 293.828 0 301.697 0H332.008C335.405 0 337.416 1.20467 338.045 3.61644C338.668 6.02821 337.996 9.01698 336.033 12.59L307.599 64.0179C303.487 71.5151 298.881 77.7184 293.784 82.6317C288.688 87.5412 282.027 90.9795 273.805 92.9439C279.525 94.1932 285.424 97.8089 291.507 103.79C297.585 109.773 302.952 116.333 307.599 123.477L340.322 175.438C342.471 179.01 343.095 181.957 342.201 184.277C341.309 186.599 339.162 187.759 335.765 187.759H305.723C302.326 187.759 298.656 186.555 294.725 184.142C290.791 181.733 287.748 178.831 285.605 175.438L262.538 139.011C256.992 130.084 251.453 123.389 245.907 118.925C240.366 114.458 233.657 112.228 225.787 112.228H197.626V175.708C197.626 179.1 196.418 181.957 194.005 184.277C191.589 186.599 188.686 187.759 185.284 187.759Z" fill="url(#paint1_linear_829_8045)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_829_8045" x1="171.645" y1="0" x2="171.645" y2="187.759" gradientUnits="userSpaceOnUse">
                <stop stop-color="#222222"/>
                <stop offset="1" stop-color="#222222" stop-opacity="0.2"/>
                </linearGradient>
                <linearGradient id="paint1_linear_829_8045" x1="171.645" y1="0" x2="171.645" y2="187.759" gradientUnits="userSpaceOnUse">
                <stop stop-color="#222222"/>
                <stop offset="1" stop-color="#222222" stop-opacity="0.2"/>
                </linearGradient>
                </defs>
            </svg>
            </div>
            <img src={image} alt={`${firstName} ${lastName}`} className="card-img-top p-1" />
        </div>
        <div className="card-body">
            <h5 className="card-title fs-6 fw-semibold">
                {lastName} {firstName}
            </h5>
            <span className="text-muted fw-medium">
                Специализация
            </span>
            <p className="card-text fw-medium">
                {specialty}
            </p>
            <div className="col-12 col-lg-10">
                <a className="btn bg-secondary-subtle px-3 fw-medium w-100">Записаться к специалисту</a>
            </div>
        </div>
    </div>
  );
}