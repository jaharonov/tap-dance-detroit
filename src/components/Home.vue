<template>
  <mdb-container fluid>
    <!-- <mdb-row>
            <div class="red-text text-left p-2" v-parallax="0.1">
              <h4 class="big">HOME TO MOTOR CITY TAP FEST AND <br/> THE DETROIT TAP REPERTORY</h4>
            </div>
          </mdb-row> -->
    <!-- <mdb-view v-parallax="0.0" class="landing">
      <mdb-mask class="gradient d-flex justify-content-right align-items-center">
          
      </mdb-mask>
    </mdb-view> -->
    <!-- <div class="test">
      <img src="/static/landing-class-photo.png/">
    </div> -->
    <section class="logo pb-5">
    <mdb-row class="mx-auto">
        <img src="/static/tdd_logo_trans_high.png" class="mx-auto d-block view" style="max-height: 15rem;"/>
    </mdb-row>
    <mdb-row class="mx-auto">
        <h4 class="grey-text mx-auto text-center big">Michigan's destination for tap dance, with daily drop-in classes for all levels.</h4>
    </mdb-row>
    <mdb-row class="mx-auto">
        <p class="dark-grey-text mx-auto text-center big"><strong>310 Livernois St., Ferndale, MI 48220</strong></p><br/>
    </mdb-row>
    <mdb-row class="mx-auto">
        <p class="grey-text mx-auto text-center big"><strong>917-687-4811 <a class="red-text" v-bind:href="`mailto:info@tapdancedetroit.org`">info@tapdancedetroit.org</a></strong></p>
    </mdb-row>
    </section>
    <mdb-row>
      <img src="/static/landing-class-photo.png" class="img-fluid z-depth-1 jump" style="width: 100%;"/>
    </mdb-row>
    <mdb-row>
            <div class="white-text mx-auto text-center big" v-parallax="0.75">
              <h2 class="big">HOME TO MOTOR CITY TAP FEST AND THE DETROIT TAP REPERTORY</h2>
            </div>
          </mdb-row>
    <!-- <mdb-row class="mx-0">
        <img src="/static/landing-class-photo.png" class="mx-0 d-block view" fluid/>
    </mdb-row> -->
    <!-- <mdb-row class="mx-auto pt-2" v-parallax="0.5">
      <mdb-col lg="8">
      <img src="/static/landing-class-photo.png" class="img-fluid-grow mx-auto d-block" style="width: 100%"/>
      </mdb-col>
      <mdb-col lg="4">
      <h4>TEST TEST TEST</h4>
      </mdb-col>
    </mdb-row> -->
  </mdb-container>
  
</template>

<script>
  // import { mdbParallax, mdbContainer, mdbMask, mdbRow, mdbCol } from 'mdbvue';
  // export default {
  //   components: {
  //     mdbParallax,
  //     mdbContainer,
  //     mdbMask,
  //     mdbRow,
  //     mdbCol
  //   }
  // }
  
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbParallax } from 'mdbvue';
  export default {
    name: 'AppPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
      mdbView,
      mdbMask,
      mdbBtn,
      mdbNavbarBrand,
      mdbParallax
    }
  }

</script>
<style>

  /* .classic-form-page .gradient {
    background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(72, 15, 144, 0.4) 100%);
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(72, 15, 144, 0.4) 100%);
  }

  .classic-form-page .card {
    background-color: rgba(126, 123, 215, 0.2);
  }

  .classic-form-page h6 {
    line-height: 1.7;
  }

  .classic-form-page .navbar {
    transition: background .5s ease-in-out,padding .5s ease-in-out;
  }

  .classic-form-page .navbar .md-form {
    margin: 0;
  }

  .top-nav-collapse {
    background: #424f95 !important;
  }

  @media (max-width: 768px) {
    .classic-form-page .navbar:not(.top-nav-collapse) {
        background: #424f95 !important;
    }
  }

  .classic-form-page label {
    color: #fff!important;
  } */
  
  /* .home {
    background-image: url('/static/landing-class-photo.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(100vh - 75px);
    z-index: -1;
    margin: 0;
  } */
  /* .gradient {
    background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
    background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  } */

  .landing {
    height: 100vh;
  }
  
  .logo {
    z-index: 1;
  }

  .jump {
    z-index: -1;
    height: auto;
    width: 100%;
  }

  /* On screens that are 600px or less, set the background color to olive */
@media (max-width: 767px) {
  .jump {
    max-height: 20rem;
  }
}
  .container {
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}

</style>