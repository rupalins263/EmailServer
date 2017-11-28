import transporter from '../Util/Mailer';
import pool from '../Util/db';
var pucController={};


  

pucController.contactUs =((req,res)=>{
    var mailOptions = {
      from: 'zenopsysevolve@gmail.com', 
      to: 'soundaryapucollege@gmail.com', 
      cc:'dananjayagokhale@gmail.com',
      bcc:'zenopsysevolve@gmail.com',
  subject: 'Soundarya PU College  Contact',
  html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
};

   transporter.sendMail(mailOptions,(err,info)=>{
     if(err)
     {
       res.status(400).send("unable to contact")
     }
     else{
      res.status(200).send("Email Sent");
     }
   })


  });
  
        pucController.getEvents =((req,res)=>{
    pool.query('call p_get_event_puc').then(function(rows){
    
    //console.log(rows);
    res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
  pucController.getUpcomingEvents =((req,res)=>{

        pool.query('call p_get_upcoming_events_puc').then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
   pucController.createEvents =((req,res)=>{

       console.log(req.body.name,req.body.date,req.body.eventUrl)
        pool.query(`call p_create_event_puc('${req.body.name}','${req.body.date}','${req.body.eventUrl}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).send("Uploaded")
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
     pucController.getAlbums =((req,res)=>{

        pool.query(`call p_get_album_puc`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
     pucController.postAlbums =((req,res)=>{

        pool.query(`call p_create_album_puc('${req.body.name}','${req.body.desc}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
   pucController.postImage =((req,res)=>{

        pool.query(`call p_create_image_puc(${req.body.id},'${req.body.url}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });


  pucController.removeAlbums =((req,res)=>{

        pool.query(`call p_remove_album_puc(${req.params.id})`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
        res.status(404).send("Unable to remove")
      })
  });
  pucController.getImage =((req,res)=>{

        pool.query(`call p_get_image_puc(${req.params.id})`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });

    pucController.deleteEvents =((req,res)=>{
      pool.query(`call p_remove_event_puc(${req.params.id})`)
      .then(function(rows){
    
      console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
       })
      .catch((err)=>{
        res.status(404).send("Error")
      })

  });
   pucController.deleteImage =((req,res)=>{
      pool.query(`call p_remove_image_puc(${req.params.id})`)
      .then(function(rows){
        res.status(400).send("success")
       })
      .catch((err)=>{
        res.status(404).send("Error")
      })

  });

   


export default pucController;