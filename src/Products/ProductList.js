import sheenchair from "../assets/models/aquarium.glb";
import ioschair from "../assets/models/aquarium.usdz";
import painting from "../assets/models/aquarium.glb";
import iospainting from "../assets/models/aquarium.usdz";
import car from "../assets/models/cat-tree.glb";
import ioscar from "../assets/models/cat-tree.usdz";
import car1 from "../assets/models/aquarium.glb";
import ioscar1 from "../assets/models/aquarium.usdz";


const items = [
{
    id: 1,
    name: "Aquarium",
    src: sheenchair,
    iosSrc: ioschair,
    category: "Furniture",
    color: "Orange",
},
{
    id: 2,
    name: "Aquarium",
    src: painting,
    iosSrc: iospainting,
    category: "Art",
    color: "Brown",
},
{
    id: 3,
    name: "Cat Tree",
    src: car,
    iosSrc: ioscar,
    category: "Vehicle",
    color: "Blue",
},

{
    id: 4,
    name: "Aquarium",
    src: car1,
    iosSrc: ioscar1,
    category: "Vehicle",
    color: "Red",
},

];
export default items;