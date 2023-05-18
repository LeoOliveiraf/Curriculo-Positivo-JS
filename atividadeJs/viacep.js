function limpaFoms(){
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('ibge').value = '';
}

function meucallback(json){
    if(!("erro" in json)){
        document.getElementById('rua').value = (json.logradouro);
        document.getElementById('bairro').value = (json.bairro);
        document.getElementById('localidade').value = (json.localidade);
        document.getElementById('uf').value = (json.uf);
        document.getElementById('ibge').value = (json.ibge);
    }else{
        limpaFoms();
        alert("CEP não Encontrado!");
    }
}

function pesquisacep(valor){
    let cep = valor.replace(/\D/g,'');
    if(cep != ""){
       let validacep = /^[0-9]{8}$/;
       if(validacep.test(cep)){
         let script = document.createElement('script');
         script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=meucallback";
         document.body.appendChild(script);
       }else{
          limpaFoms();
          alert("Formato Cep Invalido!");
       }
    }else{
        limpaFoms();
    }
}