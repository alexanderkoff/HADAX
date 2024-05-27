
//яндекс карта
let center = [60.057693, 30.382676];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
    zoom: 14,
    controls: ['zoomControl', 'geolocationControl', 'searchControl', 'typeSelector',
		'trafficControl', 'fullscreenControl', 'rulerControl', 'routeButtonControl']
	});
	//раскомментировать для отключения параметров, для упрощения карты

	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  	//map.controls.remove('zoomControl'); // удаляем контроль зуммирования
  	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.controls.remove('geolocationControl'); // удаляем геолокацию
 	map.controls.remove('searchControl'); // удаляем поиск
 	map.controls.remove('trafficControl'); // удаляем контроль трафика
 	map.controls.remove('typeSelector'); // удаляем тип
  	map.controls.remove('routeButtonControl'); // удаляем тип

	let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: 'Офис ООО «ХЭДЭКС»',
		balloonContentBody: 'Вермя работы: 10:00-22:00',
		balloonContentFooter: 'Контактный номер: +71234567890'
	}, {
		iconLayout: 'default#image', // указываем, что используем изображение
    	iconImageHref: 'images/svg/mapmarker.png', // путь к вашей собственной иконке
    	iconImageSize: [60, 60] // задаем размер иконки метки в пикселях
	});

	map.geoObjects.add(placemark);
}

ymaps.ready(init);

