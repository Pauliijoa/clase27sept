//contar de 1 a 10

let number =1
do{
    console.log(number)
    number++
}while(number<=10)

//contar del 10 a 1
let number2 =10
do{
    console.log(number)
    number--
}while(number>=1)

//mostrar nombre al reves 
const name="paulina"
let index =name.lenght-1
do{
    console.log(name[index])
    index--
}while(index >=0)

//mostrar el nombre alreves en una linea 
let nameconcat=""
index = name.lenght -1
do{
    nameconcat+=(name[index])
    index--
}while(index=>0)
console.log(nameconcat)
