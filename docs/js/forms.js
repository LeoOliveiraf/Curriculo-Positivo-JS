const select  =  document.getElementById('select');

select.addEventListener('change', (e) =>{
    
    if(e.target.value == "londrina"){
        document.getElementById('imgCidade').src = "./img/londrina.jpg";
    }else if(e.target.value == "maringa"){
        document.getElementById('imgCidade').src = "./img/maringa.jpg";
    } 
})

function getCheck(){
    var pegar = document.querySelector("#select");
    var texto = pegar.value;
    var pacote = document.getElementsByName('pacote');

    for(var i = 0; i < pacote.length;i++){
        if(pacote[i].checked){
            if(pacote[i].value == "sim" && texto == "londrina"){
                document.querySelector(".output").textContent = `Hoje eu Moro em Londrina e faço atividade fisica com frequencia em volta do Lago IGAPO`;
            }else if(pacote[i].value == "nao" && texto == "londrina"){
                document.querySelector(".output").textContent = `Hoje eu Moro em Londrina e Não sou de fazer muita atividade fisica, prefiro os games e ficar em casa`;
            }else if(pacote[i].value == "vezes" && texto == "londrina"){
                document.querySelector(".output").textContent = `Hoje eu Moro em Londrina e as vezes faço atividade fisica para nao virar o Faustão`;
            }
        }

        if(pacote[i].checked){
            if(pacote[i].value == "sim" && texto == "maringa"){
                document.querySelector(".output").textContent = `Hoje eu Moro em Maringa fazer academia na Fit & Life Academia`;
            }else if(pacote[i].value == "nao" && texto == "maringa"){
                document.querySelector(".output").textContent = `Hoje eu Moro em Maringa e Não gosto de atividade fisica`;
            }else if(pacote[i].value == "vezes" && texto == "maringa"){
                document.querySelector(".output").textContent = `Hoje eu Moro em Maringa e as vezes faço atividade fisica do tipo caminhar no parque`;
            }
        }
    }
}