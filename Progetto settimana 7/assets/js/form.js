const nome = document.getElementById("inputNome");
const brand = document.getElementById("inputForBrand");
const prezzo = document.getElementById("inputForPrezzo");
const urlImmagine = document.getElementById("inputForUrlImmagine");
const descrizione = document.getElementById("inputForDescrizione");
const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGU3NTJkN2IxMTAwMTkwZTZlMTYiLCJpYXQiOjE3MDk4OTExODksImV4cCI6MTcxMTEwMDc4OX0.s_VpmwzJiaYtYxEGu1BBKwD3-Bydee4u87oWhvlQ8rw";
const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};
const form = document.getElementById("form");
const btnSave = document.getElementById("btnSave");






document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    raccoltaDati();
  });
});

async function raccoltaDati(params) {
  const nome = document.getElementById("inputNome").value;
  const brand = document.getElementById("inputForBrand").value;
  const prezzo = document.getElementById("inputForPrezzo").value;
  const urlImmagine = document.getElementById("inputForUrlImmagine").value;
  const descrizione = document.getElementById("inputForDescrizione").value;

  const formData = {
    nome: nome,
    brand: brand,
    prezzo: prezzo,
    urlImmagine: urlImmagine,
    descrizione: descrizione,
  };

  try {
    const existingProduct = await findExistingProduct(formData);

    if (existingProduct) {
      await updateProduct(existingProduct._id, formData);
      console.log("Prodotto aggiornato:", formData);
    } else {
      await createProduct(formData);
      console.log("Nuovo prodotto creato:", formData);
    }
  } catch (error) {
    console.error("Errore:", error);
  }
}

btnSave.addEventListener("click", function (event) {
  form.dispatchEvent(new Event("submit"));
});

async function findExistingProduct(formData) {
  try {
    const response = await fetch(dataURL);
    if (!response.ok) {
      throw new Error("Errore durante il recupero dei dati.");
    } else {
      const products = await response.json();
      return products.find(
        (product) =>
          product.nome === formData.nome &&
          product.brand === formData.brand &&
          product.prezzo === formData.prezzo &&
          product.urlImmagine === formData.urlImmagine &&
          product.descrizione === formData.descrizione
      );
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateProduct(productId, formData) {
  const url = `${dataURL}/${productId}`;
  try {
    let response = await fetch(url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Errore durante l'aggiornamento del prodotto.");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

async function createProduct(formData) {
  try {
    let response = await fetch(dataURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Errore durante la creazione del prodotto.");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(productId) {
  const url = `${dataURL}/${productId}`;

  try {
    let response = await fetch(url, {
      method: "DELETE",
      headers: headers,
    });
    if (!response.ok) {
      throw new Error("Errore durante l'eliminazione del prodotto.");
    }
    console.log("Prodotto eliminato con successo.");
  } catch (error) {
    console.log(error);
  }
}
