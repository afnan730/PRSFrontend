<template>
<div class="view" id="home">
  <nav class="navbar navbar-expand-sm fixed-top navbar-light">
    <div class="container">
        <a class="navbar-brand" href="#home">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbar1">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  <div class="logo text-center">
             <img class="img-fluid pic" src="../assets/logo.png" alt="" />
            
           </div>
           
     <div class="container">
      <div class="navbar">
           
       </div>
       <!-- about system -->
      <div class="row mt-5">
      <div class="col-6">
        <h1> Omdurman Maturity Hospital <br> Patient Record System</h1>
        <p class="about-sys">Is a digital version of a patient’s paper file.Which is real-time, patient-centered records that make information available instantly and securely to authorized users. 
    Contain a patient’s medical history, diagnoses, medications, treatment plans, immunization dates, allergies, and laboratory tests and results</p>
    <a href="/login" class="btn btn-dark login" >Login Now</a>
      </div> 
      <div class="col">

        <img class="img-fluid" src="../assets/lenovo.png" width="800" alt="" style="margin:2rem 10rem" />
      </div>
     
   </div>
 </div>
</div>
<!-- about hospital -->
  <div class="about-hospital" id="about">
        <div class="container">
            <h2 class='title'>
                About Hospital
            </h2>
            <div class="row ">
                
                <div class="col-lg-12 col-md-12  col-sm-12 text-content ">
                    <p>
                      It was opened in 1957 by Dr. Abdul Rahman Atabani, may God have mercy on him. Omdurman Maternity Hospital  (Dayat) is the largest obstetrics and gynecology hospital in Sudan. The hospital is considered one of the best 1000 hospitals in Africa and the best in Sudan.
                    </p>
                </div>
            </div>
        </div>
  <div class="container">
  <div class="container ps-5">
    <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/Hospital.jpg"  class="d-block w-100"  height="900" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/doctor.jpg"    class="d-block w-100" height="900" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/records.jpg"    class="d-block w-100" height="900" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
</div>
<!-- contact us -->
<div class="container contact-us" id="contact">
   <h2 class='title '>
                Contact us
    </h2>
    <div class="row">
      <div class="col-6">
        <div class="row px-3">
        <base-card class="text-center">
            <div class="icon rounded-circle text-center" >
                <font-awesome-icon icon="location-dot" />
            </div>
            <h4 class="card-label">Our Address</h4>
            <p>Khartoum - Omdurman, Dayat Hospital Street</p>
        </base-card>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <base-card class="text-center">
              <div class="icon rounded-circle text-center" >
                  <font-awesome-icon icon="envelope" />
              </div>
              <h4 class="card-label">Email Us</h4>
              <p>ATech2022@gmail.com</p>
            </base-card>
          </div>
          <div class="col-6">
            <base-card class="text-center">
              <div class="icon rounded-circle text-center" >
                  <font-awesome-icon icon="phone-volume" />
              </div>
              <h4 class="card-label">Call Us</h4>
              <p>0922057519</p>
            </base-card>
          </div>
        </div>
      </div>
      <div class="col-6">
        <base-card>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Your Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Your Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="text-center mb-3">
            <button  class="btn btn-dark send" >Send Message</button>
            </div>
          </form>
        </base-card>
      </div>
    </div>
</div>
 <div class="footer">
        <hr>
        <p class="copyright">Copyrights @ATech reserved</p>
    </div>
    

</template>
<style scoped>
.view {
  background: linear-gradient(156deg, black, rgb(11, 11, 11) 0%, #64415b 100%),
    #64415b;
  
  overflow-x:hidden;
}
h1{
color: white;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 font-size:50px;
line-height:60px;
}
.about-sys{
  color: #d8d4eb;
  line-height: 2rem;
  font-weight: 400;
  font-size: 1.4rem;
}
.pic{
  max-width: 400px;
}
.login , .send {
  margin-top: 2rem;
 font-weight:500;
 padding: 10px 60px;
 font-size:18px;
 background-color: cadetblue;
 border:none;
}

.navbar a{
  color:cadetblue;
  font-weight: 700;
}
.about-hospital {
  padding: 40px 0;
}
.title {
  text-align: center;
  position: relative;
  margin-bottom: 40px;
  line-height: 60px;
  font-weight: 600;
  color:#64415b;
}
.title::after {
  content: "";
  background:#64415b;
  width: 100px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  top: 120%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.about-hospital .text-content {
  padding: 35px;
  color: black;
}
.about-hospital .row {
  margin-top: 20px;
  font-size: 30px;
  line-height: 43px;
}
.contact-us{
  min-height: 34rem;
  
}
.icon{
  font-size:2rem;
  color:  #64415b;
}
.card-label{
  color:rgb(90, 98, 100);
}
.send{
  background-color: #64415b;
}
.footer {
  background: #0f1922;
  color: #fff;
  font-size: 13px;
  padding: 60px 0px 20px;
  text-align: center;
}
.footer hr {
  border: none;
  background: #b5b5b5;
  height: 1px;
  margin: 10px 20px;
}

</style>
