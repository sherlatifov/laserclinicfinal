
import React from 'react';
import img1 from '../assets/about-organization/1.png'; // путь внутри папки src
import img2 from '../assets/about-organization/2.png'; // путь внутри папки src
import img3 from '../assets/about-organization/3.png'; // путь внутри папки src
import img4 from '../assets/about-organization/4.png'; // путь внутри папки src

export default function AboutOrganization() {
  return (
    <div className='container-fluid py-5'>
        <h1 className='section-title'>
            Сведения об организации
        </h1>
        <div className='col-12 col-md-7'>
            <p className='fs-5 fw-semibold'>
                В соответствии с законодательством Российской Федерации, для всех подразделений ООО «ЛАЗЕР КЛИНИК» была проведена специальная оценка условий труда.
            </p>
            <p className='fs-5 fw-semibold'>
                Согласно результатам специальной оценки условий труда в ООО «ЛАЗЕР-КЛИНИК» определено 19 рабочих мест с вредными условиями труда, на основе измерений и оценок установлен вредный и (или) опасный производственный фактор – биологический.
            </p>
            <p className='fs-5 fw-semibold'>
                Мероприятий по улучшению условий труда не требуется.
            </p>
        </div>
        <div className='row gap-2'>
            <div className='col-12 col-md-8'>
                <img src={img1} alt="" className="img-fluid w-100 mb-3" />
            </div>
            <div className='col-12 col-md-8'>
                <img src={img2} alt="" className="img-fluid w-100 mb-3" />
            </div>
            <div className='col-12 col-md-8'>
                <img src={img3} alt="" className="img-fluid w-100 mb-3" />
            </div>
            <div className='col-12 col-md-8'>
                <img src={img4} alt="" className="img-fluid w-100 mb-3" />
            </div>
        </div>
    </div>
  );
};