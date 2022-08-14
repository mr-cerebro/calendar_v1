document.addEventListener('DOMContentLoaded', function () {
    const monthsPT = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const tableDays = document.getElementById('dias')
    function GetDaysCalendar(mes, ano) {
        document.getElementById('mes').innerHTML = monthsPT[mes]
        document.getElementById('ano').innerHTML = ano

        let firstDayOfWeek = new Date(mes, ano, 1).getDay() - 1 
        let getLastDayThisMonth = new Date(mes, ano + 1, 0).getDay()
    }
    GetDaysCalendar(7, 2000)
})