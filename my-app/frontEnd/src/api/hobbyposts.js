import axios from "axios";

export default axios.create({
    baseURl: 'http://localhost:4000'
    //this would need to be changed if it went live to the host URL
})

//npx json-server -p 4000 -w data/db.json  this should start up the json server that holds the information /posts etc  at this youtube https://www.youtube.com/watch?v=ZEKBDXGnD4s