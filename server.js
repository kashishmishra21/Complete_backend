// servr ko start krna hai app.js prr tum express ko call kr chuke hoo

const app = require('./src/app') // yha humne app.js ki file ko import kr lia

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


//vdchvsd