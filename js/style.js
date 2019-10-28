$(document).ready(function () {
    navBar();
    addCalendar();
    addCalendarTerapista();
});

//agregado de clase cuando se da click
function navBar() {
    $('.nav-link').click(function () {
        removeActive();
        $(this).addClass('active');
    });
}

//quitando la clase active
function removeActive() {
    $('.active').removeClass('active');
};
// full calendar

function addCalendar() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es',
        plugins: ['dayGrid'],
        height: 300
        //contentHeight: 100
    });
    calendar.render();
}

//TODO * funciones para el uso del calendario
