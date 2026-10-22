const express = require('express')

const app = express()

const notes = [
    {
        title:"",
        descriptipn:""

    }
]
// server pr data send kia jyega => POST
app.use(express.json()) // middleware hai jo bhi data req.bosy me aye use padhne layak bnaaoo
app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"note created successfully" 
    })
})
//GET / NOTES 
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfuly",
        notes : notes
    })
})
// :index mtlb colon k bdd jo bhi ayega vo dynamic h change hoo skta hai
app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index // y store krega 
    delete notes[index]

    res.status(200).json({
        message:"delete ho gya notes"
    })
})

// app.patch("/notes/:index",(req,res)=>{
//     const index = req.params.index
//     const description = req.body.description
//     const title = req.bosy.title
//     if (title !== undefined){
//         notes[index].title = title;
//     }
//     if (description !== undefined){
//         notes[index].description = description

//     }

    

//     res.status(200).json({
//         message:"Description Updated Successfully",
//         notes : notes[index]
//     })
// })
// app.patch("/notes/:index", (req, res) => {
//     const index = req.params.index;
//     const title = req.body.title;

//     console.log("Index:", index);
//     console.log("Notes:", notes);
//     console.log("Selected Note:", notes[index]);

//     notes[index].title = title;

//     res.status(200).json({
//         message: "Title updated successfully"
//     });
// });



app.patch("/notes/:index", (req, res) => {
    const index = Number(req.params.index);
    const title = req.body.title;

    // Check karo ki index valid hai ya nahi
    if (!Number.isInteger(index) || index < 0 || index >= notes.length) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    // Title update karo
    notes[index].title = title;

    res.status(200).json({
        message: "Title updated successfully"
    });
});



module.exports = app