import { getproducts, createproducts, deleteproducts, editproducts,updateproducts} from './crud.js'

getproducts();

window.editproducts = editproducts;
window.createproducts= createproducts;
window.deleteproducts = deleteproducts;
window.updateproducts=updateproducts;