const details = document.getElementById('details');
const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGU3NTJkN2IxMTAwMTkwZTZlMTYiLCJpYXQiOjE3MDk5MDc2NTYsImV4cCI6MTcxMTExNzI1Nn0.Kd_LKNMZLba3iCE_3MIMxcjDpU_1gxFDA7YPIaO8Oe0";

window.addEventListener("load", init);

function init() {
  loadProducts();
}

async function loadProducts() {
  try {
    let read = await fetch(dataURL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    let response = await read.json();
    lista=response;
    console.log(lista);

    if (lista.length > 0) {
        printData();
    } else {
        location.href = "form.html";
        return;
    } 

  } catch (error) {
    console.log(error);
  }
};

function printData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product = lista.find(item => item._id === productId);

    if (product) {
        const contenitoreImagine = document.createElement('div');
        contenitoreImagine.classList.add("col-6", "mt-4");
        contenitoreImagine.innerHTML = `
        <img src="${product.imageUrl}" class="img-fluid"/>
        `;
        const contenitoreTesto =  document.createElement('div');
        contenitoreTesto.classList.add("col-6", "mt-4");
        contenitoreTesto.innerHTML = `
        <h4>${product.brand}</h4>
        <h1>${product.name}</h1>
        <p class="badge bg-dark text-warning text-center fs-3 mt-3">€ ${product.price}</p>
        <p class="fs-4 mt-3">${product.description}</p>
        `;
        details.appendChild(contenitoreImagine);
        details.appendChild(contenitoreTesto);
    } else {
        console.log('Prodotto non trovato');
    }
}