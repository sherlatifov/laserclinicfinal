import { Link } from 'react-router-dom';
import YandexMap from '../components/YandexMap'

export default function Blog() {
    const blogs = [
    {
        id: 1,
        blogTitle: "Запуск новой услуги: лазерное омоложение Fotona 4D",
        blogDate: "15 апреля 2025",
        author: "Марина Васюкова",
        authorImg: "report@laserclinic.ru",
        image: "../assets/blog/blogImg/img-1.png",
    },
    {
        id: 2,
        blogTitle: "Подарки к Новому году: акция «2 процедуры по цене 1»",
        blogDate: "1 декабря 2024 – 15 января 2025",
        author: "Марина Васюкова",
        authorImg: "report@laserclinic.ru",
        image: "../assets/blog/blogImg/img-2.png",
    },
    {
        id: 3,
        blogTitle: "Открытие нового филиала в Москве – теперь и в столице!",
        blogDate: "20 декабря 2023",
        author: "Марина Васюкова",
        authorImg: "report@laserclinic.ru",
        image: "../assets/blog/blogImg/img-3.png",
    },
    {
        id: 3,
        blogTitle: "Наши врачи – спикеры международного конгресса",
        blogDate: "5 ноября 2024",
        author: "Марина Васюкова",
        authorImg: "report@laserclinic.ru",
        image: "../assets/blog/blogImg/img-4.png",
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
                <div className="card bg-transparent">
                    <img className='img-fluid rounded-4' src={blog.image} alt="" />
                    <div className="card-body d-flex">
                        <div className="d-flex flex-column gap-1">
                            <h3 className='fs-5 fw-semibold'>
                                {blog.blogTitle}
                            </h3>
                            <p>
                                {blog.blogDate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};