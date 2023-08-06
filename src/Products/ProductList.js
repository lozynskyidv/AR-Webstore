import sheenchair from "../assets/models/aquarium.glb";
import ioschair from "../assets/models/aquarium.usdz";
import painting from "../assets/models/dog-house.glb";
import iospainting from "../assets/models/dog-house.usdz";
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
    name: "Dog House",
    src: painting,
    iosSrc: iospainting,
    category: "Pet Houses",
    color: "Dark",
},
{
    id: 3,
    name: "Cat Tree",
    src: car,
    iosSrc: ioscar,
    category: "Pet Stuff",
    color: "White",
},

];
export default items;