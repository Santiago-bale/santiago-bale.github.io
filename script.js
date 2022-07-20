String.prototype.replaceAt=function(index, character) 
{ return this.substring(0, index) + character + this.substring(index+character.length); } 

//Uso:  palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

const palabras = ['transporte', 'retrato', 'castillo', 'escuela', 'alergia', 'monitorear', 'problematica', 'plataforma']
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0


document.querySelector('#enviar').addEventListener('click', () => {
    const letra = document.querySelector('#letra').value;
    let fallo = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            fallo = false;
        }
    }
    if(fallo){
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(205*contadorFallos) + 'px 0'
        if(contadorFallos == 4){
            alert("perdiste")
        } else{
            if(palabraConGuiones.indexOf('_') < 0){
                document.querySelector('#ganador').style.display = 'flex';
            }
        }
    }
    document.querySelector('#pintar').innerHTML = palabraConGuiones;
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
});

