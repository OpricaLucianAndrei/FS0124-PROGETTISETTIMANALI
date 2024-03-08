const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGU3NTJkN2IxMTAwMTkwZTZlMTYiLCJpYXQiOjE3MDk5MDc2NTYsImV4cCI6MTcxMTExNzI1Nn0.Kd_LKNMZLba3iCE_3MIMxcjDpU_1gxFDA7YPIaO8Oe0";
const cards = document.getElementById("cards");
let lista = [];

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
const printData = () => {
    lista.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("col-3", "mt-3");
      div.innerHTML = `
              <div class="card mb-4">
                  <img src="${item.imageUrl}" style="width: 100%" />
                      <div class="card-title p-4 m-0">
                              <h5>${item.name}</h5>
                      </div>
                  <div class="card-body pt-0 ps-4 mt-0">
                      <p class="card-text">
                          ${item.description}
                      </p>
                  </div>
                  <div class="card-footer p-4">
                      <div class="row">
                          <button
                              type="button"
                              class="col-2 btn btn-sm btn-outline-secondary d-flex justify-content-center align-items-center w-25 btnModifica"
                              data-product-id="${item._id}"
                              >
                              Modifica
                          </button>
                          <button 
                              type="button" 
                              class="col-2 ms-3 btn btn-sm btn-outline-secondary d-flex justify-content-center align-items-center w-25" 
                              data-product-id="${item._id}">
                              Scopri di più
                          </button>
                      </div>  
                  </div>  
              </div> 
              `;
      cards.appendChild(div);
    });
  
    const btnModificaArray = document.querySelectorAll('.btnModifica');
    btnModificaArray.forEach(btn => {
      btn.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id'); 
        window.location.href = `details.html?id=${productId}`;
      });
    });
  };
  