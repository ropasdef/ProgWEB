function aviso(){
    if (form1.nome.value == ""){
        alert("campo obrigatório");
    }
}



function Validar(){
    var formulario = document.getElementById("formulario");
    if(formulario.nome.value == "" || formulario.senha.value == "" || formulario.email.value == ""){
        alert("Valor obrigatório");
    }
}

