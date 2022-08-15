document.addEventListener('DOMContentLoaded', function(){
    const monthsPT = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const tableDays = document.getElementById('dias')

    function GetDaysCalendar(mes, ano) {
        document.getElementById('mes').innerHTML = monthsPT[mes]
        document.getElementById('ano').innerHTML = ano

        let firstDayOfWeek = new Date(ano, mes, 1).getDay() - 1
        let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate()
        
        for(var i = -firstDayOfWeek, index = 0; i < (42-firstDayOfWeek); i++,index++) {
            let dt = new Date(ano,mes,i);
            let dtNow = new Date()
            let dayTable = tableDays.getElementsByTagName('td')[index]
            dayTable.classList.remove('mes_anterior')
            dayTable.classList.remove('prox_mes')
            dayTable.classList.remove('dia_atual')
            dayTable.innerHTML = dt.getDate()

            if(dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()) {
                dayTable.classList.add('dia_atual')
            }

            if(i < 1) {
                dayTable.classList.add('mes_anterior')
            }

            if( i > getLastDayThisMonth) {
                dayTable.classList.add('prox_mes')
            }
        }
    }

    let now = new Date()
    let mes = now.getMonth()
    let ano = now.getFullYear()
    GetDaysCalendar(mes, ano)

    const botao_proximo = document.getElementById('btn_next')
    const botao_anterior = document.getElementById('btn_prev')

    botao_proximo.onclick = function(){
        mes++
        if(mes > 11) {
            mes = 0
            ano++
        }
        GetDaysCalendar(mes, ano)
    }

    botao_anterior.onclick = function(){
        mes--
        if(mes < 0) {
            mes = 11
            ano--
        }
        GetDaysCalendar(mes, ano)
    }
})