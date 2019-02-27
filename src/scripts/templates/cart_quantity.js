import $ from 'jquery';

(function() {
  $(document).ready(() => {
    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      const $spinner = $(this);

      const $input = $spinner.find('input[type="number"]');

      const $btnUp = $spinner.find('.quantity-up');

      const $btnDown = $spinner.find('.quantity-down');

      const min = $input.attr('min');

      const max = $input.attr('max');

      $btnUp.click(() => {
        const oldValue = parseFloat($input.val());
        let newVal;
        if (oldValue >= max) {
          newVal = oldValue;
        } else {
          newVal = oldValue + 1;
        }
        $spinner.find('input').val(newVal);
        $spinner.find('input').trigger('change');
      });

      $btnDown.click(() => {
        const oldValue = parseFloat($input.val());
        let newVal;
        if (oldValue <= min) {
          newVal = oldValue;
        } else {
          newVal = oldValue - 1;
        }
        $spinner.find('input').val(newVal);
        $spinner.find('input').trigger('change');
      });
    });
  });
})();
