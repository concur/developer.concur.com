var DevcenterForms = (function($) {
  $.validator.setDefaults({
    highlight: function(element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
      if (element.parent('.input-group, label').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  // Handle form validation and submission
  function handleSandboxRegistrationForm() {
    $("#sandboxRegistration").validate({
      // Rules for form validation
      rules: {
        firstName: { required: true },
        lastName: { required: true },
        email: {
          required: true,
          email: true
        },
        company: { required: true },
        password: { required: true },
        passwordVerify: {
          required: true,
          minlength: 7,
          equalTo: '#password'
        },
        country: { required: true },
        website: { url: true },
        termsOfUseAgreement: { required: true }
      },

      // Messages for form validation
      messages: {
        firstName: { required: 'Please enter your first name' },
        lastName: { required: 'Please enter your last name' },
        email: { required: 'Please enter a valid email address' },
        company: { required: 'Please enter your company name' },
        password: { required: 'Please enter your desired sandbox password' },
        passwordVerify: {
          required: 'Please verify your desired sandbox password',
          equalTo: 'Password and Verify Password must be equal'
        },
        country: { required: 'Please enter your country' },
        website: { required: 'Please enter a website, with full url including http://' },
        termsOfUseAgreement: { required: 'Please accept the terms of use to create your sandbox' }
      },

      // Ajax form submition
      submitHandler: function(form) {
        if($('#email-alt').val()) {
          return;
        }
        $(form).ajaxSubmit({
          beforeSend: function() {
            $('#status-modal').modal('show');
            $('#sandboxRegistration button[type="submit"]').attr('disabled', true);
          },
          error: function(res) {
            ga('send', 'event', 'Form', 'Error', 'Sandbox Registration');
            $('#status-modal').modal('hide');
            $('#form-error').removeClass('hidden');
            $('#form-error > h3').append(res.responseText);
            if (res.statusText === 'error' && $('#form-error > h3').text() === '') {
              $('#form-error > h3').append('Login Timeout Error: Please proceed to <a href="https://www.concursolutions.com">www.concursolutions.com</a> and login with the credentials submitted below.');
            }
          },
          success: function(data) {
            ga('send', 'event', 'Form', 'Submit', 'Sandbox Registration');
            $("#sandboxRegistration").addClass('submited');
            $('#form-success').removeClass('hidden');

            var verifyLoginPage = 'https://www.concursolutions.com/verify_login.asp?breeze=y';
            // create a new hidden form

            var hiddenForm = $('<form></form>')
              .attr("name", "loginCS_hidden")
              .attr("id", "loginCS_hidden")
              .attr("style", "display:none")
              .attr("action", verifyLoginPage)
              .attr("method", "POST");

              $('<input></input>')
                .attr("type", "hidden")
                .attr("name", "userid")
                .attr("value", data.userid)
                .appendTo(hiddenForm)

              $('<input></input>')
                .attr("type", "hidden")
                .attr("name", "password")
                .attr("value", data.password)
                .appendTo(hiddenForm);

              hiddenForm.appendTo('body').submit();
          }
        });
      }
    });
  }

  return {
    init: function() {
      handleSandboxRegistrationForm();
    }
  }
})(jQuery);
