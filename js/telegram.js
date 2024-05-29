$('.telegram-form').on('submit', function (event) {
    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]');

    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled', '');

    data.append('Имя', $('[name="name"]', form).val());
    data.append('Телефон', $('[name="phone"]', form).val());
    data.append('Страница', document.title); // Добавляем заголовок страницы

    files.each(function (key, file) {
        let cont = file.files;
        if (cont) {
            $.each(cont, function (key, value) {
                data.append(key, value);
            });
        }
    });

    $.ajax({
        url: 'http://localhost/hadax/PHP/ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function () {
            let myXhr = $.ajaxSettings.xhr();

            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        let percentage = (e.loaded / e.total) * 100;
                        percentage = percentage.toFixed(0);
                        $('.submit', form).html(percentage + '%');
                    }
                }, false);
            }

            return myXhr;
        },
        error: function (jqXHR, textStatus) {
            // Обработка ошибок
        },
        complete: function () {
            // Действия после успешной отправки формы
            console.log('Complete');
            form.reset();

            // Переменная для хранения идентификатора модального окна
            let modalId = '#success-modal-1'; // Измените на нужный идентификатор

            // Показать модальное окно
            $(modalId).fadeIn();

            // Закрыть модальное окно 'exampleModal'
            $('#exampleModal').modal('hide');

            // Скрыть модальное окно через 3 секунды
            setTimeout(function() {
                $(modalId).fadeOut();
            }, 3000);
        }
    });

    return false;
});
