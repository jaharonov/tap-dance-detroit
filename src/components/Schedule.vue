<template>
<mdb-container>
  <mdb-row class="mt-5 align-items-center justify-content-start">
    <h1 class="mx-auto text-center display-4 red-text big">SCHEDULE</h1>
  </mdb-row>
	
  <!-- <mdb-row class="mt-5 justify-content-start p-5">
	<h4 class="deep-orange-text big">NEW STUDENT SPECIAL: 2 weeks of unlimited classes for $29.99.</h4><br/>
    <h4 class="grey-text big">Our drop-in class schedule allows for adults, plus focused tap students ages 13 and up. 
We will make exceptions! Just notify the studio ahead of time if a dancer under 13 would like to attend classes.</h4>
  </mdb-row> -->
  <mdb-row class="justify-content-center pb-3">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
        <a href="#youth"><mdb-btn class="btn-grad"><h4>Click for more info on our youth classes!</h4></mdb-btn></a>
        
    </mdb-row>
  <mdb-row class="align-items-center justify-content-center p-5">
    <mdb-col lg="6" class="text-justify">
	<h4 class="deep-orange-text">PRICING</h4>
	 <ul>
	<li><strong>UNLIMITED CLASSES:</strong>Unlimited monthly class pass: $120</li>
	<li><strong>SUPER UNLIMITED CLASSES:</strong> for dancers taking more than one form of dance:$130</li>
    <li><strong>SINGLE CLASS:</strong>  90 minute class: $18, 60 minute class: $15</li>
    <li><strong>5-CLASS PACKAGE:</strong>  90 minute classes: $87.50, 60 minute classes: $85</li>   
    <li><strong>10-CLASS PACKAGE:</strong>  90 minute classes: $170, 60 minute classes: $140</li>
    </ul>
	</mdb-col>
	<mdb-col lg="3" class="text-justify">
    <div class="align-items-center justify-content-start p-3">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
				<a href="https://dancestudio-pro.com/online/index.php?account_id=15325" target="_blank"><mdb-btn outline="red">Register for classes!</mdb-btn></a>
	</div>
	</mdb-col>
	<mdb-col lg="3" class="text-justify">
    <div class="align-items-center justify-content-start p-3">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
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
      <!-- </mdb-col> -->
    
  </div>
  </mdb-col>
    </mdb-row>
  
		<mdb-row class="text-justify">
    <div class="align-items-center justify-content-start p-3">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
				<a href="https://www.mindbodyonline.com/explore/locations/tap-dance-detroit" target="_blank"><mdb-btn outline="red">Register for classes!</mdb-btn></a>
	</div>
	</mdb-row>
<section class="demo-section pt-5" id="schedule">
	<h2 class="blue-text text-center"><mdb-icon icon="snowflake" size="1x" /><strong> WINTER SCHEDULE </strong><mdb-icon icon="snowflake" size="1x" /></h2>
	<mdb-row class="mt-5 align-items-center justify-content-left p-3" id="winter">

    <!-- <h4 class="blue-text">Spring Classes!</h4>  -->
				<a href="https://www.mindbodyonline.com/explore/locations/tap-dance-detroit" target="_blank"><mdb-btn class="btn-grad2">REGISTER FOR WINTER SESSION!</mdb-btn></a>
	<!-- <iframe src="https://dancestudio-pro.com/apps/api_classes_resp.php?id=zaqlxajd29jd25cfea9701936309jasdklj21dx5cfea970193a1" width="100%" height="600px" scrolling="yes"
