  
 const setpas=`<!Doctype html>
<html>
    <head>
    
        <meta charset='UTF-8'/>
       <meta name="viewport" content="width=device-width, height=device-height,initial-scale=0.5, maximum-scale=1, user-scalable=no">
       
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.2/axios.min.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Raleway:400,600" rel="stylesheet">
<style>
* {
    box-sizing: border-box;
}
body,html {
  width:100%;
  height:100%;
}
body {
  
   width:100%;
   height:100%; 
}
.overlay {
  background-image: url('https://res.cloudinary.com/drako/image/upload/v1496076782/cover-bg_chycp5.png');
  position: absolute;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%
  height:100%;
}
.container-fluid{
  width: 100%;
  height:100%;
}
.realimg{
    padding-top: 30px;
    padding-left: 129px;   
}
.realtext{
    text-align: center;
    color: white;
    margin-top: 209px;
    width: 414px;
    height: 57px;
    font-size: 23px;
    font-weight: 600;
    margin-left: 29px;   
}
.realtextsm{
  width: 472px;
  height: 16px;
  margin-top: 32px;
  font-size: 12px;
  text-align: center;
  color: #ffffff ;
  margin-bottom: 285px;
}
.box{
    width:100%;
    height:100%;
    display: table-cell;
    vertical-align: middle;
    
    
}
input[type="submit"] {
  font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.4px;
    text-align: left;
    color: #fefefe;
    background-color: #00cc44;
    width: 100%;
    text-align: center;
    height: 40px;
    border:none;
    box-shadow: none;
    border-radius: 0;
    border-left:1px solid #fff;
    
     border-radius: 0px 0px 10px 10px;
}
a.cancel {
  font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.4px;
    text-align: left;
    color: #fefefe;
    background-color: #00cc44;
    width: 100%;
    text-align: center;
    height: 40px;
    text-transform: uppercase;
    display: block;
    padding-top: 10px;
    margin-right: -15px;
      border-radius: 0px 0px 0px 10px;
}
.clarifix:after {
   content: " "; /* Older browser do not support empty content */
   visibility: hidden;
   display: block;
   height: 0;
   clear: both;
}
.submitdiv {
  margin-left: -14px;
  margin-right: -14px;
}
</style> 
<script>
    function CheckPass(e){
       var password1 = document.getElementById('password1').value;
       var password2 = document.getElementById('password2').value;
       console.log(window.location.href.split("=")[1])
       if(password1==password2)
       {
           var key=window.location.href.split("=")[1];
           if(key)
           {
            axios.post(window.location.origin+'/user/Setpwd',{pas:password1,cpas:password2,token:key},{headers: {
              'Content-Type': 'application/json'
            }}).then(function(data){
                if(data.status==200)
                {
                    $("#suc").css('display','block');
                    $("#olvidado").css('display','none');
                    return false;
                }
                else {
                    $("#er").css('display','block')
                    return false;
                }
            }).catch(function(err){
                console.log(err)
                return false;

           })
        }
           else{
               alert("unable  to process your request")
               return false;
           }
           
             return false;
            
       }
       else if(password1.length<6 ||password2.length<6 ){
             alert("Enter password more than 6 characters")
             return false;
       
       }
       else if(password1!==password2)
       {
          alert("Passwords are not matching")
             return false;
       }
       else{
            alert("unable  to process your request")
           return false;
       }
    }
  
</script>
</head>
<body>
<a href="http://ec2-54-183-255-200.us-west-1.compute.amazonaws.com/" style="position: absolute;z-index: 3; top: 20px;
    left: 20px;">
  <img src="http://res.cloudinary.com/drako/image/upload/v1496071414/vector-smart-object_sa5wjc.png"/></a> 
<div class="container-fluid" style="display: table; width:100%; height:100%; position: relative; background: url('http://res.cloudinary.com/drako/image/upload/v1496076909/layer-8_slgt1o.png');
   background-repeat: no-repeat;
   background-size: cover;" >
    <div class="overlay"></div>
   
            <div class="box" style="position:relative; z-index: 2;">
              <div style="border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 65px 0 rgba(60, 108, 222, 0.25);
    padding: 49px 29px 0px 29px; width: 410px;
   margin: auto; text-align: center;" class="clarifix">
              <img src="https://s3.amazonaws.com/bluelakefundimg/Fund_Image/asset_login.png"> 
              <div style="padding-top:24px; padding-bottom: 34px; font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.2px;
    text-align: center;
    color: #333333;
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;">Set Password</div>  
              <div style="   font-size: 14px;
    line-height: 1.5;
    text-align: center;
    color: #666666;
    margin-bottom: 20px; font-family: 'Montserrat', sans-serif;">Choose a strong password and don't reuse it for other accounts</div>   
              <div class="row">
                
               
                
                <form name="myForm" id="olvidado" onsubmit="return CheckPass()" style="text-align:center; padding-top:50px"> 
<input type="password" id="password1" placeholder="New Password" style="width:300px; height:35px; border-radius:5px; border:solid 1px #cccccc; padding-left:10px" required><br>
<input type="password" id="password2" placeholder="Confirm Password"  style="margin-top:30px; width:300px; height:35px; border-radius:5px; border:solid 1px #cccccc; padding-left:10px" required><br>
<div class="clarifix submitdiv">
<input type="submit" value="Change Password" style="margin-top:30px; height:40px; font-size:15px;color:white; background-color:#00cc44">
</div>
</form>
<div id="suc" style="font-size: 24px;
    font-weight: bold;
    color: #000;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;display:none; font-weight: bold;
    letter-spacing: 1.2px;
    text-align: center;
    color: #333333;
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;"><p>Password Changed Successfully</p></div>
                </div>
             
              </div>
              </div>
          </div>
</body>
</html>`

  export default setpas;