function displayRadioValue(){
    var array = document.getElementsByName('gender');
    //se tiver mais de um name igual ele retorna um array para voce com todos names
    for(i = 0; i < array.length; i++){
        if(array[i].checked){
            document.getElementById('radioResult').innerHTML = `Genero Selecionado: ${array[i].value}`;
        }
    }
}

function getOption(){ 
    let selectElement = document.querySelector("#select1");
    let text = selectElement.value;
    document.querySelector(".result").textContent = text;
}

function getCheckBox(){
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(i = 0; i < checkBoxes.length;i++){
       text = text +", " + checkBoxes[i].value;
    }
    document.getElementById("pri").innerHTML = text;
}