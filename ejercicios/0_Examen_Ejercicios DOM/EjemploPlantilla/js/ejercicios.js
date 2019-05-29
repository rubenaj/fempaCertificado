//Aqu� va vuestro c�digo javascript

/*Ejercicios:

Nota: 
-Todos los botones que se inserten, deben de llamar a una funci�n que debemos de crear en este archivo. Una funci�n por cada bot�n.
-El texto de los botones que hay que insertar, contendr� un texto acorde con lo que va a hacer

1) Modifica la funci�n "inicial" (comenta el alert que hay) para que cambie el color del subtitulo a rojo
	Ayuda: document.getElementById("subtitulo").style.color="red"

	function inicial() {
    alert("Esto es un alert puesto en la funci�n del evento inicio");
    document.getElementById("subtitulo").style.color = "red"
	}	
	
2) Crea un bot�n en el d�v con id="listaBotones" que que al pulsarlo cambiar� el subtitulo de la web por "Este es el subtitulo". 
	Ayuda: utiliza para cambiar el texto el siguiente c�digo 
			document.getElementById("subtitulo").innerHTML="Este es el subtitulo";
	
	function ejercicio_2() {
    document.getElementById("subtitulo").innerHTML = "Este es el subtitulo";
	}

3) Crear un bot�n que intercambie los texto entre los div explanation y participation

	function ejercicio_3() {
    var cambiotexto = document.getElementById("explanation").innerHTML;
    document.getElementById("explanation").innerHTML = document.getAnimations("participation").innerHTML;
    document.getAnimations("participation").innerHTML = cambiotexto;
	}

4) Crea un bot�n en el d�v con id="listaBotones" que se llamar� "Cambiar titulo" que al pulsarlo cambiar� el subtitulo de la web por "Este es mi titulo". 
	Haz las modificaciones necesarias en el html para que puedas modificarlo

	function ejercicio_4() {
	document.getElementById("subtitulo").innerHTML="Este es mi titulo";
	}

5) Modifica la funci�n "inicial" para que introduzca la hora actual del ordenador en el div "hora". 
	Luego descomenta la funci�n setInterval y comprueba el resultado



6) Crea un bot�n para que inserte una imagen en el div "imagenes". 
	Ayuda: document.getElementById("imagenes").innerHTML="<img id='imagenAnadida' src='ruta_a_la_imagen'/>"
	
	function ejercicio_6() {
    document.getElementById("imagenes").innerHTML = "< img id = 'imagenAnadida'
    src = './imagenes/header.jpg' / >""
	}

7) Crea un bot�n que modifique el tama�o de la imagen que acabas de insertar en el ejercicio anterior. Debe de cambiar el ancho a 100px

	function ejercicio_7() {
    document.getElementById("imagenAnadida").style.width = "100px";
	}

8) Crear un boton que oculte el div "participation".
	Ayuda: Existe un estilo llamado "display" que si lo ponemos con valor a "none" oculta el elemento

	function ejercicio_8() {
    document.getElementById("participation").style.display = "none";
	}

9) Crear un boton que muestre el div "participation".
	Ayuda: Existe un estilo llamado "display" que si lo ponemos con valor a "block" muestra el elemento
	
	function ejercicio_8() {
    document.getElementById("participation").style.display = "block";
	}

10) Modifica el c�digo html para que al pulsar sobre "Why do we use it?" desaparezca el parrafo que hay debajo. Si se vuelve a pulsar sobre el mismo tenxto, debe de aparecer.	
    
function ejercicio_10() {
    var contenedor = document.getElementById("participation");

    var parrafo = contenedor.getElementsByTagName("p");
    var valor = parrafo[0].style.display;
    if (valor == "none") {
        parrafo[0].style.display = "block";
    } else {

        parrafo[0].style.display = "none";
    }
}

11) El boton "inscribir!" debe de validar que se haya introducido un nombre mayor de 5 caracteres y un email correcto. 
   En caso de insertar alguno de los 2 mal. Cambiar� el border del input err�neo a rojo
   Ayuda: document.getElementById("nombre").style.border="1px solid red"
   
   function ejercicio_11() {
    var nombre = document.getElementById("nombre");
    if (nombre.value.length < 5) {
        nombre.style.border = "1px solid red";
    } else {
        nombre.style.border = "";
    }
    var emails = document.getElementById("email").value;

    if (emails.indexOf("@gmail.com") != -1) {
        document.getElementById("email").style.border = "";
    } else {
        document.getElementById("email").style.border = "1px solid red";
    }
}

13) Los enlaces del menu deben de desaparecer al pulsar sobre ellos. 

    function ejercicio_13(elemento) {
    elemento.style.display = "none";
    }

*/



function inicial() {
    alert("Esto es un alert puesto en la funci�n del evento inicio");
    document.getElementById("subtitulo").style.color = "red"
        //alert("Este es el texto de explanation: " + document.getElementById("explanation").innerHTML);
    dameHora()
    setInterval(dameHora, 1000);

}

function ejercicio_2() {
    document.getElementById("subtitulo").innerHTML = "Este es el subtitulo";
}

function ejercicio_3() {
    var cambiotexto = document.getElementById("explanation").innerHTML;
    document.getElementById("explanation").innerHTML = document.getElementById("participation").innerHTML;
    document.getElementById("participation").innerHTML = cambiotexto;
}

function ejercicio_4() {
    document.getElementById("subtitulo").innerHTML = "Este es mi titulo";
}

function dameHora() {
    var fecha = new Date();
    var fechaActual = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" +
        fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    document.getElementById("hora").innerHTML = fechaActual;
}

function ejercicio_6() {
    document.getElementById("imagenes").innerHTML = "<img id='imagenAnadida' src='./imagenes/ejercicio7.png'/>";
}

function ejercicio_7() {
    document.getElementById("imagenAnadida").style.width = "100px";
}

function ejercicio_8() {
    document.getElementById("participation").style.display = "none";
}

function ejercicio_9() {
    document.getElementById("participation").style.display = "block";
}

function ejercicio_10() {
    var contenedor = document.getElementById("participation");

    var parrafo = contenedor.getElementsByTagName("p");
    var valor = parrafo[0].style.display;
    if (valor == "none") {
        parrafo[0].style.display = "block";
    } else {

        parrafo[0].style.display = "none";
    }
}

function ejercicio_11() {
    var nombre = document.getElementById("nombre");
    if (nombre.value.length < 5) {
        nombre.style.border = "1px solid red";
    } else {
        nombre.style.border = "";
    }
    var emails = document.getElementById("email").value;

    if (emails.indexOf("@gmail.com") != -1) {
        document.getElementById("email").style.border = "";
    } else {
        document.getElementById("email").style.border = "1px solid red";
    }
}

function ejercicio_13(elemento) {
    elemento.style.display = "none";
}