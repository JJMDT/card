 function insertar() {

    let newName=document.getElementById("text-name").value;
    //let name=document.getElementById("idname");
    document.getElementById("idname").innerHTML=newName.toUpperCase();

//    let newImgCard=document.getElementById("imgCard").value;
//     document.getElementById("idImgCard").innerHTML=newImgCard; 

    let newTypeCard="["+document.getElementById("text-1").value +"]"; 
    //let typeCard=document.getElementById("tipo");
    document.getElementById("tipo").innerHTML =newTypeCard.toUpperCase();

                       
        
    let newAtk="ATK/"+document.getElementById("text-atk").value;
    //let atk=document.getElementById("idatk");
    //atk.innerHTML=newAtk;
    document.getElementById("idatk").innerHTML=newAtk;

    let newDef="DEF/"+document.getElementById("text-def").value;
    //let def=document.getElementById("iddef");
    document.getElementById("iddef").innerHTML=newDef;

    let newDescrip=document.getElementById("text-2").value;
    //let descripcion=document.getElementById("idp");
    document.getElementById("idp").innerHTML=newDescrip;

   // let newAttribute=document.getElementById("text-attrib").value;
    //let attribute=document.getElementById("idattribute");
   // document.getElementById("idattribute").innerHTML=newAttribute;

    let newNro=document.getElementById("nrocard").value;
    document.getElementById("idcard").innerHTML="CARD NRO: "+newNro;


    function mostrarImagen(event){
        var imagenSource = event.target.result;
        var previewImage = document.getElementById('idImgCard');
    
        previewImage.src = imagenSource;
      }
    
      function procesarArchivo(event){
         var imagen = event.target.files[0];
    
         var lector = new FileReader();
    
         lector.addEventListener('load', mostrarImagen, false);
    
         lector.readAsDataURL(imagen);
      }
    
      document.getElementById('imgCard').addEventListener('change', procesarArchivo, false)  
      
     

     
 }
 function mostrarImg() {
    document.getElementById("segundoPaso").style.display="block"
    document.getElementById("imgCard").style.display="block"
  }
function todo() {
    insertar();
    alert ("ya casi terminamos, te falta la imagen")
    mostrarImg();
}