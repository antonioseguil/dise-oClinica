function getPopovers() {
    template = '<ul class="list-group pointer">';
    template += '<li id="1" class="list-group-item itemprueba">U0754 María Fernadez 07:00</li>';
    template += '<li id="2" class="list-group-item itemprueba">U0572 Mario Gonzales 15:00</li>';
    template += '</ul>';
    return template;
}

//funcion para hacer visible a un modal

function getShowModal(modaid){
  $('#'+modaid).modal('show');
}
