const Note = require('./models/note.model.js');
exports.create = (req,res) =>{
    if(!req.body.content)
    {
        return res.status(400).send({
            message: "please fill all fields"
        });
    }
     
    const note = new Note({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
        confirm_password:req.body.confimr_password,
        mobile: req.body.mobile
    });

    note.save()
     .then(data => {
        res.send(data);
     }).catch(err => {
        res.status(500).send({
            message:err.message || "some error occured while cerating the user. "
        });
     });

    
};

exports.update = (req,res) => {
    if(!req.body.content){
        return res.status(400).send({
            message:"data can not be empty"
        });
    }

    Note.findByIdAndUpdate(req.params.noteId,{
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
        confirm_password:req.body.confimr_password,
        mobile: req.body.mobile

    },{new:true})
     .then(note =>{
        if(!note){
            return res.status(404).send({
                message:"user not found with id"+ req.params.noteId
            });
        }
        res.send(note);
     }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message:"user not found with id"+ req.params.noteId
            });
        }
        return res.status(500).send({
            message:" error updating user with id "+ req.params.noteId
        })
     })
}