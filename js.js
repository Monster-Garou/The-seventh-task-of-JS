let age = prompt("input your age")
function getAge(age){
    if (age >= 18){
        alert('Welcome')
    }else if (age < 18 & age > 0){
        alert('You can come out')
    }else{
        alert("Are you moron?")
    }
}
getAge(age)