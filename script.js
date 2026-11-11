// SAMPLE DATA
// Change brand names, prices and images according to shop stock.

const products = [

{
id: 1,
cat: "Switches & Boards",
name: "Modular Switch Board",
brand: "Anchor",
price: "₹450",
desc: "Modular switch board for homes and offices.",
emoji: "🔌",
img: "images/switchboard.jpg",
colors: ["White", "Ivory", "Black", "Grey"]
},

{
id: 2,
cat: "Switches & Boards",
name: "Electrical Switch",
brand: "Havells",
price: "₹85",
desc: "Switches available in different colours.",
emoji: "🔘",
img: "images/switch.jpg",
colors: ["White", "Ivory", "Black", "Grey"]
},

{
id: 3,
cat: "Wires & Cables",
name: "House Wiring Cable",
brand: "Finolex",
price: "₹1250 / coil",
desc: "House wiring cable for electrical installation.",
emoji: "🧵",
img: "images/wiring-cable.jpg"
},

{
id: 4,
cat: "Wires & Cables",
name: "Power Cable",
brand: "Polycab",
price: "₹95 / metre",
desc: "Power cable options for different requirements.",
emoji: "〰️",
img: "images/power-cable.jpg"
},

{
id: 5,
cat: "Lighting",
name: "LED Bulb",
brand: "Havells",
price: "₹120",
desc: "Energy-efficient LED bulb.",
emoji: "💡",
img: "images/led-bulb.jpg"
},

{
id: 6,
cat: "Lighting",
name: "LED Tube Light",
brand: "Philips",
price: "₹280",
desc: "Bright lighting for rooms and workspaces.",
emoji: "🔆",
img: "images/tube-light.jpg"
},

{
id: 7,
cat: "Fans",
name: "Ceiling Fan",
brand: "Havells",
price: "₹2200",
desc: "Ceiling fan for comfortable air circulation.",
emoji: "🌀",
img: "images/fan.jpg"
},

{
id: 8,
cat: "Fans",
name: "Wall Fan",
brand: "Usha",
price: "₹1650",
desc: "Wall-mounted fan for home or shop.",
emoji: "🌀",
img: "images/wall-fan.jpg"
},

{
id: 9,
cat: "Plumbing",
name: "PVC Pipe",
brand: "Supreme",
price: "₹180",
desc: "PVC pipes and fittings for plumbing.",
emoji: "🚰",
img: "images/pvc-pipe.jpg"
},

{
id: 10,
cat: "Plumbing",
name: "Tap / Faucet",
brand: "Jaquar",
price: "₹650",
desc: "Tap and faucet options.",
emoji: "🚿",
img: "images/tap.jpg"
},

{
id: 11,
cat: "Accessories",
name: "Electrical Tape",
brand: "3M",
price: "₹35",
desc: "Insulation tape and electrical accessories.",
emoji: "🧰",
img: "images/tape.jpg"
}

];

const categories = [
"All Products",
...new Set(products.map(p => p.cat))
];

const tabs = document.getElementById("tabs");
const grid = document.getElementById("grid");

function showTabs(active) {

tabs.className = "tabs";

tabs.innerHTML = categories.map(c => `
<button class="tab ${c === active ? 'active' : ''}"
onclick="showProducts('${c}')">
${c}
</button>
`).join("");

}

function showProducts(cat = "All Products") {

showTabs(cat);

let list = cat === "All Products"
? products
: products.filter(p => p.cat === cat);

grid.innerHTML = list.map(p => `

<article class="card"
onclick="location.href='product.html?id=${p.id}'">

<div class="pic">

<img src="${p.img}"
onerror="this.style.display='none';this.nextElementSibling.style.display='block'">

<span style="display:none">${p.emoji}</span>

</div>

<div class="info">

<small>${p.cat}</small>

<h3>${p.name}</h3>

<p>${p.desc}</p>

<b>${p.brand}</b>

<p>Click to view details →</p>

</div>

</article>

`).join("");

}

showProducts();