var dialog = document.querySelector('dialog-id')
      // выводим модальное окно
      document.querySelector('footer__button').onclick = function () {
        dialog.showModal()
      }
      // скрываем окно
      document.querySelector('dialog__button').onclick = function () {
        dialog.close() 
      }