function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tabuada')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1

        tab.innerHTML = ''
        while(c <= 10){
            tab.innerHTML += `${n} x ${c} = ${n*c}<br>`
            c++
        }
    }
}