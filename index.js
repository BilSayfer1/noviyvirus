let index = prompt(`Who do you want deelete?`)
let arr = [`Aleksey`, 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']
if(arr.indexOf(index) == -1) {
    alert(`Нету такого элемента`)
} else {
let indexelement = arr.indexOf(index)
arr.splice(indexelement, 1)
}
console.log(arr);



let randoms = [1,2,false,`hello`,24,`world`,undefined,null,`error`,22]
let numbers = []

randoms.filter(item => {
if(typeof item === `number`) {
    numbers.push(item)
}


})
console.log(numbers);
