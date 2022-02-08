let chistes= true

while(chistes=== true){
alert("Están dos borrachos y uno le dice al otro:No sigas bebiendo que te estás poniendo borroso")
alert("Paco, ¿dónde estuviste?En una clínica donde te quitan las ganas de fumar.¡Pero si estás fumando!Ya… pero sin ganas")

let confirmacion = prompt ("Te cuento más chistes")
if(confirmacion === "no") {
    break
}

alert("¿Sabes cómo se queda un mago después de comer?Magordito")
alert ("Cariño, ¿tengo la nariz grande? No, tienes una nariz común.- ¿Ah, sí? Sí, ¡común tucán!")

confirmacion = prompt ("Te cuento más chistes")
if (confirmacion === "no") {
    break
}

alert("¿Sabes cómo se queda un mago después de comer?Magordito")
alert ("Cariño, ¿tengo la nariz grande? No, tienes una nariz común.- ¿Ah, sí? Sí, ¡común tucán!")

confirmacion = prompt ("Te cuento más chistes")
if (confirmacion == "no")
{
break} 
} 

//********************************************* */

let dado= Math.trunc(Math.random() * 6) +1;
do{
    alert (`Tiraste un ${dado}`);
    dado= Math.trunc(Math.random() * 6) +1;
    if (dado === 6 )
    alert("Salió 6, el bucle terminó!")
}

while(dado !==6)