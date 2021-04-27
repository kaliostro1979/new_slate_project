/*
  *
  * Validate forms
  *
  */
import $ from 'jquery'

setTimeout(() => {
  let d = {
    forms: [
      "[data-form='contact']",
      "[data-form='register']",
      "[data-form='login']",
      "[data-form='reset']",
      "[data-form='activate']",
      "[data-form='address']"
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
            },
            'customer[first_name]': {
              required: true,
              minlength: 2
            },
            'address[first_name]': {
              required: true,
              minlength: 2
            },
            'customer[last_name]': {
              required: true,
              minlength: 2
            },
            'address[last_name]': {
              required: true,
              minlength: 2
            },
            'customer[email]': {
              required: true,
              email: true
            },
            'customer[password]': {
              required: true,
              minlength: 4
            },
            'address[city]': {
              required: true
            },
            'address[zip]': {
              required: true
            }
          },
          messages: {
            'contact[name]': {
              required: 'Enter your name',
              minlength: 'min length is 2 characters'
            },
            'customer[first_name]': {
              required: 'Enter your name',
              minlength: 'min length is 2 characters'
            },
            'address[first_name]': {
              required: 'Enter your name',
              minlength: 'min length is 2 characters'
            },
            'customer[last_name]': {
              required: 'Enter your name',
              minlength: 'min length is 2 characters'
            },
            'address[last_name]': {
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
            'customer[email]': {
              required: 'Enter your email',
              email: 'Must be a valid email'
            },
            'customer[password]': {
              required: 'Enter your password',
              minlength: 'min length is 4 characters'
            },
            'contact[phone]': {
              required: 'Enter your phone number'
            },
            'contact[body]': {
              required: 'Enter your message subject'
            },
            'address[city]': {
              required: 'Enter your city'
            },
            'address[zip]': {
              required: 'Enter your postal/zip code'
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
