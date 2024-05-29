var misItems = document.querySelectorAll('.nav-link');

misItems.forEach(function(item) {

    item.addEventListener('mouseover', function() {

        item.classList.add('shadow-hover');

    });

});

var producciones = document.querySelectorAll('.produccion');


producciones.forEach(function(producto) {

    producto.addEventListener('mouseover', function() {

        producto.classList.add('shadowProdu-hover');

    });

});




