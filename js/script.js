//alert("hola");

function ticketVenta (){

    function tortaPago ($cantidad, $nombre, $picante, $precio){
        
       if($cantidad != 0){
                var fila = document.createElement("tr");
                var nota = document.createElement("td");
                nota.innerHTML = $nombre;
                var cantidad = document.createElement("td");
                cantidad.innerHTML = $cantidad;
                var picanteT = document.createElement("td");
                picanteT.innerHTML = $picante;
                var precioT = document.createElement("td");
                precioT.innerHTML = $precio;
                var importe = document.createElement("td");
                importe.innerHTML = $precio * $cantidad;
                fila.style.fontSize = "20px";
                fila.style.fontWeight = "bold";
                fila.style.textAlign = "center";
                tabla.appendChild(fila);
                fila.appendChild(nota);
                fila.appendChild(cantidad);
                fila.appendChild(picanteT);
                
                fila.appendChild(precioT);
                fila.appendChild(importe);
            }
        }

    var sumaTotal = 0;

    //Informacion T1
    var nombreT1 = document.getElementById("nomT1").innerHTML;
    var precioT1 = parseFloat(document.getElementById("pT1").innerHTML);
    var cantidadT1 = document.getElementById("cantidadT1").value;
    var picanteT1 = document.getElementById("picanteT1").value;
    sumaTotal = sumaTotal + (precioT1 * cantidadT1);
    

    //Informacion T2
    var nombreT2 = document.getElementById("nomT2").innerHTML;
    var precioT2 = parseFloat(document.getElementById("pT2").innerHTML);
    var cantidadT2 = document.getElementById("cantidadT2").value;
    var picanteT2 = document.getElementById("picanteT2").value;
    sumaTotal = sumaTotal + (precioT2 * cantidadT2);

   //Informacion T3
    var nombreT3 = document.getElementById("nomT3").innerHTML;
    var precioT3 = parseFloat(document.getElementById("pT3").innerHTML);
    var cantidadT3 = document.getElementById("cantidadT3").value;
    var picanteT3 = document.getElementById("picanteT3").value;
    sumaTotal = sumaTotal + (precioT3 * cantidadT3);

     //Informacion T4
    var nombreT4 = document.getElementById("nomT4").innerHTML;
    var precioT4 = parseFloat(document.getElementById("pT4").innerHTML);
    var cantidadT4 = document.getElementById("cantidadT4").value;
    var picanteT4 = document.getElementById("picanteT4").value;
    sumaTotal = sumaTotal + (precioT4 * cantidadT4);

    //Informacion T5
    var nombreT5 = document.getElementById("nomT5").innerHTML;
    var precioT5 = parseFloat(document.getElementById("pT5").innerHTML);
    var cantidadT5 = document.getElementById("cantidadT5").value;
    var picanteT5 = document.getElementById("picanteT5").value;
    sumaTotal = sumaTotal + (precioT5 * cantidadT5);

    //Informacion T6
    var nombreT6 = document.getElementById("nomT6").innerHTML;
    var precioT6 = parseFloat(document.getElementById("pT6").innerHTML);
    var cantidadT6 = document.getElementById("cantidadT6").value;
    var picanteT6 = document.getElementById("picanteT6").value;
    sumaTotal = sumaTotal + (precioT6 * cantidadT6);
    
    //Limpiar Pantalla Menu
    var capa = document.getElementById("limpiar").innerHTML = "";

    if (cantidadT1 == 0 & cantidadT2 == 0 & cantidadT3 == 0 & cantidadT4 == 0 & cantidadT5 == 0 & cantidadT6 == 0){
        var capa = document.getElementById("limpiar");
        var naBoton=document.createElement("div");
        capa.appendChild(naBoton);
        naBoton.style.display = "flex";
        naBoton.style.justifyContent = "center";
        var boton = document.createElement("a");
        boton.innerHTML = "NO HAS PEDIDO NADA";
        boton.setAttribute("class", "alerta")
        naBoton.appendChild(boton);
    }

    var capa = document.getElementById("limpiar");
    var titulo = document.createElement("h1");
    titulo.innerHTML = "TICKET"; 
    capa.appendChild(titulo);
    titulo.style.textAlign = "center";

    var contenedor = document.createElement("div");
        contenedor.style.display = "flex";
        contenedor.style.justifyContent = "space-around";
        capa.appendChild(contenedor);

        var tabla = document.createElement("table");
        var connombres = document.createElement("thead")
        var nombres = document.createElement("tr")
        var encabezado = document.createElement("th");
        encabezado.innerHTML = "Torta";
        var encabezado1 = document.createElement("th");
        encabezado1.innerHTML = "Cantidad";
        var encabezado2 = document.createElement("th");
        encabezado2.innerHTML = "Picante";
        var encabezado3 = document.createElement("th");
        encabezado3.innerHTML = "Precio";
        var encabezado4 = document.createElement("th");
        encabezado4.innerHTML = "Importe";
        
        tabla.style.width = "95%";
        nombres.style.fontSize = "30px";
        nombres.style.fontWeight = "bold";
        
        contenedor.appendChild(tabla);
        tabla.appendChild(connombres);
        connombres.appendChild(nombres);
        nombres.appendChild(encabezado);
        nombres.appendChild(encabezado1);
        nombres.appendChild(encabezado2);
        nombres.appendChild(encabezado3);
        nombres.appendChild(encabezado4);

    tortaPago(cantidadT1, nombreT1, picanteT1, precioT1);
    tortaPago(cantidadT2, nombreT2, picanteT2, precioT2);
    tortaPago(cantidadT3, nombreT3, picanteT3, precioT3);
    tortaPago(cantidadT4, nombreT4, picanteT4, precioT4);
    tortaPago(cantidadT5, nombreT5, picanteT5, precioT5);
    tortaPago(cantidadT6, nombreT6, picanteT6, precioT6);

    var total = document.createElement("div");
        total.style.textAlign = "center";
        total.style.fontSize = "30px";
        total.style.fontWeight = "bold";
        total.style.marginTop = "20px";
        capa.appendChild(total);
    var totalPagar = document.createElement("a");
    totalPagar.innerHTML = "Total a Pagar $";
    var pago = document.createElement("a");
    pago.innerHTML = sumaTotal;
    total.appendChild(totalPagar);
    total.appendChild(pago);

    var conBoton=document.createElement("div");
    capa.appendChild(conBoton);
    conBoton.style.display = "flex";
    conBoton.style.justifyContent = "center";
    var boton = document.createElement("a");
    boton.innerHTML = "Voler al Menú";
    boton.setAttribute("class", "boton aceptar")
    boton.setAttribute("href", "/");
    //boton.style.
    conBoton.appendChild(boton);
}