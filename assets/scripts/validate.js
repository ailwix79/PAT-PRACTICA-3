
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (document.getElementById('alertUser') != null) {
          var elem = document.getElementById('alertUser');
          elem.remove();
        }
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          var valid = document.createElement('div');
          valid.setAttribute('class','alert alert-warning alert-dismissible fade show');
          valid.setAttribute('id','alertUser');
          valid.innerHTML = 'Revise los campos';
          document.getElementById('verdict').appendChild(valid);
        } else {
          event.preventDefault();
          event.stopPropagation();
          var valid = document.createElement('div');
          valid.setAttribute('class','alert alert-success alert-dismissible fade show');
          valid.setAttribute('id','alertUser');
          valid.innerHTML = 'Información Enviada correctamente';
          document.getElementById('verdict').appendChild(valid);
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

