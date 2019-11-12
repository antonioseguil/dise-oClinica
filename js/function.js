function getPopovers() {
    template = '<ul class="list-group pointer">';
    template += '<li id="1" class="list-group-item itemprueba">U0754 María Fernadez 07:00</li>';
    template += '<li id="2" class="list-group-item itemprueba">U0572 Mario Gonzales 15:00</li>';
    template += '</ul>';
    return template;
}

//funcion que llama al evento click
function addEventoPopover(calendar){
//  var btnPopover = document.getElementById('1');
    var btnPopover = $('.itemprueba');
    btnPopover.click(function(){
      console.log('click');
    });
}

//funcion para agregar los eventos a un calendar

function addEventoCalendario(varCalendario,listaAdd){
//  varCalendario.addEvent(varCalendario,listaAdd);
}
