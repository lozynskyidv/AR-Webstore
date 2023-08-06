import sheenchair from "../assets/models/aquarium.glb";
import ioschair from "../assets/models/aquarium.usdz";
import car from "../assets/models/cat-tree.glb";
import ioscar from "../assets/models/cat-tree.usdz";


const items = [
{
    id: 1,
    name: "Aquarium",
    src: sheenchair,
    iosSrc: ioschair,
    category: "Fish",
    color: "Brown",
},
{
    id: 2,
    name: "Cat Tree",
    src: car,
    iosSrc: ioscar,
    category: "Pet Stuff",
    color: "White",
},

];
export default items;