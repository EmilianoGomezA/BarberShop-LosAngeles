//SE CREA UNA CONSTANTE CON EL ELEMENTO HTML DONDE SE COLOCARÁN LOS CORTES
const containerHairstyles = document.getElementById("hairstyles-container");

//SE BUSCA EL ARCHIVO .json PARA INICIAR LA FUNCIÓN QUE REÚNE LOS DATOS
fetch("js/data.json")
    .then(response => response.json())
    .then(data => {
        //POR CADA OBJETO SE REALIZARÁ LA FUNCIÓN HAIRSTYLE
        data.hairstyles.forEach(function(hairstyle) {

            //SE CREA EL DIV PRINCIPAL DE LA CARTA Y SE LE AGREGA LA CLASE PREVIAMENTE CREADA EN CSS PARA DICHO ELEMENTO
            const hairstyleDiv = document.createElement("div");
            hairstyleDiv.classList.add("hairstyle-file");
            //SE LE COLOCA AL DIV UN ATRIBUTO LLAMADO "category", ESTE CONTENDRÁ COMO VALOR EL COLOCADO EN "category" DEL .json, QUE A SU VEZ DEBE COINCIDIR CON EL VALOR PUESTO EN LOS ELEMENTOS DEL DIV CON CLASE "category-list" (REVISAR HTML) PARA QUE SE MUESTRE LA TARJETA AL SELECCIONAR DETERMINADO GÉNERO
            hairstyleDiv.setAttribute("category", hairstyle.category);

            //SE CREA LA CONSTANTE QUE CONTENDRÁ LA IMAGEN DEL CORTE, COMO ELEMENTO SE REQUIERE CREAR UN "img"
            const hairstyleImg = document.createElement("img");
            //A LA CONSTANTE DE IMAGEN SE LE AGREGA COMO VALOR DEL ATRIBUTO src LOS DATOS COLOCADOS EN "img" DEL .json (COLOCAR AHÍ EL URL DE LA IMAGEN) Y PARA EL ATRIBUTO alt DE LA IMAGEN SE OCUPA EL DATO INGRESADO EN "name" DEL .json
            hairstyleImg.src = hairstyle.img;
            hairstyleImg.alt = hairstyle.name;

            //SE AGREGA LA CONSTANTE QUE CONTENDRÁ EL NOMBRE DEL CORTE, UTILIZO UN h2 PARA ELLO
            const hairstyleName = document.createElement("h2");
            //AL h2 SE LE ADJUNTA EL VALOR DE "name" COLOCADO EN EL .json
            hairstyleName.innerHTML = hairstyle.name;

            //SE AGREGA LA CONSTANTE QUE CONTENDRÁ EL PRECIO DEL CORTE, UTILIZO UN h3 PARA ELLO
            const hairstylePrice = document.createElement("h3");
            //AL h3 SE LE ADJUNTA EL VALOR DE "price" COLOCADO EN EL .json
            hairstylePrice.innerHTML = hairstyle.price;

            //SE ESPECIFICA QUE LA IMAGEN, EL NOMBRE Y EL PRECIO SON HIJOS DEL DIV DE LA CARTA
            hairstyleDiv.appendChild(hairstyleImg);
            hairstyleDiv.appendChild(hairstyleName);
            hairstyleDiv.appendChild(hairstylePrice);

            //SE ESPECIFICA QUE EL DIV DE LA CARTA (AL QUE SE LE ACABAN DE ADJUNTAR LAS DEMÁS CONSTANTES), ES HIJO DEL ELEMENTO QUE PERTENECE A LA CONSTANTE CREADA AL INICIO DEL CÓDIGO (LA section EN EL HTML)
            containerHairstyles.appendChild(hairstyleDiv);
        });

    })

    .catch(error => console.error(error));