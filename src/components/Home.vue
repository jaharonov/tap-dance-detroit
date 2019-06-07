<template>
  <mdb-container>
    <mdb-row>
            <div class="white-text text-left p-0">
              <h4 class="big" v-parallax="0.1">Home to Motor City Tap Fest and<br/> the Detroit Tap Repertory</h4>
            </div>
            <!-- <mdb-col v-parallax="0.5">
              <img src="/static/tdd_logo_transparent.png" class="mx-auto d-block view" style="max-height: 25rem;"/>
            </mdb-col> -->
          </mdb-row>
    <mdb-view v-parallax="0.0" class="landing home mr-0">
      <mdb-mask class="gradient d-flex justify-content-right align-items-center">
          
      </mdb-mask>
    </mdb-view>
    <div v-parallax="0.5">
    <mdb-row class="mx-auto">
        <img src="/static/tdd_logo_transparent.png" class="mx-auto d-block view" style="max-height: 25rem;"/>
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
    </div>
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

  .classic-form-page .gradient {
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
  }
  
  body {
    background-image: url('/static/landing-class-photo.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    /* height: calc(80vh - 100px); */
    height: 60vh;
    z-index: -1;
    margin: 0;
  }
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
</style>