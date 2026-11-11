const products = [

[1, "Modular Switch Board", "Anchor", "₹450",
"Modular switch board for homes and offices",
"🔌", "images/switchboard.jpg",
["White", "Ivory", "Black", "Grey"]],

[2, "Electrical Switch", "Havells", "₹85",
"Switches available in different colours",
"🔘", "images/switch.jpg",
["White", "Ivory", "Black", "Grey"]],

[3, "House Wiring Cable", "Finolex", "₹1250 / coil",
"House wiring cable for electrical installation",
"🧵", "images/wiring-cable.jpg"],

[4, "Power Cable", "Polycab", "₹95 / metre",
"Power cable options for different requirements",
"〰️", "images/power-cable.jpg"],

[5, "LED Bulb", "Havells", "₹120",
"Energy-efficient LED bulb",
"💡", "images/led-bulb.jpg"],

[6, "LED Tube Light", "Philips", "₹280",
"Bright lighting for rooms and workspaces",
"🔆", "images/tube-light.jpg"],

[7, "Ceiling Fan", "Havells", "₹2200",
"Ceiling fan for comfortable air circulation",
"🌀", "images/fan.jpg"],

[8, "Wall Fan", "Usha", "₹1650",
"Wall-mounted fan for home or shop",
"🌀", "images/wall-fan.jpg"],

[9, "PVC Pipe", "Supreme", "₹180",
"PVC pipes and fittings for plumbing",
"🚰", "images/pvc-pipe.jpg"],

[10, "Tap / Faucet", "Jaquar", "₹650",
"Tap and faucet options",
"🚿", "images/tap.jpg"],

[11, "Electrical Tape", "3M", "₹35",
"Insulation tape and electrical accessories",
"🧰", "images/tape.jpg"]

];

const id = Number(
new URLSearchParams(location.search).get("id") || 1
);

const p = products.find(x => x[0] === id) || products[0];

document.title = p[1] + " | Rose Electricals";

document.getElementById("productDetail").innerHTML = `

<div class="detailpic">

<img src="${p[6]}"
alt="${p[1]}"
onerror="this.style.display='none';this.nextElementSibling.style.display='block'">

<span style="display:none">${p[5]}</span>

</div>

<div>

<small>PRODUCT DETAILS</small>

<h1>${p[1]}</h1>

<p>${p[4]}</p>

<p><b>Brand / Company:</b> ${p[2]}</p>

${p[7] ? `

<p><b>Available Colours:</b></p>

<div class="chips">

${p[7].map(c => `<span>${c}</span>`).join("")}

</div>

` : ""}

<div class="price">${p[3]}</div>

<p>
<small>
Confirm current price and availability with the shop.
</small>
</p>

<a class="call" href="tel:+919000000000">
Enquire / Call Now ☎
</a>

</div>

`;