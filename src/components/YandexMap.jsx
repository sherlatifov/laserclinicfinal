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
    <div>
      <h2>Яндекс Карта без сторонней библиотеки</h2>
      <div ref={mapRef} style={{ width: '100%', height: '620px' }}/>
    </div>
  );
}
