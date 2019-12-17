import './css/master.css';
import './controls' // will have the vr controls
import {PlaceObjects, loop} from './scene'

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
            return data
        });
    })
    .catch(err => {
        throw new Error(err);
    });

loop()
