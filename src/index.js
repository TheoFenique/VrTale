import './controls'; // will have the vr controls
import './css/master.css';
import { launch, PlaceObjects } from './scene';

let firstlaunch = (dataprop) => {
    document.querySelector('canvas').classList.add("visible")
    console.log('cest partiiiiiii')
    launch(dataprop)
}

let treedata = fetch("https://tichyus.pythonanywhere.com/api", {
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
            firstlaunch(data)
            return data
        });
    })
    .catch(err => {
        throw new Error(err);
    });
