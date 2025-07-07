
import styles from './ShortInfo.module.css'

export default function ShoortInfo() {
  return (
        <>
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className={`${styles.block}`}>
                <div>
                    <h2 className={`${styles.title} d-flex align-items-start gap-0`}> 16 <span className="fs-5 mt-1 mt-lg-2 fw-semibold">лет</span> </h2>
                    <p className={`${styles.subTitle}`}>Безупречного опыта</p>
                </div>
            </div>
            <div className={`${styles.block}`}>
                <div>
                    <h2 className={`${styles.title}`}> 200 000+ </h2>
                    <p className={`${styles.subTitle}`}>Довольных клиентов</p>
                </div>
            </div>
            <div className={`${styles.block}`}>
                <div>
                    <h2 className={`${styles.title}`}> 30+ </h2>
                    <p className={`${styles.subTitle}`}>Открытых центров по России</p>
                </div>
            </div>
        </div>
        </>
  );
}
