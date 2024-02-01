<template>
    <div class="">
      <h1 class="welcomeTxt">Character witnesses</h1>
    </div>
    <!-- Bootstrap carousel starts here -->
      <div
        class="carousel slide topMargin"
        id="testimonialsCarousel"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <!-- Asi: carousel item opens -->
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/qnYVPmZ/Asi-NoBg.png"
                class="d-block"
                alt=""
              />
            </div>
            <div>
              <h3 id="" class=" text-center">
                {{ this.$store.state.name4 }}
              </h3>
              <p id="" class="balthazar">
                {{ this.$store.state.desc4 }}
                "Naeema's combination of
                unwavering diligence and hard work combined with her remarkable level of
                intelligence make her a standout professional. Her articulate
                communication skills further elevate her abilities."
              </p>
            </div>
            <!-- carousel caption closes -->
          </div>
          <!-- Asi carousel item closes -->

          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/L6M5L7R/Ty-noBg.png"
                class="d-block"
                alt=""
              />
            </div>
            <div>
              <h3 id="" class="= text-center">
                {{ this.$store.state.name5 }}
              </h3>
              <p id="" class="=">
                {{ this.$store.state.desc5 }}
              </p>
            </div>
            <!-- carousel caption closes -->
          </div>
          <!-- carousel item closes -->

          <div class="carousel-item active">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/1L1YbSy/Matthew-no-Bg.png"
                class="d-block "
                alt=""
              />
            </div>
            <div>
              <h3 id="" class=" text-center">
                {{this.$store.state.name1}}
              </h3>
              <p id="" class="">
                {{ this.$store.state.desc1 }}
              </p>
            </div>
            <!-- carousel caption closes -->
          </div>
          <!-- carousel item closes -->
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/V3kRdDY/Ntando-no-Bg.png"
                class="d-block "
                alt=""
              />
            </div>
            <div>
              <h3 id="" class=" text-center">
                {{ this.$store.state.name2 }}
              </h3>
              <p id="" class="">
                {{ this.$store.state.desc2 }}
              </p>
            </div>
            <!-- carousel caption closes -->
          </div>
          <!-- carousel item closes -->
          <!-- Onika: carousel item opens -->
          <div class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                src="https://i.ibb.co/frd5rx6/Onika-no-Bg.png"
                class="d-block"
                alt=""
              />
            </div>
            <div>
              <h3 id="" class=" text-center">
                {{ this.$store.state.name3 }}
              </h3>
              <p id="" class="">
                {{ this.$store.state.desc3 }}
              </p>
            </div>
            <!-- carousel caption closes -->
          </div>
          <!-- Onika carousel item closes -->
        </div>
        <!-- carousel wrapper closes -->
        <button
          class="carousel-control-prev arrowBtns "
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon " aria-hidden="true"></span>
          <span class="visually-hidden brownTxt ">Previous</span>
        </button>
        <button
          class="carousel-control-next arrowBtns"
          type="button"
          data-bs-target="#testimonialsCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden brownTxt">Next</span>
        </button>
      </div>    
    <!-- Bootstrap carousel ends here -->


  </template>

<style>
.arrowBtns{
    background-color: #EDB5A2;
    border: 5px solid #2c3e50;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    max-height: 100px;
    width: 100px;
    margin-top: 7%;
    margin-inline: 10%;
}

.topMargin{
  margin-top: 100px;
}
</style>

  <!-- 
    Testimonial images: links
    1)https://i.ibb.co/qnYVPmZ/Asi-NoBg.png
    2)https://i.ibb.co/1L1YbSy/Matthew-no-Bg.png
    3)https://i.ibb.co/V3kRdDY/Ntando-no-Bg.png
    4)https://i.ibb.co/frd5rx6/Onika-no-Bg.png
    5)https://i.ibb.co/xFSR2tQ/Seth-no-Bg.png
    6)https://i.ibb.co/L6M5L7R/Ty-noBg.png
   -->