frameborder="0"></iframe> -->
<healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="381544197c15" data-widget-version="1" ></healcode-widget>
    </mdb-row>
		
		
		<mdb-row class="text-justify">
    <div class="align-items-center justify-content-start p-3">
				<a href="https://www.mindbodyonline.com/explore/locations/tap-dance-detroit" target="_blank"><mdb-btn class="btn-grad2">Register for classes!</mdb-btn></a>
	</div>
	</mdb-row>
	</section>
	<section>
	<!-- <mdb-row>
    <mdb-col lg="8" class="text-justify">
    <div class="mt-5 align-items-center justify-content-start p-3 pt-5">
    <hr class="deep-orange"/>
    <a id="youth"><h3 class="grey-text big">TDD YOUTH PROGRAM</h3></a>
	</div>
	<div class="mt-5 align-items-center justify-content-start p-3">
	<h4 class="deep-orange-text big">2-3 YEAR-OLDS</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/><strong class="big"> Tuesdays or Thursdays 11:30am-12:00pm</strong> </span>
	<p class="big"><strong> 8-week Session: $100</strong></p>

	</div>
    <div class="mt-5 align-items-center justify-content-start p-3">
	<h4 class="deep-orange-text big">4-6 YEAR-OLDS</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> <strong class="big">Mondays or Wednesdays 4:30pm-5:00pm</strong></span>
    <p class="big">This session is for 4-6 year-olds to discover the joy of tap dancing, learning basic steps and participating in fun interactive activities that will teach them spacial awareness and musicality. The dancers will show off what they've learned after the last class.</p>
	<p class="big"><strong> 8-week Session: $100</strong></p>
	<p class="big"><strong>Shuffles and Chassés Tap/Jazz Bundle: $175. Mondays or Wednesdays 4:30pm-5:30pm</strong></p>
	</div>
  <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text big">6-8 YEAR-OLDS</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> <strong class="big">Saturdays 11:00am-12:00pm</strong></span>
    <p class="big"><strong>Tap/Jazz Combo</strong> 8-week session with Denise Caston-Clark. $140 </p>
  </div> 

  <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text big">8-10 YEAR-OLDS</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> <strong class="big">Wednesdays or Thursdays 6:00pm-7:30pm</strong></span>
    <p class="big">This 8-week session is for 8-10 year-olds to discover the joy of tap dancing or continue exploring what they've already developed, learning basic steps and participating in fun interactive activities that will teach them spacial awareness and musicality. The dancers will show off what they've learned after the last class!</p>
	<p class="big"><strong>6:00pm-6:45pm Young Shuffles Tap 1 for 8-10 year-olds - $120</strong></p>
	<p class="big"><strong>6:45pm-7:30pm Jazz 1 for 8-10 year-olds - $120</strong></p>
	<p class="big"><strong>Take both classes! Tap/Jazz Bundle - $220</strong></p>
	
  </div> 
  
  <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text big">TEENS/TWEENS</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> <strong class="big">Wednesdays 5:30pm-6:30pm</strong></span>
    <p class="big"><strong>Tap Fundamentals for Teens</strong> 8 weeks: $140</p>
	
  </div> 
		<hr class="deep-orange"/>
  </mdb-col>
   <mdb-col lg="4" class="p-3 pt-5 text-justify">
	   <div class="align-items-center justify-content-center p-5">
				<a href="https://dancestudio-pro.com/online/index.php?account_id=15325" target="_blank"><mdb-btn class="btn-grad">REGISTER FOR YOUTH CLASSES!</mdb-btn></a>
	</div>
	
       <img src="/static/first-second-shuffles.jpg" class="img-fluid-grow mx-auto d-block" style="max-width: 100%"/>
	    <div class="align-items-center justify-content-center p-5">
        <a href="#schedule"><mdb-btn class="btn-grad"><mdb-icon icon="sun" size="2x" /><br/>VIEW FULL SPRING SCHEDULE</mdb-btn></a>
        
    </div>
   </mdb-col>
	 
   </mdb-row> -->
   </section>
</mdb-container>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody, mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbParallax,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbInput, mdbModalFooter } from 'mdbvue';
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
	mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://widgets.mindbodyonline.com/javascripts/healcode.js')
    document.head.appendChild(externalScript)
  },
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

.btn-grad2 {background-image: linear-gradient(to right, #FF512F 0%, #F09819 51%, #FF512F 100%)}
.btn-grad:hover { background-position: right center; }

</style>
