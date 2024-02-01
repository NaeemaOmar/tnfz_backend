<template>
  <div class="">
    <div class="">
          <h3 class="welcomeTxt mt-4">Hi, I am <span class="">Naeema Omar</span></h3>
    </div>
  </div>
 <div class="row rowAlignment mt-5">
  <div class="col-12 col-sm-6">
    <img class="aboutPgImg" src="https://i.ibb.co/dDknjkr/about-Pg-Pic.jpg" alt="">
  </div>
  <div class="col-12 col-sm-6 txtBorderAbout">
    <div class="mt-5">
      <h5>I am a 25 year old from Cape Town </h5>
      <h5>who recently became interested in</h5>
      <h5>pursuing a career in coding</h5>
    </div>
    <div class="mt-4">
      <h6 class="">Basic info</h6>
      <h6>D.O.B: 02/04/1999 (25yrs)</h6>
      <h6>Location:Cape Town</h6>
      <h6>Language: English</h6>
    </div>
  </div>
 </div> 
 <div class="row rowAlignment mt-5">
  <div class="col-12 txtBorderAbout interestsTxt">
    <h6 class="subHeading">Interests</h6>
    <h6>Reading:(Favourite genre: non-fiction) Recently finished: Atomic Habits (James Clear). Currently reading Surrounded by Idiots (Thomas Eriskson) with Jim Kwik's "Limtless" next on my to-be-read list.</h6>
    <h6>Hiking: currently busy covering all the trails at the Tygerberg Nature Reserve. Goal/dream = cover all the waterfall hike of Cape Town</h6>
  </div>
 </div>

</template>

<script>
// @ is an alias to /src

export default {
  
}
</script>

<style>
.aboutPgImg{
    min-width: 195px;
    max-width: 290px;
    max-height: 300px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
}

.rowAlignment{
  padding: 50px;
  width: 100%;
}

.txtBorderAbout{
  border: 5px solid #2c3e50;
  box-shadow: 0px 0px 30px 10px #2c3e50;
  border-radius: 45px;
  background-color: #EDB5A2;
}

.interestsTxt{
  padding-inline: 10px;
}

</style>

<!-- 
  AboutPg image link:
  1) https://i.ibb.co/dDknjkr/about-Pg-Pic.jpg
 -->