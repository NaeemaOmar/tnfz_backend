<template >
    <div class="mainBodyDiv">
        
        <h2 class="welcomeTxt mt-5">Want to chat?</h2>
            <div class="d-flex justify-content-center">
            <div class="row container mt-5 d-flex justify-content-center">
              <div class="col-6 mx-auto mt-3">
                <p>Get in touch with me by completing the form below</p>
                <form action="https://formspree.io/f/xaygazkl" method="POST">
                  <div>
                    <label class="my-3">
                    Your name:
                    </label>
                  </div>
                  <div>
                    <input type="name" name="name" class="inputWidth">
                  </div>
                  
                  <div>
                    <label class="my-3">
                      Your email:
                    </label>
                  </div>
                  <div>
                      <input type="email" name="email" class="inputWidth">
                  </div>
                  <div>
                    <label class="my-3">
                      Your message:
                    </label>
                  </div>
                  <div>
                    <textarea class="" name="message"></textarea>
                  </div>
                  <button class=" btnStyling-contactView mt-3" type="submit">Send</button>
                </form>
              </div>
              <div class="col-6   mt-3">
                <p class="">Alternatively, click any of the icons below to go to our social media pages</p>
                <div class="row iconRow1">
                  <div class="col-6 ">
                    <a href="https://github.com/NaeemaOmar" target="_blank">
                      <i class="fa-brands fa-square-github fa-2xl iconStyling "></i>
                    </a>
                    </div>
                  <div class="col-6">
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                      <i class="fa-brands fa-linkedin fa-2xl iconStyling"></i>
                    </a>
                  </div>
                </div>
                <div class="row iconRow2">
                  <div class="col-6">
                    <a href="https://www.whatsapp.com/" target="_blank">
                      <!-- NOTE: the target="_blank" attribute allows the link to be opened in a new tab -->
                      <i class="fa-brands fa-square-whatsapp fa-2xl iconStyling"></i>
                    </a>
                    
                  </div>
                  <div class="col-6">
                    <a href="https://www.facebook.com/login/?next=%2Fmarketplace%2F" target="_blank">
                      <i class="fa-brands fa-square-facebook fa-2xl iconStyling"></i>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </template>
      
<style>
.iconStyling{
  color: #2c3e50;
  font-size: 50px;
  box-shadow: 0px 0px 30px 10px #2c3e50;
}

.iconRow1{
  margin-top: 70px;
}

.iconRow2{
  margin-top: 170px;
}

.btnStyling-contactView{ 
  background-color: #EDB5A2;
  border: 5px solid #2c3e50;
  border-radius: 20px;
  box-shadow: 0px 0px 30px 8px #2c3e50;
  width: 70px;
}


</style>
    
    
    
          