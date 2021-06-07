function upload(){
    
    //get your image
    var image=document.getElementById('image').files[0];
    
    //get your blog text
    var post=document.getElementById('post').value;
    
    //get image name
    var imageName=image.name;
    
    //firebase storage reference
    //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('images/'+imageName);
    
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
        //handle error here
      console.log(error.message);
    },function(){
        
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           
            //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('admin_page/').push().set({
                 text:post,
                 imageURL:downloadURL,
                 timestamp: firebase.database.ServerValue.TIMESTAMP
           },function(error){
               if(error){
                   window.alert("Error while uploading");
               }else{
                   window.alert("Successfully uploaded");
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}

window.onload=function(){
    this.getdata();
}


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function getdata(){
    firebase.database().ref('admin_page/').once('value').then(function(snapshot){
      //get your posts div
      var posts_div=document.getElementById('posts');
      //remove all remaining data in that div
      posts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database

      for(let[key,value] of Object.entries(data)){

        let dateObj = new Date(value.timestamp);
        let mm = months[dateObj.getMonth()];
        let dd = dateObj.getDate();
        let yyyy = dateObj.getFullYear();

        date = dd + ' ' + mm + ', ' + yyyy;

        var day = days[dateObj.getDay()];
        var hr = dateObj.getHours();
        var min = dateObj.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = "am";
        if( hr > 12 ) {
            hr -= 12;
            ampm = "pm";
        }

        time = day + " " + hr + ":" + min + " "+ampm;

        posts_div.innerHTML=
        "<link rel='stylesheet' href='./css/style2.css'>"+
        "<link rel='stylesheet' href='./css/style.css'>"+
            
        '<section class="container">'+
        '<div class="site-content"></div>'+
        "<div class='posts'>"+    
                "<div class='post-content' data-aos='zoom-in' data-aos-delay='200'>"+
                        "<div class='post-image'>"+
                            "<div>"+
                                "<img src='"+value.imageURL+"' class='img' alt='blog1'>"+
                            "</div>"+
                            "<div class='post-info flex-row'>"+
                                "<span><i class='fas fa-user text-gray'></i>&nbsp;&nbsp;Admin</span>"+
                                "<span><i class='fas fa-calendar-alt text-gray'></i>&nbsp;&nbsp;"+ date +"</span>"+
                                "<span>2 Commets</span>"+
                            "</div>"+
                        "</div>"+
                        "<div class='post-title'>"+
                            "<a href='#'>Hello Galgotians!</a>"+
                            "<p>"+value.text+"</p>"+
                            "<button class='btn post-btn'>Read More &nbsp; <i class='fas fa-arrow-right'></i></button>"+
                            "<button class='btn btn-danger' id='"+key+"'onclick='delete_post(this.id)'>Delete</button>"+
                            "<br>"+
                             time + 
                        "</div>"+
                    "</div>"+
                    "<hr>"+
        "</div>"+ 
        '</div>'+
        '</section>'+posts_div.innerHTML;
      }
    });
}

function delete_post(key){
    firebase.database().ref('admin_page/'+key).remove();
    getdata();
}