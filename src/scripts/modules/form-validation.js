/*
  *
  * Validate forms
  *
  */
import $ from 'jquery'

setTimeout(() => {
  let d = {
    forms: [
      "[data-form='contact']"
    ]
  }
  let g = {
    forms: []
  }

  if (d.forms.length) {
    for (var i in d.forms) {
      $(d.forms[i]).each(function (index, element) {
        g.forms.push($(element))
      })
    }
  }

  $(() => {
    if (g.forms.length) {
      for (let i in g.forms) {
        g.forms[i].validate({
          rules: {
            'contact[name]': {
              required: true,
              minlength: 2
            },
            'contact[email]': {
              required: true,
              email: true
            },
            'email': {
              required: true,
              email: true
            },
            'contact[phone]': {
              required: true
            },
            'contact[body]': {
              required: true
            }
          },
          messages: {
            'contact[name]': {
              required: 'Enter your name',
              minlength: 'min length is 2 characters'
            },
            'email': {
              required: 'This field is required.',
              email: 'Incorrect e-mail'
            },
            'contact[email]': {
              required: 'Enter your email',
              email: 'Must be a valid email'
            },
            'contact[phone]': {
              required: 'Enter your phone number'
            },
            'contact[body]': {
              required: 'Enter your message subject'
            }
          },
          highlight: function (element) {
            $(element).parents('form').addClass('error')
            $(element).closest('.form-group').removeClass('valid').addClass('error')
            $(element).attr('data-valid', 'false')
            // validForm();
          },
          unhighlight: function (element) {
            $(element).parents('form').removeClass('error')
            $(element).closest('.form-group').removeClass('error').addClass('valid')
            $(element).attr('data-valid', 'true')
            // validForm();
          }
        })
      }
    }
  })
}, 4000)

$('.form-success__button').on('click', (event) => {
  event.preventDefault()
  $('.form-success').hide()
  $('.form-errors').hide()
})

$('input[name="contact[phone]"]').mask('+ 99 (999) 999-99-99')
