import { useEffect } from 'react';
import styles from './Collapse.module.css'

export default function Collapse({ items }) {
    useEffect(() => {
    const collapseEls = document.querySelectorAll('.collapse');
    

    collapseEls.forEach((collapseEl) => {
      
      const card = collapseEl.closest('.card');
      if (!card) return;
      const icon = card.querySelector('i');
      const span = card.querySelector('span');

      collapseEl.addEventListener('show.bs.collapse', () => {
        card.classList.add('text-white');
        card.style.background = 'rgba(198, 38, 40, 1)';
        span.style.background = 'rgba(255, 255, 255, 0.2)';
        if (icon) {
          icon.classList.remove('bi','bi-plus');
          icon.classList.add('bi', 'bi-dash');
        }
      });

      collapseEl.addEventListener('hide.bs.collapse', () => {
        card.classList.remove('bg-danger', 'text-white');
        card.style.background = 'rgba(255, 255, 255, 1)';
        span.style.background = 'rgba(231, 230, 231, 1)';
        if (icon) {
          icon.classList.remove('bi', 'bi-dash');
          icon.classList.add('bi','bi-plus');
        }
      });
    });
  }, []);
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
