var express=require('express');
const router= express.Router();
const contact=require('../models/contacts');

router.get('/contacts',(req,res,next)=>{
 // res.send('Retriving the contact list.');
   contact.find((err,contacts)=>{
     res.json(contacts);
   }); 
});

router.post('/contact',(req,res,next)=>{
    //res.send('posting');
   let newContact= new contact({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       phone: req.body.phone
   });
   newContact.save((err,contact)=>{
       if(err)
       {
           res.json({msg: 'Failed to add contact.'});       
       }
       else{
           res.json({msg:'Added contact successfully.'});
       }
   }); 
  });

  router.delete('/contact/:id',(req,res,next)=>{
      //res.json(req.params.id);          
      contact.remove({_id: req.params.id},(err,result)=>{
        if(err)
        {
            res.json({msg: 'Failed to remove contact.'});       
        }
        else{
            res.json({msg:'Removed contact successfully.'});
        }
      }); 
  });

module.exports=router;