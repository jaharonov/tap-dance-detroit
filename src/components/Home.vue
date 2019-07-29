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
    <!-- <mdb-row class="mx-auto">
        <img src="/static/guest_7-23-2019.jpg" class="mx-auto d-block view" style="max-height: 25rem;"/>
    </mdb-row> -->
    <mdb-row class="mx-auto">
        <img src="/static/tdd_logo_trans_high.png" class="mx-auto d-block view" style="max-height: 15rem;"/>
    </mdb-row>
    <section class="logo pb-5">
    <!-- <section class="logo pb-5"> -->
    <mdb-row class="mx-auto pt-5">
        <h4 class="grey-text mx-auto text-center big">Michigan's destination for tap dance, with daily drop-in classes for all levels.</h4>
    </mdb-row>
    <mdb-row class="mx-auto">
        <p class="dark-grey-text mx-auto text-center big"><strong>310 Livernois St., Ferndale, MI 48220</strong></p><br/>
    </mdb-row>
    <mdb-row class="mx-auto">
        <p class="grey-text mx-auto text-center big"><strong>917-687-4811 <a class="red-text" v-bind:href="`mailto:info@tapdancedetroit.org`">info@tapdancedetroit.org</a></strong></p>
    </mdb-row>
    <mdb-row>
      <mdb-col size="12" class="text-center mb-5">
        <mdb-btn @click.native="showModal = true" outline="red">PRIVATE LESSONS ARE AVAILABLE</mdb-btn>
        <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
          <mdb-modal-header class="red white-text">
            <h4 class="title"><fa class="fas fa-pencil-alt" />CONTACT US!</h4>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
            <!-- <form method="POST" action="https://formspree.io/j.aharonov@gmail.com">
  <input type="email" name="Email" placeholder="Your email">
  <textarea name="Name" placeholder="Your name"></textarea>
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Send Test</button>
</form> -->
<form method="POST" action="https://formspree.io/info@tapdancedetroit.org">
    <p class="h4 text-center mb-4">Private lessons are available. Contact us for more info!</p>
    <div class="grey-text">
      <mdb-input label="Your name" icon="user" group type="text" validate error="wrong" success="right" name="name"/>
      <mdb-input label="Your email" icon="envelope" group type="email" validate error="wrong" name="email" success="right"/>
      <mdb-input label="Your message" icon="tag" group type="text" validate error="wrong" success="right" name="message"/>
      <mdb-textarea :rows="2" label="Your message" icon="pencil"/>
    </div>
    <div class="text-center">
      <mdb-btn outline="red">Send <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
    </div>
  </form>
          </mdb-modal-body>
          <!-- <mdb-modal-footer>
            <mdb-btn color="secondary" @click.native="showModal = false">Close</mdb-btn>
            <mdb-btn color="primary">Save changes</mdb-btn>
          </mdb-modal-footer> -->
        </mdb-modal>
      </mdb-col>
    </mdb-row>
    <!-- <mdb-row class="mx-auto pb-5">
    <div class="mx-auto text-center big">
    <mdb-btn outline="deep-orange" @click.native="modal = true">PRIVATE LESSONS AVAILABLE</mdb-btn>
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Private Lessons</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>Private lessons are available! For more info, please email <a class="red-text" href="mailto:info@tapdancedetroit.org.">info@tapdancedetroit.org</a> or call 917-687-4811.</mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="deep-orange" @click.native="modal = false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
  </mdb-row> -->
    <!-- </section> -->
    <mdb-row>
      <img src="/static/landing-class-photo.png" class="img-fluid z-depth-1 jump" style="width: 100%;"/>
    </mdb-row>
    <mdb-row>
            <div class="white-text mx-auto text-center big" v-parallax="0.60">
              
              <h2 class="big">HOME TO MOTOR CITY TAP FEST AND THE DETROIT TAP REPERTORY</h2>
              
            </div>
          </mdb-row>
    </section>
    <!-- <mdb-row class="mx-auto">
        <img src="/static/tdd_logo_trans_high.png" class="mx-auto d-block view" style="max-height: 15rem;"/>
    </mdb-row> -->
    <!-- <mdb-row class="mx-auto pb-5">
    <div class="mx-auto text-center big">
    <mdb-btn outline="deep-orange" @click.native="modal = true">PRIVATE LESSONS AVAILABLE<br/>CLICK FOR MORE INFO</mdb-btn>
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Private Lessons</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>Private lessons are available! For more info, please email info@tapdancedetroit.org.</mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="deep-orange" @click.native="modal = false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
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
  
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbParallax,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue';
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
      mdbParallax,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
    },
    data() {
      return {
        showModal: false
      };
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