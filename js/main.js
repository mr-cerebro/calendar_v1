document.addEventListener('DOMContentLoaded', function () {
    const monthsPT = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    function GetDaysCalendar(mes, ano) {
        document.getElementById('mes').innerHTML = monthsPT[mes]
    }
    GetDaysCalendar(7, 2000)
})