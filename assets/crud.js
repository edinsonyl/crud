import { printproducts } from "./ui.js";


const baseURL = 'https://e-commerce-api-academlo.herokuapp.com/api';
let editingID = null;

function getproducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then(function (response) {
            const products = response.data;
            printproducts(products);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function createproducts() {
    const newproducts = {
        name: 'name',
        price: '2222',
        image: 'https://images.app.goo.gl/L8r6Soewpnn8jwax6'
        
    }

    axios.post('https://e-commerce-api-academlo.herokuapp.com/api/products', newproducts)
        .then(function (response) {
            console.log(response);
            alert('Se creo el producto correctamente');
        })
        .catch(function (error) {
            alert('No se pudo crear el producto');
            console.log(error);
        })
}

function deleteproducts(id) {
    const confirmation = confirm('¿Estás seguro de eliminar el producto?');
    if(!confirmation){
        return
    }
    axios.delete(`${baseURL}/products/${id}`)
        .then(function () {
            alert('La tarea se eliminó correctamente');
            getproducts();
        })
        .catch(function (error) {
            alert('No se pudo eliminar el producto');
        })
}

function editproducts(id) {
    axios.get(`${baseURL}/products/${id}`)
        .then(function (response) {
            editingID = id;
            const products =  response.data;
            document.getElementById('name').value = products.name;
            document.getElementById('price').value = products.price;
            document.getElementById('image').value = products.image;
        })
        .catch(function (error) {
            alert('No se pudo cargar el producto');
        })
}

function updateproducts() {
    const productEdited = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image').value
    }

    axios.put(`${baseURL}/products/${editingID}`, productEdited)
        .then(function (response) {
            alert('Se editó la tarea correctamente');
            getproducts();
        })
        .catch(function (error) {
            alert('No se pudo editar el producto');
        })
}


export { getproducts, createproducts, deleteproducts, editproducts,updateproducts }