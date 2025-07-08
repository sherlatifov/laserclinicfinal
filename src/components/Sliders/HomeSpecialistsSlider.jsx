import { useEffect } from 'react';
import styles from './Collapse.module.css'

export default function Collapse({ items }) {
    
  return (
    <>
      {items.map((item, index) => {
        const collapseId = `collapse-${index}`;
        const headingId = `heading-${index}`;
        return (
          <div className="card rounded-3" key={index}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collapseId}`}
              aria-expanded="false"
              aria-controls={collapseId}>
            <div className="card-body">
              <div className='d-flex align-items-center justify-content-between'>
                <h2 className={`${styles.cardTitle}`}>{item.question}</h2>
                <span className={`${styles.iconSpan}`}>
                    <i className='bi bi-plus'></i>
                </span>
              </div>
              <div
                id={collapseId}
                className="collapse"
                aria-labelledby={headingId}
              >
                <p className="mt-3 fs-6 fw-medium">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
