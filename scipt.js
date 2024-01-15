 const main_card = document.querySelector("#product-cards-container");
 const cart_card = document.querySelector("#cart-cards-cont");
 const totalPrice = document.querySelector("#total-price");

 const productList = [
    {id: 1, name: "Product-1", price:100 , Quantity:0},
    {id: 2, name: "Product-2", price:200,  Quantity:0},
    {id: 3, name: "Product-3", price:300,  Quantity:0},
    {id: 4, name: "Product-4", price:400,  Quantity:0}
    
];

//productlist section


function call(){
    productList.forEach((prod) =>{
        let cont = document.createElement("div");
        cont.innerHTML = `
        <p class = "product_name">${prod.name}</p>
        <p class = "product_price">${prod.price}</p>
        <div class = "count_section">
            <p class ="minus" onclick="removetoCart(${prod.id})">-</p>
            <p class ="count_${prod.id}">${prod.Quantity}</p>
            <p class ="plus" onclick="addtoCart(${prod.id})">+</p>
        </div>`
        cont.classList.add("right_card");
        main_card.appendChild(cont);

    })
}

call();
function addtoCart(prodId){
    console.log(prodId);
    const value = productList.find(p=> p.id === prodId);
    console.log(value);
    if(value){
        value.Quantity+=1;
        newfun(prodId);
    }
    updtCountAndCart()
   
}

function removetoCart(prodId){
    const value = productList.find(p=> p.id === prodId);
    console.log(value);
    if(value.Quantity>0){
        if(value){
            value.Quantity-=1;
            newfun(prodId);
        }
        
    }
    updtCountAndCart()
}


function newfun(prodId){
    const ele = document.querySelector(`.count_${prodId}`);
    const value = productList.find(p=> p.id === prodId);

    if(value && ele ){
        ele.innerText = value.Quantity;
    }
}


function updtCountAndCart(){

     let total =0;
    cart_card.innerHTML = "";
        productList.forEach((prod)=>{
            if(prod.Quantity>0){
            let card = document.createElement("div");
            card.innerHTML=` 
            ${prod.name} ${prod.price} x ${prod.Quantity}`
            card.classList.add("card_cont");
            cart_card.appendChild(card);
            const price = prod.price * prod.Quantity;
             total += price;
             totalPrice.innerHTML = `${total}`;
             
        }

        
        
        
    })
}