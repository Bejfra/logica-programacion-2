
let temp;
function Conv(temp){
    let tempCel=prompt("Ingrese la temperatura en Celsius para convertirla a Fahrenheit y Kelvin: ");   
    tempCel= Number(tempCel);
    let tempFahr=(tempCel*9/5)+32;
    let tempKel=(tempCel+273.15);
    if (Number.isNaN(tempCel)===false){
    alert("La temperatura en Fahrenheit es: " + tempFahr+ "\nLa temperatura en Kelvin es: "+tempKel);
    }else{
        alert ("Error, el dato deben ser de tipo número");
        Conv(tempCel);
    }
}
Conv(temp);