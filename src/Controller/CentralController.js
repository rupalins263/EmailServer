import transporter from '../Util/Mailer';
import pool from '../Util/db';
var CentralController={};

CentralController.admission=((req,res)=>{
    var mailOptions = {
      from: 'zenopsysevolve@gmail.com', 
      to: 'soundaryacentralschool@gmail.com', 
      cc:'dananjayagokhale@gmail.com',
      bcc:'zenopsysevolve@gmail.com',
  subject: 'Soundarya Central School contact us',
  html: `<p>Name : ${req.body.name}</p>
          <p>Sex : ${req.body.sex}</p>
          <p>email : ${req.body.email}</p>
          <p>phone : ${req.body.phone}</p>
          <p>Country : ${req.body.country}</p>
          <p>Coarse : ${req.body.course}</p>
          <p>Admission related query : ${req.body.query}</p>`
};

   transporter.sendMail(mailOptions,(err,info)=>{
      res.send("Email Sent")
   })


  });
  
CentralController.contactUs =((req,res)=>{
    var mailOptions = {
      from: 'zenopsysevolve@gmail.com', 
      to: 'soundaryacentralschool@gmail.com', 
      cc:'dananjayagokhale@gmail.com',
      bcc:'zenopsysevolve@gmail.com',
  subject: 'Soundarya Central School  Admission',
  html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
};

   transporter.sendMail(mailOptions,(err,info)=>{
      res.send("Email Sent")
   })


  });
       CentralController.getEvents =((req,res)=>{
    pool.query('call p_get_event_central').then(function(rows){
    
    //console.log(rows);
    res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
  CentralController.getUpcomingEvents =((req,res)=>{

        pool.query('call p_get_upcoming_events_central').then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
   CentralController.createEvents =((req,res)=>{

       console.log(req.body.name,req.body.date,req.body.eventUrl)
        pool.query(`call p_create_event_central('${req.body.name}','${req.body.date}','${req.body.eventUrl}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).send("Uploaded")
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
     CentralController.getAlbums =((req,res)=>{

        pool.query(`call p_get_album_central`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
     CentralController.postAlbums =((req,res)=>{

        pool.query(`call p_create_album_central('${req.body.name}','${req.body.desc}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
   CentralController.postImage =((req,res)=>{

        pool.query(`call p_create_image_central(${req.body.id},'${req.body.url}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });


  CentralController.removeAlbums =((req,res)=>{

        pool.query(`call p_remove_album_central(${req.params.id})`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
        res.status(404).send("Unable to remove")
      })
  });
  CentralController.getImage =((req,res)=>{

        pool.query(`call p_get_image_central(${req.params.id})`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });

    CentralController.deleteEvents =((req,res)=>{
      pool.query(`call p_remove_event_central(${req.params.id})`)
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
       CentralController.deleteImage =((req,res)=>{
      pool.query(`call p_remove_image_central(${req.params.id})`)
      .then(function(rows){
        res.status(400).send("success")
       })
      .catch((err)=>{
        res.status(404).send("Error")
      })

  });

   


export default CentralController;