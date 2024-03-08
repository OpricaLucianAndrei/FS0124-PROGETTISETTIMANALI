const inputNome = document.getElementById("inputNome");
const inputForBrand = document.getElementById("inputForBrand");
const inputForPrezzo = document.getElementById("inputForPrezzo");
const inputForUrlImmagine = document.getElementById("inputForUrlImmagine");
const inputForDescrizione = document.getElementById("inputForDescrizione");
const form = document.getElementById("form");
const titoloH1 = document.getElementById("titoloH1")
const btnSave = document.getElementById("btnSave");
const btnDelete  = document.getElementById("btnDelete");
const btnReset = document.getElementById("btnReset");
const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGU3NTJkN2IxMTAwMTkwZTZlMTYiLCJpYXQiOjE3MDk4OTExODksImV4cCI6MTcxMTEwMDc4OX0.s_VpmwzJiaYtYxEGu1BBKwD3-Bydee4u87oWhvlQ8rw";
const headers = {
  Authorization: `${API_KEY}`,
  "Content-Type": "application/json",
};






document.addEventListener("DOMContentLoaded", function () {
  const params = new  URLSearchParams(window.location.search);
  id = params.get("id");
  if (id) {
    titoloH1.innerText = "Modifica";
    cercaProdotto(id);
  } else {
    titoloH1.innerText = "Aggiungi";
    btnDelete.style.display = "none";
  }
  });

async function cercaProdotto(id) {
  try {
    let response = await fetch(dataURL + id, { method: "GET" , headers: headers});
    let prodotto = await response.json();
    mostraForm(prodotto);
  } catch (error) {
    console.error("Errore:", error);
  }
}

function mostraForm(prodotto) {
    inputNome.value = prodotto.name;
    inputForBrand.value = prodotto.brand;
    inputForUrlImmagine.value = prodotto.imageUrl;
    inputForPrezzo.value = prodotto.price;
    inputForDescrizione.value = prodotto.description;
}


btnSave.addEventListener("click", function (e) {
    e.preventDefault();
    const name =  inputNome.value;
    const brand = inputForBrand.value;
    const imageUrl = inputForUrlImmagine.value;
    const price = inputForPrezzo.value;
    const description = inputForDescrizione.value;

    const prodotto = {name, brand, imageUrl, price, description};
    if (id) {
        modificaProdotto(prodotto);
    } else {
        aggiungiProdotto(prodotto);
    }

  
});




async function modificaProdotto(prodotto) {
    try {
        let response = await fetch(dataURL + loadProducts._id, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(prodotto)
        }); 
        let  data = await response.json();
        alert("Modifiche salvate");
        window.location.href="index.html";
    } catch (error) {
        console.log('Errore!');
        alert(error);
    }
    
}

async function aggiungiProdotto(prodotto) {
    try {
        let response = await fetch(dataURL, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(prodotto)
        }); 
        let data = await response.json();
        alert("Prodotto salvato");
        window.location.href="index.html";
    } catch (error) {
        console.log('Errore!');
        alert(error);
    }
    
}


async function cancellaProdotto() {
    confirm('Vuoi eliminare veramente questo prodotto?')
    try {
        let response = await fetch(dataURL + id, {
            method: "DELETE",
            headers: headers
        }); 
        alert("Prodotto Eliminato");
        window.location.href="index.html";
    } catch (error) {
        console.log('Errore!');
        alert(error);
    }
    
}
