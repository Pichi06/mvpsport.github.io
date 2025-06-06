const camisetas = [
  { equipo: "Real Madrid", referencia: "Camiseta 45", stock: true, imagen: "real-madrid.png" },
  { equipo: "FC Barcelona", referencia: "Camiseta 46", stock: false, imagen: "barcelona.jpg" },
  { equipo: "Juventus", referencia: "Camiseta 47", stock: true, imagen: "juventus.jpg" },
  { equipo: "Manchester City", referencia: "Camiseta 48", stock: true, imagen: "manchester-city.jpg" },
  { equipo: "Liverpool", referencia: "Camiseta 49", stock: false, imagen: "liverpool.jpg" },
  { equipo: "Paris Saint-Germain", referencia: "Camiseta 50", stock: true, imagen: "psg.jpg" },
  { equipo: "Chelsea", referencia: "Camiseta 51", stock: true, imagen: "chelsea.jpg" },
  { equipo: "Arsenal", referencia: "Camiseta 52", stock: true, imagen: "arsenal.jpg" },
  { equipo: "Inter de Milán", referencia: "Camiseta 53", stock: false, imagen: "inter.jpg" },
  { equipo: "Bayern Múnich", referencia: "Camiseta 54", stock: true, imagen: "bayern.jpg" }
];

const tallas = ["XS", "S", "M", "L", "XL", "XXL"];

const container = document.getElementById("camisetas-container");

camisetas.forEach(c => {
  const div = document.createElement("div");
  div.className = "camiseta";
  div.innerHTML = `
    <img src="img/${c.imagen}" alt="${c.equipo}" />
    <h3>${c.equipo}</h3>
    <p><strong>Referencia:</strong> ${c.referencia}</p>
    <p class="stock ${c.stock ? "disponible" : "agotado"}">
      ${c.stock ? "Disponible" : "Agotado"}
    </p>
    <p class="tallas"><strong>Tallas:</strong> ${tallas.join(", ")}</p>
  `;
  container.appendChild(div);
});
