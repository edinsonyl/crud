function printproducts(products) {
    // Identificar el contenedor
    const container = document.getElementById('products-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i <products.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${products[i].name}</h5>
                            <p class="card-text2">${products[i].price}</p>
                            <img src="${products[i].image}" width=180px heigth=180px></img>
                            <div class="text-end">
                                <button class="btn btn-danger" onclick="deleteproducts(${products[i].id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-primary" onclick="editproducts(${products[i].id})">
                                    <i class="fas fa-pen"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

export { printproducts}