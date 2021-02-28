<template>
<mdb-container>
  <mdb-row class="mt-5 align-items-center justify-content-start">
    <h1 class="mx-auto text-center display-4 red-text big">RENTALS</h1>
  </mdb-row>
 
  <section class="demo-section pt-5" id="schedule">
   <mdb-row class="pl-5 pr-5 mx-auto">
  <mdb-col class="p-5" col="4"> 
</mdb-col>
<mdb-col class="p-5 " col="4">

	<mdb-btn @click.native="showModal = true" class="blue-gradient">RENTALS ARE AVAILABLE</mdb-btn>
        <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
          <mdb-modal-header class="blue white-text">
            <h4 class="title"><fa class="fas fa-pencil-alt" />CONTACT US!</h4>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
<form method="POST" action="https://formspree.io/info@tapdancedetroit.org">
    <p class="h4 text-center mb-4">Rentals are available. Contact us for more info!</p>
    <div class="grey-text">
      <mdb-input label="Your name" icon="user" group type="text" validate error="wrong" success="right" name="name"/>
      <mdb-input label="Your email" icon="envelope" group type="email" validate error="wrong" name="email" success="right"/>
      <mdb-input label="Your message" icon="tag" group type="text" validate error="wrong" success="right" name="message"/>
      <mdb-textarea :rows="2" label="Your message" icon="pencil"/>
    </div>
    <div class="text-center">
      <mdb-btn class="blue-gradient">Send <mdb-icon icon="paper-plane" class="ml-1"/></mdb-btn>
    </div>
  </form>
          </mdb-modal-body>
        </mdb-modal>  
</mdb-col>
<mdb-col class="p-5" col="4">

</mdb-col>
</mdb-row>
	</section>
</mdb-container>
</template>
<style>
 
</style>
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
</style>