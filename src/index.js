import './controls'; // will have the vr controls
import './css/master.css';
import { launch, PlaceObjects } from './scene';

let treedata = fetch("https://tichyus.pythonanywhere.com/api", {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
})
    .then(res => {
        res.json().then(data => {
            console.log(data)
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
