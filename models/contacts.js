var mongoose=require('mongoose');

const contactschema= mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});
//export the contact module
const contact=module.exports = mongoose.model('contact',contactschema);