let logged = false;
let cart = [];
let total = 0;

/* PRODUCTOS (25) */
const products = [
{n:"Playera Ferrari",p:1200,img:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"},
{n:"Gorra Red Bull",p:800,img:"https://images.unsplash.com/photo-1593032465175-481ac7f401a0"},
{n:"Chaqueta Mercedes",p:2500,img:"https://images.unsplash.com/photo-1602810316631-a7b84d4d98b9"},
{n:"Sudadera McLaren",p:2200,img:"https://images.unsplash.com/photo-1618354691373-d851c5c3c87b"},
{n:"Camisa Alpine",p:1500,img:"https://images.unsplash.com/photo-1520975922327-8b456906c813"},
{n:"Casco F1",p:9000,img:"https://images.unsplash.com/photo-1589394815804-964ed0be2eb5"},
{n:"Volante Simulador",p:5000,img:"https://images.unsplash.com/photo-1587202372775-989bdfd1c88f"},
{n:"Guantes F1",p:700,img:"https://images.unsplash.com/photo-1589187151053-5ec8818e661b"},
{n:"Lentes Racing",p:600,img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"},
{n:"Tenis Motorsport",p:1800,img:"https://images.unsplash.com/photo-1528701800489-20be3c1c9b84"},
{n:"Playera Red Bull",p:1300,img:"https://images.unsplash.com/photo-1520974735194-38aef1e4f7c9"},
{n:"Gorra Ferrari",p:850,img:"https://images.unsplash.com/photo-1585386959984-a4155224a1a3"},
{n:"Chamarra F1",p:3000,img:"https://images.unsplash.com/photo-1593032465175-481ac7f401a0"},
{n:"Pantalón Racing",p:1600,img:"https://images.unsplash.com/photo-1516822003754-cca485356ecb"},
{n:"Mochila F1",p:1200,img:"https://images.unsplash.com/photo-1580910051074-3eb694886505"},
{n:"Reloj F1",p:4000,img:"https://images.unsplash.com/photo-1519744346363-d6f8c45e3d19"},
{n:"Llavero Ferrari",p:200,img:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db"},
{n:"Sticker Pack",p:150,img:"https://images.unsplash.com/photo-1598300056403-5d3d3fbe3d88"},
{n:"Chaqueta Red Bull",p:2800,img:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"},
{n:"Camisa Mercedes",p:1700,img:"https://images.unsplash.com/photo-1520975922327-8b456906c813"},
{n:"Guantes Pro",p:950,img:"https://images.unsplash.com/photo-1589187151053-5ec8818e661b"},
{n:"Casco Edición Pro",p:12000,img:"https://images.unsplash.com/photo-1589394815804-964ed0be2eb5"},
{n:"Simulador Pedales",p:3500,img:"https://images.unsplash.com/photo-1587202372775-989bdfd1c88f"},
{n:"Lentes Ferrari",p:900,img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"},
{n:"Sudadera F1 Elite",p:2400,img:"https://images.unsplash.com/photo-1618354691373-d851c5c3c87b"}
];

/* MOSTRAR PRODUCTOS */
const container = document.getElementById("products");

products.forEach((prod,i)=>{
    container.innerHTML += `
    <div class="product">
        <img src="${prod.img}">
        <h3>${prod.n}</h3>
        <p>$${prod.p}</p>
        <button onclick="add(${i})">Comprar</button>
    </div>`;
});

/* LOGIN */
function toggleLogin(){
    let box = document.getElementById("loginBox");
    box.style.display = box.style.display=="block"?"none":"block";
}

function login(){
    logged = true;
    alert("Sesión iniciada ✔");
    toggleLogin();
}

/* CARRITO */
function toggleCart(){
    document.getElementById("cart").classList.toggle("active");
}

function add(i){
    if(!logged){
        alert("Debes iniciar sesión");
        return;
    }

    cart.push(products[i]);
    total += products[i].p;
    update();
}

function remove(index){
    total -= cart[index].p;
    cart.splice(index,1);
    update();
}

function update(){
    let list = document.getElementById("items");
    list.innerHTML = "";

    cart.forEach((item,i)=>{
        list.innerHTML += `
        <li>
        ${item.n} - $${item.p}
        <button onclick="remove(${i})">X</button>
        </li>`;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("count").innerText = cart.length;
}

/* PAGO */
function checkout(){
    if(cart.length==0){
        alert("Carrito vacío");
        return;
    }

    alert("Pago realizado ✔\nTotal: $" + total);
    cart = [];
    total = 0;
    update();
}
