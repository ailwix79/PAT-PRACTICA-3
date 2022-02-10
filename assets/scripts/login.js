
function addtoev() {
    var bns = document.getElementsByTagName("button");
    for (i = 0; i < bns.length; i++) {
      bns[i].addEventListener("click", function(event) {
        var user = document.getElementById('user');
        var passwd = document.getElementById('passwd');
        if (document.getElementById('alertUser') != null) {
            var elem = document.getElementById('alertUser');
            elem.remove();
        }
        if (user.value == 'admin' && passwd.value != 'admin') {
            event.preventDefault();
            event.stopPropagation();
            var valid = document.createElement('div');
            valid.setAttribute('class','alert alert-warning alert-dismissible fade show');
            valid.setAttribute('id','alertUser');
            valid.innerHTML = 'Contraseña Incorrecta';
            document.getElementById('verdict').appendChild(valid);
        } else if (user.value == 'admin' && passwd.value == 'admin'){
            event.preventDefault();
            event.stopPropagation();
            var valid = document.createElement('div');
            valid.setAttribute('class','alert alert-success alert-dismissible fade show');
            valid.setAttribute('id','alertUser');
            valid.innerHTML = 'Acceso Autorizado :)';
            document.getElementById('verdict').appendChild(valid);
        } else if (user.value != 'admin' && passwd.value != 'admin'){
            event.preventDefault();
            event.stopPropagation();
            var valid = document.createElement('div');
            valid.setAttribute('class','alert alert-danger alert-dismissible fade show');
            valid.setAttribute('id','alertUser');
            valid.innerHTML = 'Usuario no Encontrado';
            document.getElementById('verdict').appendChild(valid);
        }
    });
    }
  }
  
window.addEventListener("load",function() {
    addtoev();
});
