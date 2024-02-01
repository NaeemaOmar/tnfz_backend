<template>
    <div class="">
            <h1 class="welcomeTxt mt-5">Projects</h1>
            <h2 class="">Below you will find the projects I completed since starting my coding journey at Life Choices Academy</h2>
    </div>
    <div class="row">
    <!-- <div class="container-fluid d-flex justify-content-evenly parentDivMaxWidth"> -->
      <!-- div above opens project holding div -->
          <div class="col-12 col-sm-6 col-md-3 " v-for="project in this.$store.state.projectsData" :key="project.id">
            <!-- This div holds the individual project cards -->
            <div class="gap">
              <h1 class="d-flex align-items-center">{{ project.name }}</h1>
              <!-- d-flex align-items-center vertically centers the text in its 165px container -->
              <img class="" :src="project.imgSRC" alt="">
              <!-- Image link wasn't loading for 2 reasons: 1) src is an attribute and therefore needs to be bound (w/ : before the src) and 2) because attributes do NOT take moustache syntax-->
              <h5 class=" d-flex align-items-center">{{ project.description }}</h5>
              <div class="row ">
                <div class="col-6 ">
                  <a :href="project.netlify">
                    <button class="btnStyling brownTxt">View project</button>
                    <!-- Q: why wasn't the anchor tag working?
                    A: because href is a attribute and therefore needs a colon for binding AND no mostache syntax -->
                  </a>
                </div>
                <div class="col-6">
                  <a :href="project.github">
                    <button class="btnStyling brownTxt">Project gitHub</button>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
      <!-- div below closes project holding div -->
    </div>
  </template>
  
  <!-- <script>
    export default{
      computed:{
        projectsData(){
          return this.$store.state.projectsData;
        },
      },
  
    }
  </script> -->
  
  <style>
  </style>