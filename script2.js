{
//Ejercicio 5.1
    //Busca en el HTML todos los elementos que tengan la clase "precio" 
    //y que estén dentro de la sección con id "productos"
    let listaPrecios = document.querySelectorAll("#productos .precio");
    //Busca la caja con el id "log" en la sección de salida para poder escribir ahí
    let caja1Log = document.getElementById("log");
    //Escribe dentro de la caja "log" el texto junto con la cantidad 
    //de precios que encontramos (usando .length)
    caja1Log.innerHTML = "Hay " + listaPrecios.length + " precios listados.";

//Ejercicio 5.2
    //Selecciona el elemento con el id "p1" (el café)
    let elementoP1 = document.getElementById("p1");
    //Selecciona de nuevo la caja de log
    let caja2Log = document.getElementById("log");
    //Mostra su innerHTML y su textContent en dos líneas usando <br> para separar
    //Usa += para no borrar lo que escribió el ejercicio anterior
    caja2Log.innerHTML += "<br><strong>Ejercicio 5.2:</strong><br>";
    caja2Log.innerHTML += "innerHTML: " + elementoP1.innerHTML + "<br>";
    caja2Log.innerHTML += "textContent: " + elementoP1.textContent + "<br>";
    //¿Son iguales?
    //No, no son iguales. 
    //innerHTML muestra todo el contenido interno tal cual, incluyendo las etiquetas HTML (como <span class="precio">3.50</span>).
    //textContent muestra únicamente el texto plano, ignorando y eliminando las etiquetas HTML ("Café 3.50 €").

//Ejercicio 5.3
    //Busca el elemento con el id "n2" dentro del HTML
    let parrafoN2 = document.getElementById("n2");
    //Cambia su texto utilizando textContent con el nuevo mensaje
    if (parrafoN2) {
        parrafoN2.textContent = "Reposición completada. ¡Gracias por vuestra paciencia!";
    }

//Ejercicio5.4
    //Busca de nuevo todos los elementos con la clase "precio"
    let preciosTotales = document.querySelectorAll("#productos .precio");
    //Recorre la lista uno por uno con un bucle forEach
    preciosTotales.forEach(spanPrecio => {
        // Convierter el texto actual a número decimal
        let valorActual = parseFloat(spanPrecio.textContent);
        //Suma 0.10 
        spanPrecio.textContent = (valorActual + 0.10);
    });

//Ejercicio 5.5
    //Selecciona la lista de productos por su id
    let lista = document.getElementById("lista");
    //Crea un nuevo elemento <li>
    let nuevoLi = document.createElement("li");
    //Le pone el contenido de texto y la etiqueta span con la clase precio
    nuevoLi.innerHTML = 'Tila <span class="precio">2.20</span> €';
    //Añade el nuevo elemento al final de la lista
    lista.appendChild(nuevoLi);

//Ejercicio 5.6 
    //Selecciona la lista
    let listaProductos = document.getElementById("lista");
    //Identifica el primer hijo de la lista (el primer <li>)
    let primerElemento = listaProductos.firstElementChild;
    //Crea un nuevo elemento <li> para el producto destacado
    let liDestacado = document.createElement("li");
    liDestacado.innerHTML = 'Producto destacado <span class="precio">9.99</span> €';
    //Sustituye el elemento viejo por el nuevo en la lista
    if (primerElemento) {
        listaProductos.replaceChild(liDestacado, primerElemento);
    }

//Ejercicio 5.7
    //Busca el párrafo con el id "n2"
    let parrafoAEliminar = document.getElementById("n2");
    //Si existe, lo borra directamente de la página web
    if (parrafoAEliminar) {
        parrafoAEliminar.remove();
    }    

//Ejercicio 5.8
    //Busca todos los inputs que tengan el atributo name="alumnos"
    let inputsAlumnos = document.querySelectorAll("input[name='alumnos']");
    //Recorre cada input con un bucle y los marcamos poniendo checked en true
    inputsAlumnos.forEach(input => {
        input.checked = true;
    });

//Ejercicio 5.9
    //Selecciona todos los elementos <li> que hay dentro de la lista (#lista)
    let elementosLista = document.querySelectorAll("#lista li");
    //Selecciona la caja de log
    let cajaLog = document.getElementById("log");
    //Añade el nuevo mensaje al final usando += para conservar lo anterior
    cajaLog.innerHTML += "<br><strong>Ejercicio 5.9</strong> Hay " + elementosLista.length + " elementos en la lista.";


}
