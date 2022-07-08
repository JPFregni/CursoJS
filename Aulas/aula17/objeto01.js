let amigo = {
    nome:'João', 
    idade:'22', 
    sexo:'Masculino',
    peso:118,

    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} de idade ${amigo.idade}, do sexo ${amigo.sexo}. Pesa ${amigo.peso}`)