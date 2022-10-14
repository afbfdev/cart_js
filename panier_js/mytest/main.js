// increment
 var addOns =  document.querySelectorAll('.btn-plus');

 for (let i = 0; i < addOns.length; i++) {
    addOns[i].addEventListener ("click", function (){
        let qte = document.querySelectorAll('.qte')
     
        let conversion = parseInt(qte[i].value);
        conversion++;
        qte[i].value = conversion;
//total Increment
        let total = document.getElementById('total');
        let price = document.querySelectorAll('.price')
       
        let convert = parseInt(price[i].textContent);
        let product = convert * qte[i].value;
        total.textContent = parseInt(total.textContent) + convert
        

    });
 }

// decrement
var subtract = document.querySelectorAll('.btn-moins');

for(let i = 0; i < subtract.length; i++) {
    subtract[i].addEventListener('click', function (){
    let qte = document.querySelectorAll('.qte')
        let conversion = parseInt(qte[i].value);
        conversion--;
        qte[i].value = conversion;
//Total decrement
    let total = document.getElementById('total');
    let price = document.querySelectorAll('.price');
    let convert = parseInt(price[i].textContent);
    let product = convert * qte[i].value;
        total.textContent = parseInt(total.textContent) - convert;
        
    })
}

//delete
var supp = document.querySelectorAll('.del');

for (let i = 0; i < supp.length; i++) {
    supp[i].addEventListener('click', function(event) {
        event.preventDefault();
        let qte = document.querySelectorAll('.qte')
        
        let total = document.getElementById('total');
        let price = document.querySelectorAll('.price');
        let convert = parseInt(price[i].textContent);
        
    let product = convert * qte[i].value;
        qte[i].value = 0;
        total.textContent = '0';
    })

}
 
//heart style image

var heart = document.querySelectorAll('.hea');
for(let i = 0; i < heart.length; i++) {
heart[i].addEventListener('click', function(){
    
    heart[i].style.backgroundColor = "red";
})
}

