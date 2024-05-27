// Загружаем данные из JSON файла
fetch('/hadax/data/search_data.json')
  .then(res => {
    console.log('JSON данные загружаются...'); // Выводим сообщение о начале загрузки
    return res.json();
  })
  .then(data => {
    console.log('JSON данные успешно загружены:', data); // Выводим загруженные данные

    const searchInput = document.querySelector('.search');
    const searchOptions = document.querySelector('.options');

    // Функция для получения опций поиска
    function getOptions(word, data) {
      return data.filter(item => {
        // Проверяем, содержит ли заголовок или содержимое введенное слово
        const regex = new RegExp(word, 'gi');
        return item.title.match(regex) || item.content.match(regex);
      });
    }

    // Функция для отображения опций поиска
    function displayOptions() {
      // Если введено менее трёх символов, очищаем результаты и выходим из функции
      if (this.value.length < 3) {
        searchOptions.innerHTML = '';
        return;
      }

      const options = getOptions(this.value, data);

      const html = options
        .map(item => {
          // Выделяем совпадающую часть заголовка или содержимого
          const regex = new RegExp(this.value, 'gi');
          const highlightedTitle = item.title.replace(regex,
            (match) => `<span class="hl">${match}</span>`
          );
          const highlightedContent = item.content.replace(regex,
            (match) => `<span class="hl">${match}</span>`
          );

          // Проверяем наличие изображения
          const imageHTML = item.image ? `<img src="${item.image}" alt="${item.title}">` : '';

          return `
            <li>
              <a href="${item.url}">
                ${imageHTML}
                <div>
                  <p>${highlightedTitle}</p> 
                  <p>${highlightedContent}</p>
                </div>
              </a>
            </li>
          `;
        })
        .join('');

      searchOptions.innerHTML = html;
    }

    // Обработчики событий для поля ввода
    searchInput.addEventListener('input', displayOptions); // Изменилось с 'change' на 'input' для мгновенного обновления
  })
  .catch(error => {
    console.error('Произошла ошибка при загрузке JSON данных:', error);
  });

// Устанавливаем фокус ввода при отображении модального окна
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('exampleModalSearch');

  modal.addEventListener('shown.bs.modal', function () {
    const input = modal.querySelector('.search');
    input.focus();
  });
});
