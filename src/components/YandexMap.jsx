import { useEffect, useRef } from 'react';

export default function YandexMap() {
  const mapRef = useRef(null);
  const isMapInit = useRef(false); // флаг инициализации

  useEffect(() => {
    if (isMapInit.current || !window.ymaps || !mapRef.current) return;

    window.ymaps.ready(() => {
      isMapInit.current = true; // помечаем как инициализированную

      const map = new window.ymaps.Map(mapRef.current, {
        center: [55.76, 37.64],
        zoom: 5,
        controls: ['zoomControl', 'fullscreenControl']
      });

      const points = [
        { coords: [55.76, 37.64], title: 'Москва', desc: 'Столица России' },
        { coords: [59.93, 30.31], title: 'СПб', desc: 'Северная столица' },
        { coords: [56.84, 60.61], title: 'Екатеринбург', desc: 'Урал' },
      ];

      const geoObjects = points.map((point) =>
        new window.ymaps.Placemark(point.coords, {
          balloonContentHeader: `<strong>${point.title}</strong>`,
          balloonContentBody: point.desc,
        }, {
          preset: 'islands#redIcon',
        })
      );

      const clusterer = new window.ymaps.Clusterer({
        preset: 'islands#invertedBlueClusterIcons',
      });

      clusterer.add(geoObjects);
      map.geoObjects.add(clusterer);
    });
  }, []);

  return (
  <div style={{ position: 'relative' }}>
  {/* Контейнер карты */}
  <div ref={mapRef} style={{ width: '100%', height: '620px' }} />

  {/* Форма поверх карты */}
  <div
    className="position-absolute z-0 p-4 rounded shadow start-50 translate-middle-x translate-md-none start-md-10"
    style={{
      top: '20%',
      width: '100%',
      maxWidth: '704px',
      background: 'radial-gradient(50% 50% at 50% 50%, #3D3C3D 0%, #262626 100%)'
    }}
  >
    <h5 className="text-light fs-2 fw-semibold">Контакты</h5>
    <div className="card bg-transparent">
      <div className="card-body">
        <form>
          <div className="mb-2">
            <input type="text" className="form-control" placeholder="Ваше имя" />
          </div>
          <div className="mb-2">
            <input type="tel" className="form-control" placeholder="Телефон" />
          </div>
          <div className="mb-2">
            <textarea className="form-control" rows="3" placeholder="Сообщение" />
          </div>
          <button type="submit" className="btn-red">
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}
