import { Link } from 'react-router-dom';
import YandexMap from '../components/YandexMap'

export default function Blog() {
    const blogs = [
    {
        id: 1,
        blogTitle: "Запуск новой услуги: лазерное омоложение Fotona 4D",
        blogDate: "Для жалоб, предложений и оценки сервиса",
        author: "+7 (XXX) XXX-XX-XX ",
        authorImg: "report@laserclinic.ru",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    ];
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
            {blogs.map((blog) => (
            <div className="col-12 col-md-4" key={blog.id}>
            <div className="card">
                <div className="card-body d-flex align-items-center justify-content-between">
                    <h2 className='fs-5 fw-semibold'>{blog.blogTitle}</h2>
                    <div>
                        {card.icon}
                    </div>
                </div>
            </div>
            </div>
            ))}
        </div>
    </div>
  );
};