<template>
<mdb-container>
  <mdb-row class="mt-5 align-items-center justify-content-start">
    <h1 class="mx-auto text-center display-4 p-5 blue-text big"><mdb-icon icon="snowflake" size="1x" />WINTER SCHEDULE<mdb-icon icon="snowflake" size="1x" /></h1>
  </mdb-row>
	
		<mdb-row class="text-justify">
	</mdb-row>
<section class="demo-section pt-5" id="schedule">
   <mdb-row class="pl-5 pr-5">
  <mdb-col class="p-5" col="4">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
        <mdb-btn @click.native="showModal = true" class="blue-gradient">PRIVATE LESSONS</mdb-btn>
        <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
          <mdb-modal-header class="red white-text">
            <h4 class="title"><fa class="fas fa-pencil-alt" />CONTACT US!</h4>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
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
        </mdb-modal>   
</mdb-col>
<mdb-col class="p-5" col="4">

				<router-link :to="{name: schedule, hash:'#beginner'}"><mdb-btn class="blue-gradient">absolute beginners</mdb-btn></router-link>
</mdb-col>
<mdb-col class="p-5" col="4">

				<router-link :to="{name: schedule, hash:'#youth'}"><mdb-btn class="blue-gradient">see youth schedule</mdb-btn></router-link>
</mdb-col>
</mdb-row>
	<div class="resp-container">
    <iframe class="resp-iframe" src="https://brandedweb.mindbodyonline.com/iframe/schedule/154872" gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
</div>
		<mdb-row class="text-justify">
    <div class="align-items-center justify-content-start p-3">
				<a href="https://www.mindbodyonline.com/explore/locations/tap-dance-detroit" target="_blank"><mdb-btn class="blue-gradient">Register for classes!</mdb-btn></a>
	</div>
	</mdb-row>
  <mdb-row class="mt-5 align-items-center justify-content-start" id="youth">
    <h2 class="mx-auto text-center blue-text big"><mdb-icon icon="snowflake" size="1x" /> YOUTH SCHEDULE<mdb-icon icon="snowflake" size="1x" /></h2>
  </mdb-row>
		<div class="resp-container">
    <iframe class="resp-iframe" src="https://brandedweb.mindbodyonline.com/iframe/enrollment/74529" gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
</div>
  <mdb-row class="mt-5 align-items-center justify-content-start" id="beginner">
    <h2 class="mx-auto text-center blue-text big"><mdb-icon icon="snowflake" size="1x" />ABSOLUTE BEGINNERS SCHEDULE<mdb-icon icon="snowflake" size="1x" /></h2>
  </mdb-row>
		<div class="resp-container">
    <iframe class="resp-iframe" src="https://brandedweb.mindbodyonline.com/iframe/enrollment/74530" gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
</div>
	</section>
	
</mdb-container>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody, mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbParallax,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbInput, mdbModalFooter, externalScript } from 'mdbvue';
  export default {
    name: 'AppPage',
    components: {
	  mdbInput,  
	  mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbIcon,
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
// 	created() {
//     let externalScript = document.createElement('script')
//     externalScript.setAttribute('src', 'https://widgets.mindbodyonline.com/javascripts/healcode.js')
//     document.head.appendChild(externalScript),
// 	this.fetchData()
//   },
//   watch: {
//     // call again the method if the route changes
//     '$route': 'fetchData'
//   },
//   methods: {
//     fetchData () {
//       this.error = this.post = null
//       this.loading = externalScript
//       // replace `getPost` with your data fetching util / API wrapper
//     }
//   },
    data() {
      return {
		showModal: false,
		modal: false,
		showRock: false,
		showJazz: false
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    background: none;
}
.fixed-header .table {
	width: auto;
}

.fixed-header thead {
	display: block;
	position: relative;
}

.fixed-header tbody {
	display: block;
	height: 200px;
	overflow-y: scroll;
}

.fixed-column {
	overflow-x: scroll;
	margin-left: 100px;
}

.fixed-column th, .fixed-column td {
	white-space: nowrap;
}

.fixed-column tr th:first-child, .fixed-column tr td:first-child {
	position: absolute;
	width: 100px;
	top: auto;
	margin-left: -100px;
	margin-top: -1px;
}
.btn-grad {background-image: linear-gradient(to right, #FF512F 0%, #F09819 51%, #FF512F 100%)}
.btn-grad:hover { background-position: right center; }

.btn-grad2 {background-image: linear-gradient(to right, #0882E0 0%, #F09819 51%, #FF512F 100%)}
.btn-grad:hover { background-position: right center; }

.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}

.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

</style>
