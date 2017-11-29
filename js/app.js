
var selectPromo = document.getElementById("select-promo");
var imagesContainer = document.getElementById("images-container");
/*var subImagesContainer = null;*/

imagesContainer.addEventListener("click",showModal);

selectPromo.addEventListener("change",showPromo);

/*nombre*/
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];
/*promo*/
var CHILE4 = "4-chile" 
var LIMA5 = "5-lima"
var LIMA6 = "6-lima"

var img = document.createElement("img");

function showCoders (arr, promo) {
    /*if (subImagesContainer)
        imagesContainer.removeChild(subImagesContainer);

        subImagesContainer = document.createElement ("div");
        imagesContainer.appendChild(subImagesContainer);*/
    
    for (var i=0; i<arr4Chile.length; i++)
        createImages(promo,arr[i]);
    
}
/*se crea una función, y el atributo para reconozca la ruta de la imagen*/
function createImages (promo,nombre){
    var img = document.createElement ("img");
    
    img.setAttribute("src","assets/images/" + promo + "/" + nombre + ".jpg");
    
    /*subImagesContainer.appendChild(img);*/
    imagesContainer.appendChild(img);
};

function showPromo (event){
    switch(true) {
        case event.target.value === "4chile":
            imagesContainer.textContent = "";
            showCoders (arr4Chile, CHILE4);;
            break;
        case event.target.value === "5lima":
            imagesContainer.textContent = "";
            showCoders (arr5Lima, LIMA5);
            break;
        case event.target.value === "6lima":
            imagesContainer.textContent = "";
            showCoders (arr6Lima, LIMA6);    
            break;
        default:
            imagesContainer.textContent = "";
            /*showCoders (arr4Chile, CHILE4);
            showCoders (arr5Lima, LIMA5);
            showCoders (arr6Lima, LIMA6);*/
    }
    
    /*console.log (event.target.value);*/

}

/* showCoders (arr4Chile, CHILE4);
showCoders (arr5Lima, LIMA5);
showCoders (arr6Lima, LIMA6); */

function showModal (event) {
    /*console.log (event.target);*/
    /*creando el div*/
    var modal = document.createElement ("div");
    modal.style.position = "fixed";
    modal.style.background = "rgba(0,0,0,0.6)";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%"; 
    modal.style.height = "100%"; 

    modal.appendChild(event.target);
    /*agregar a la imagen estilo*/
    event.target.style.margin = window.innherHeigth / 4 + "px auto";
    event.target.style.display = "block";

    document.body.appendChild(modal);

    modal.addEventListener ("click", function (event){
        event.target.parentElement.removeChild(event.target);
    });
}

/*PENDIENTE:arreglar el div que se elimina*/