function alpha(ch){
    test=true;
    for(i=0;i<ch.length;i++){
        if(ch.charAt(i).toUpperCase()<'A' || ch.charAt(i).toUpperCase()<'Z')
        test=false;
    }
    return test;
}

function verif1(){
    nom=document.getElementById("nom").value;
    email=document.getElementById("email").value;
    mob=document.getElementById("mobile").value;
    emaill=document.getElementById("emaill").value;
    if (nom.length<3){
        alert("longeur non valide");
    }
    at=email.indexOf('@');
    pt=email.lastIndexOf('.');
    if(at==-1 || pt==-1 || pt<at){
        alert("email invalid");
        return false;
    }
    if (mob.length !=8 || num(mob)==false || Number(mob[0])<=1 ) {
        alert(" numero de telephone incorrect"); 
    }
    at=emaill.indexOf('@');
    pt=emaill.lastIndexOf('.');
    if(at==-1 || pt==-1 || pt<at){
        alert("email invalid");
        return false;
    }

}



