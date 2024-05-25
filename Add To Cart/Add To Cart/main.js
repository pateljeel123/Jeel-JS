let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

let filterData = []

// ✅ Shows the correct initial data - 3 marks
fetch("https://backend-0jlf.onrender.com/pitches")
  .then((res) => res.json())
  .then((data) => {
    makeCard(data);
    filterData = data;
  });

const makeCard = (data) => {
  let store = data.map((el) =>
    singleCard(el.id, el.image, el.title, el.founder, el.category, el.price, el.description)
  );
  mainSection.innerHTML = store.join("");
};

const singleCard = (id, image, title, founder, category, price, description) => {
  const card = `
  <a href="discription.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&founder=${encodeURIComponent(founder)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}">
    <div class="card" data-id=${id} flex>
                <div class="card-img">
                  <img src=${image} alt="pitch">
                </div>
                <div class="card-body">
                  <h4 class="card-title">${title}</h4>
                  <p class="card-founder">Founder: ${founder}</p>
                  <p class="card-category">${category}</p>
                  <p class="card-price">$${price}</p>
                  <a href="#" data-id=${id} class="card-link">Edit</a>
                  <button data-id=${id} class="card-button">Delete</button>
                </div>
              </div>
              </a>
    `;

  return card;
};

// ✅ Able to add new pitch - 2 marks
pitchCreateBtn.addEventListener("click", (e) => {
  let AddPitch_Obj = {
    title: pitchTitleInput.value,
    image: pitchImageInput.value,
    category: pitchCategoryInput.value,
    founder: pitchfounderInput.value,
    price: pitchPriceInput.value,
  };

  fetch("https://backend-0jlf.onrender.com/pitches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(AddPitch_Obj),
  })
    .then((response) => response.json())
    .then((data) => alert("PITCH Add Successfully:", data))
    .catch((error) => console.error("Error:", error));
});

// ✅ Able to delete pitch - 2 marks
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-button")) {
    deleteData(e.target.dataset.id);
  }
});
function deleteData(id) {
  fetch(`https://backend-0jlf.onrender.com/pitches/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Deleted");
      console.log(data);
    });
}

// ✅ Filters as expected - 1 mark
filterFood.addEventListener('click', () => {
  let store = filterData.filter((el) => el.category == 'Food')
  makeCard(store)
})
filterElectronics.addEventListener('click', () => {
  let store = filterData.filter((el) => el.category == 'Electronics')
  makeCard(store)
})
filterPersonalCare.addEventListener('click', () => {
  let store = filterData.filter((el) => el.category == 'Personal Care')
  makeCard(store)
})

// ✅ Filters as expected - 1 mark
sortAtoZBtn.addEventListener('click', () => {
  let store = filterData.sort((a, b) => a.price - b.price)
  makeCard(store)
})
sortZtoABtn.addEventListener('click', () => {
  let store = filterData.sort((a, b) => b.price - a.price)
  makeCard(store)
})

// ✅ Able to edit all fields of the pitch - 2 marks
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('card-link')) {
    updatePitch(e.target.dataset.id);
  }
})
function updatePitch(id) {
  fetch(`https://backend-0jlf.onrender.com/pitches/${id}`).then((res) => res.json()).then((data) => {
    updatePitchIdInput.value = data.id;
    updatePitchTitleInput.value = data.title;
    updatePitchImageInput.value = data.image;
    updatePitchfounderInput.value = data.founder;
    updatePitchCategoryInput.value = data.category;
    updatePitchPriceInput.value = data.price;
  })
}

// ✅ Able to edit the price - 1 mark
updatePitchBtn.addEventListener('click', () => {
  let updateOBJ = {
    id: updatePitchIdInput.value,
    title: updatePitchTitleInput.value,
    image: updatePitchImageInput.value,
    founder: updatePitchfounderInput.value,
    category: updatePitchCategoryInput.value,
    price: updatePitchPriceInput.value
  }
  fetch(`https://backend-0jlf.onrender.com/pitches/${updateOBJ.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateOBJ),
  }).then((res) => res.json()).then((data) => alert('Updated'))
})
updatePricePitchPriceButton.addEventListener('click',()=>{
  let updateOBJ = {
    id: updatePricePitchId.value,
    price: updatePricePitchPrice.value
  }
  fetch(`https://backend-0jlf.onrender.com/pitches/${updateOBJ.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateOBJ),
  }).then((res) => res.json()).then((data) => alert('Updated'))
})