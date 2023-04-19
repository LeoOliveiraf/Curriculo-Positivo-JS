let cliques = 0;
function tabuada(){
        let number = document.getElementById("numero").value;
        let divisoria = document.getElementById("result");
        divisoria.innerHTML = `<p>A tabuada é ${number}</p>`;
        for (var i = 1; i <= 10; i++) {
          let valor = number * i;
          const node = document.createElement("p");
          const text = document.createTextNode(`${number} x ${i} = ${valor}`);
          node.appendChild(text);
          divisoria.appendChild(node);
    }
}
function contador(){
    cliques++;
    document.getElementById("cliques").innerHTML = cliques;
}
function sorteio(){
    let sorteio = document.getElementById("inicio").value;
    let min = parseInt(sorteio);
    let sorteioFim = document.getElementById("fim").value;
    let max = parseInt(sorteioFim);

    let result = Math.floor((Math.random() * (max-min +1)) + min);
    document.getElementById("aleatorio").innerHTML = result;
}

