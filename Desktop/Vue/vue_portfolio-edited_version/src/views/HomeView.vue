<template>
  <div class="">
    <div class="">
          <h1 class="welcomeTxt my-5">Welcome to my online abode</h1>
    </div>
  </div>
  <div class="row mt-5 mx-5 d-flex justify-content-between">
    <!-- The d-flex... in the line above is keeping things centered in the 1000px page width -->

    <!-- Image column starts here -->
    <div class="col-12 col-sm-3 mt-5 ">
      <img class="homePgImg" src="https://i.ibb.co/dDknjkr/about-Pg-Pic.jpg" alt="">
    </div>
    <!-- Image column ends here -->

    <div class="col-12 col-sm-5">
      <div class="txtBorderHome mt-5">
        <h3>I am <span class="brownTxtShadow">Naeema Omar,</span></h3>
        <h3>an aspiring</h3>
        <h3>Full-stack developer</h3>
      </div>
      <!-- Buttons row starts here -->
      <div class="row mt-5">
        <div class="col-6">
          <a href="/src/views/AboutView.vue">
            <button class="btnStyling"><router-link to="/about"> <span class="brownTxt">About</span></router-link></button>
          </a>
        </div>
        <div class="col-6">
          <a href="/src/views/AboutView.vue">
            <button class="btnStyling"><router-link to="/contact"> <span class="brownTxt">Contact</span></router-link></button>
          </a>
        </div>
      </div>
       <!-- Buttons row ends here -->
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  
}
</script>

<style>
.homePgImg{
    min-width: 195px;
    max-width: 290px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
    margin-bottom: 100px;
}

.txtBorderHome{
  border: 5px solid #2c3e50;
  box-shadow: 0px 0px 30px 10px #2c3e50;
  border-radius: 45px;
  background-color: #EDB5A2;
  margin-inline: 20px;
}

</style>

<!-- 
  Home pg image link:
  1)https://i.ibb.co/YRBhdkQ/My-Home-Pg-Pic-Bg-Rectangle-Ver-no-Bg.png
  2)https://i.ibb.co/3fwNCwS/My-Home-Pg-Pic-Bg-Square-Ver-no-Bg.png
 -->