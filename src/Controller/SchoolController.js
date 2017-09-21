import transporter from '../Util/Mailer';
import pool from '../Util/db';

var SchoolController={};


SchoolController.contactUs =((req,res)=>{
    var mailOptions = {
  from: 'zenopsysevolve@gmail.com', 
  to: 'dananjayagokhale@gmail.com', 
  subject: 'Soundarya School  Contact us',
  html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
};

   transporter.sendMail(mailOptions,(err,info)=>{
      res.send("Email Sent")
   })


  });
  SchoolController.alumini =((req,res)=>{
    var mailOptions = {
  from: 'zenopsysevolve@gmail.com', 
  to: 'zenopsysevolve@gmail.com', 
  subject: 'Soundarya School  Alumini',
  html: `<p>Name : ${req.body.name}</p>
          <p>Contact Num : ${req.body.number}</p>
          <p>email : ${req.body.email}</p>
          <p>Message : ${req.body.message}</p>`
};

   transporter.sendMail(mailOptions,(err,info)=>{
      res.send("Email Sent")
   })


  });


       SchoolController.getEvents =((req,res)=>{
    pool.query('call p_get_event_school').then(function(rows){
    
    //console.log(rows);
    res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
  SchoolController.getUpcomingEvents =((req,res)=>{

        pool.query('call p_get_upcoming_events_school').then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
   SchoolController.createEvents =((req,res)=>{

       console.log(req.body.name,req.body.date,req.body.eventUrl)
        pool.query(`call p_create_event_school('${req.body.name}','${req.body.date}','${req.body.eventUrl}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).send("Uploaded")
      }).catch((err)=>{
         res.status(404).send(err)
      })
  });
     SchoolController.getAlbums =((req,res)=>{

        pool.query(`call p_get_album_school`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
     SchoolController.postAlbums =((req,res)=>{

        pool.query(`call p_create_album_school('${req.body.name}','${req.body.desc}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });
   SchoolController.postImage =((req,res)=>{

        pool.query(`call p_create_image_school(${req.body.id},'${req.body.url}')`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });


  SchoolController.removeAlbums =((req,res)=>{

        pool.query(`call p_remove_album_school(${req.params.id})`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
        res.status(404).send("Unable to remove")
      })
  });
  SchoolController.getImage =((req,res)=>{

        pool.query(`call p_get_image_school(${req.params.id})`).then(function(rows){
    
      //console.log(rows);
       res.status(200).json({
                 response:rows[0]
                })
      }).catch((err)=>{
         res.status(404).send("Error")
      })
  });

    SchoolController.deleteEvents =((req,res)=>{
      pool.query(`call p_remove_event_school(${req.params.id})`)
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
     SchoolController.deleteImage =((req,res)=>{
      pool.query(`call p_remove_image_school(${req.params.id})`)
      .then(function(rows){
        res.status(400).send("success")
       })
      .catch((err)=>{
        res.status(404).send("Error")
      })

  });



   


export default SchoolController;