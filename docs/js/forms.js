const select  =  document.getElementById('select');

select.addEventListener('change', (e) =>{
    
    if(e.target.value == "londrina"){
        document.getElementById('imgCidade').src = "./img/londrina.jpg";
    }else if(e.target.value == "maringa"){
        document.getElementById('imgCidade').src = "./img/maringa.jpg";
    }
   
})