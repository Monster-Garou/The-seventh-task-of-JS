function calcNumbers(a, b){
    document.writeln(`${a} + ${b} = ${a + b}<br>`)
    document.writeln(`${a} - ${b} = ${a - b}<br>`)
    document.writeln(`${a} * ${b} = ${a * b}<br>`)
    document.writeln(`${a} / ${b}= ${a / b}<br>`)
    document.writeln(`${a} ** ${b} = ${a ** b}<br>`)
}
let a = prompt("a")
let b = prompt("b")
calcNumbers(a, b)