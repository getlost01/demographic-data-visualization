const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");

const myMap = L.map("map").setView([22.9074872, 79.07306671], 5);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);

function generateList(campusList) {
  const ul = document.querySelector(".list");
  ul.innerHTML = "";
  campusList.forEach((campus) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const a = document.createElement("a");
    const p = document.createElement("p");
    a.addEventListener("click", () => {
      flyToStore(campus);
    });
    div.classList.add("campus-item");
    a.innerText = campus.properties.name;
    a.href = "#";
    p.innerText = campus.properties.address;

    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

generateList(allCampusData);

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const { value } = searchInput;

  const filteredCampus = allCampusData.filter((campus) => {
    return (
      campus.properties.name.match(new RegExp(value, "gi")) ||
      campus.properties.address.match(new RegExp(value, "gi"))
    );
  });
  if (filteredCampus.length) {
    generateList(filteredCampus);
  } else {
    const ul = document.querySelector(".list");
    ul.innerHTML = '<p class="no-result">No Results Found</p>';
  }
});

function makePopupContent(campus) {
  return `
    <div>
        <h4>${campus.properties.name}</h4>
        <p>${campus.properties.address}</p>
        <p>NAAC: ${campus.properties.naac} grading</p>
        <div class="phone-number">
            <a href="tel:${campus.properties.phone}">${campus.properties.phone}</a>
        </div>
    </div>
  `;
}
function onEachFeature(feature, layer) {
  layer.bindPopup(makePopupContent(feature), {
    closeButton: false,
    offset: L.point(0, -8),
  });
}

var myIcon = L.icon({
  iconUrl: "school-marker.png",
  iconSize: [40, 40],
});

const campussLayer = L.geoJSON(allCampusData, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: myIcon });
  },
});
campussLayer.addTo(myMap);

function flyToStore(store) {
  const lat = store.geometry.coordinates[1];
  const lng = store.geometry.coordinates[0];
  myMap.flyTo([lat, lng], 14, {
    duration: 3,
  });
  setTimeout(() => {
    L.popup({ closeButton: false, offset: L.point(0, -8) })
      .setLatLng([lat, lng])
      .setContent(makePopupContent(store))
      .openOn(myMap);
  }, 3000);
}
