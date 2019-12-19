import './controls'; // will have the vr controls
import './css/master.css';
import { launch, PlaceObjects } from './scene';

<<<<<<< 6530db5260809dafb715df764f8487047b7e4094
let treedata = fetch("https://tichyus.pythonanywhere.com/api", {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
})
    .then(res => {
        res.json().then(data => {
=======
// let productsApi = {
//     getProducts: async () => {
//         let response = await fetch('http://test-api.playosmo.com/ecommerce/products.json', {
//                 'Accept': 'application/json',
//             }
//         })
//         let products = await response.json();
//         return products
//     },
// }


let treedata = fetch("https://tichyus.pythonanywhere.com/api", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
        .then(res => {
            res.json().then(data => {
>>>>>>> :sparkles: Ajout props + distance d'affichage + ralentissement caméra
            console.log(data)
            PlaceObjects(data)
            console.log("attention ca va commencer")
            let launch_button = document.querySelector('#launch');
            launch_button.addEventListener('click', () => {
                document.querySelector('canvas').classList.add("visible")
                console.log('cest partiiiiiii')
                launch(data)
            })
            return data
        });
    })
    .catch(err => {
        throw new Error(err);
    });
