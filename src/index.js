import './css/master.css';
import './controls' // will have the vr controls
import {PlaceObjects, launch} from './scene'

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


let treedata = fetch("http://tichyus.pythonanywhere.com/api", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
        .then(res => {
            res.json().then(data => {
                console.log(data)
                PlaceObjects(data)
                console.log("attention ca va commencer")
                let launch_button = document.querySelector('#launch');
                launch_button.addEventListener('click', ()=>{
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