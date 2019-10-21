<template>
<mdb-container>
  <mdb-row class="mt-5 align-items-center justify-content-start">
    <h1 class="mx-auto text-center display-4 red-text big">SCHEDULE</h1>
  </mdb-row>
	
  <mdb-row class="mt-5 justify-content-start p-5">
	<h4 class="deep-orange-text big">FALL SPECIAL: 2 weeks of unlimited classes for $29.99.</h4><br/>
    <h4 class="grey-text big">Our drop-in class schedule allows for adults, plus focused tap students ages 13 and up. 
We will make exceptions! Just notify the studio ahead of time if a dancer under 13 would like to attend classes.</h4>
  </mdb-row>
  <mdb-row class="justify-content-center pb-3">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
        <a href="#youth"><mdb-btn class="btn-grad"><h4>Click for more info on our youth classes!</h4></mdb-btn></a>
        
    </mdb-row>
  <mdb-row class="align-items-center justify-content-center p-5">
    <mdb-col lg="6" class="text-justify">
	<h4 class="deep-orange-text">PRICING</h4>
	 <ul>
	<li><strong>UNLIMITED CLASSES:</strong>Unlimited monthly class pass: $115 (Includes all tap, jazz, and ballroom classes.)</li>
    <li><strong>SINGLE CLASS:</strong>  90 minute class: $18, 60 minute class: $15</li>
    <li><strong>5-CLASS PACKAGE:</strong>  90 minute classes: $87.50, 60 minute classes: $70</li>   
    <li><strong>10-CLASS PACKAGE:</strong>  90 minute classes: $170, 60 minute classes: $135</li>
	<li><strong>STUDENT DISCOUNT:</strong> $12 per 90-minute class, $10 per 60-minute class with student ID</li>
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
  
<section class="demo-section pt-5" id="schedule">
	<h2 class="red-text"><mdb-icon fab icon="canadian-maple-leaf" size="2x" />FALL SCHEDULE<mdb-icon fab icon="canadian-maple-leaf" size="2x" /></h2>
	<mdb-row class="mt-5 align-items-center justify-content-center p-3">

    <h4 class="deep-orange-text">Fall schedule starts September 3rd for adults and September 9th for youth.</h4>
    </mdb-row>
		<h4>Monday</h4>
		<section>
			<mdb-tbl bordered>
				<mdb-tbl-head>
					<tr>
						<th>Time</th>
						<th>Studio 1</th>
						<th>Studio 2</th>
						<th>Studio 3</th>
					</tr>
				</mdb-tbl-head>
				<mdb-tbl-body>
					<tr scope="row" class="deep-orange lighten-4">
						<td>12:00pm-1:00pm</td>
						<td>Beginner 1 (0-1 year experience)<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>4:00pm-5:00pm</td>
						<td><strong>4:30pm-5:00pm First Shuffles (4-5 year olds)</strong> <br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>5:00pm-6:00pm</td>
						<td>RENTAL AVAILABLE</td>
						<td>Beginner 2 (2+ years<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>6:00pm-7:30pm</td>
						<td>Advanced Beginner (3+ years)<br/>Paige Baidel</td>
						<td>Intermediate 1 (4+ years) <br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>7:30pm-9:00pm</td>
						<td>Intermediate 2 (5+ years)<br/>Paige Baidel</td>
						<td>Beginner 1 (0-1 year experience) <br/> Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
				</mdb-tbl-body>
			</mdb-tbl>
		</section>
        <h4>Tuesday</h4>
        <section>
			<mdb-tbl bordered>
				<mdb-tbl-head>
					<tr>
						<th>Time</th>
						<th>Studio 1</th>
						<th>Studio 2</th>
						<th>Studio 3</th>
					</tr>
				</mdb-tbl-head>
				<mdb-tbl-body>
				
					<tr scope="row" class="deep-orange lighten-4">
						<td>10:30am-11:30am</td>
						<td>Advanced Beginner (3+ years) <br/> Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
          <tr scope="row">
						<td>12:00pm-1:00pm</td>
						<td>Beginner 1 (0-1 year experience) <br/> Denise Caston-Clark</td>
						<td><strong>11:30am-12:00pm Wee Shuffles (2-3 year olds)</strong> <br/> Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row" class="deep-orange lighten-4">
						<td>4:00pm-5:00pm</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>5:30pm-6:30pm</td>
						<td>Beginner Ballroom and Latin<br/>Emily Rose Merrell</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>6:30pm-7:30pm</td>
						<td>Intro to Acting and Voice<br/>Emily Rose Merrell</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row" class="deep-orange lighten-4">
						<td>7:30pm-8:30pm</td>
						<td>Intermediate 1-2 Broadway Style <br/>Denise Caston-Clark </td>
						<td>Intermediate Latin<br/>Emily Rose Merrell</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
				</mdb-tbl-body>
			</mdb-tbl>
		</section>
        <h4>Wednesday</h4>
		<section>
			<mdb-tbl bordered>
				<mdb-tbl-head>
					<tr>
						<th>Time</th>
						<th>Studio 1</th>
						<th>Studio 2</th>
						<th>Studio 3</th>
					</tr>
				</mdb-tbl-head>
				<mdb-tbl-body>
					<tr scope="row" class="deep-orange lighten-4">
						<td>1:00pm-2:30pm</td>
						<td>Beginner 1 (0-1 year experience) <br/>Nia Silao </td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>4:00pm-4:30pm</td>
						<td><strong> 4:30pm-5:00pm First Shuffles (4-5 year olds)</strong><br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>5:00pm-6:00pm</td>
						<td>Beginner 2 (2+ years)<br/> Kelsey Rose Young</td>
						<td>Intermediate 1 (4+ years)<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						
					</tr>
					<tr scope="row">
						<td>6:00pm-7:30pm</td>
						<td><mdb-btn @click.native="modal = true" outline="red">2 FIT 2 QUIT</mdb-btn>
        <mdb-modal :show="modal" @close="modal = false" cascade class="text-left">
          <mdb-modal-header class="red white-text">
            <h4 class="title">2 FIT 2 QUIT</h4>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
            <p>2 Fit 2 Quit is a stretch and strengthen class that will focus on core, upper body and lowe body strengthening, 
				while stretching to improve flexibility and promote long lean muscles.</p>
          </mdb-modal-body>
          <!-- <mdb-modal-footer>
            <mdb-btn color="secondary" @click.native="showModal = false">Close</mdb-btn>
            <mdb-btn color="primary">Save changes</mdb-btn>
          </mdb-modal-footer> -->
        </mdb-modal>
							<br/>Kelsey Rose Young</td>
						<td><strong>6:00pm-7:00pm Young Shuffles (8-10 year olds)</strong><br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
          <tr scope="row" class="deep-orange lighten-4">
						<td>7:30pm-9:00pm</td>
						<td>Intermediate 2 (5+ years) <br/>Kelsey Rose Young</td>
						<td>Beginner 1 (0-1 year experience) <br/> Denise Caston-Clark</td>
						<td>(7pm-8pm)<br/>WERQ Fitness with Erica Egrin. This class is $12.</td>
					</tr>
				</mdb-tbl-body>
			</mdb-tbl>
		</section>
        <h4>Thursday</h4>
        <section>
			<mdb-tbl bordered>
				<mdb-tbl-head>
					<tr>
						<th>Time</th>
						<th>Studio 1</th>
						<th>Studio 2</th>
						<th>Studio 3</th>
					</tr>
				</mdb-tbl-head>
				<mdb-tbl-body>
				
					<tr scope="row">
						<td>10:30am-11:30am</td>
						<td>Advanced Beginner (3+ years) <br/> Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>12:00pm-1:00pm</td>
						<td>Beginner 1 (0-1 year experience)<br/>Denise Caston-Clark</td>
						<td><strong>11:30am-12:00pm Wee Shuffles (2-3 year olds)</strong> <br/> Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>12:30pm-4:30pm</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row" class="deep-orange lighten-4">
						<td>5:00pm-6:00pm</td>
						<td>Intermediate 2 (5+ years)<br/>Denise Caston-Clark<br/>(5+ years) </td>
						<td>Beginner 2 (2+ years)<br/>Lisa Allai-Stop</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>6:00pm-7:30pm</td>
						<td><strong>6:00pm-7:00pm Young Shuffles (8-10 year olds)</strong><br/>Denise Caston-Clark</td>
						<td>Advanced Beginner (3+ years)<br/>Lisa Allai-Stop</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row" class="deep-orange lighten-4">
						<td>7:30pm-9:00pm</td>
						<td>Intermediate/Advanced Broadway Style <br/>Denise Caston-Clark </td>
						<td>Intermediate 1 (4+ years) <br/>Lisa Allai-Stop</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
				</mdb-tbl-body>
			</mdb-tbl>
		</section>
        <h4>FRIDAY</h4>
		<section>
			<mdb-tbl bordered>
				<mdb-tbl-head>
					<tr>
						<th>Time</th>
						<th>Studio 1</th>
						<th>Studio 2</th>
						<th>Studio 3</th>
					</tr>
				</mdb-tbl-head>
				<mdb-tbl-body>
					<tr scope="row" class="deep-orange lighten-4">
						<td>12:00pm-1:00pm</td>
						<td>Beginner 1 (0-1 year experience)<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>3:00pm-4:30pm</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>5:00pm-6:00pm</td>
						<td>RENTAL AVAILABLE</td>
						<td>Intermediate 1 (4+ years)<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>6:00pm-7:30pm</td>
						<td>Advanced Beginner (3+ years)<br/>Jer Vernier</td>
						<td><mdb-btn @click.native="showRock = true" outline="red">ROCKette ON Jazz</mdb-btn>
        <mdb-modal :show="showRock" @close="showRock = false" cascade class="text-left">
          <mdb-modal-header class="red white-text">
            <h4 class="title">ROCKette ON Jazz</h4>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
            <p>Learn how to dance like a Rockette from former Radio City Rockette Denise Caston-Clark</p>
          </mdb-modal-body>
         
        </mdb-modal><br/>Advanced Beginner <br/>
		Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row" class="deep-orange lighten-4">
						<td>7:30pm-9:00pm</td>
						<td>Intermediate 2 (5+ years) <br/>Jer Vernier</td>
						<td>Beginner 1 (0-1 year experience)<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
				</mdb-tbl-body>
			</mdb-tbl>
		</section>
        <h4>SATURDAY</h4>
		<section>
			<mdb-tbl bordered>
				<mdb-tbl-head>
					<tr>
						<th>Time</th>
						<th>Studio 1</th>
						<th>Studio 2</th>
						<th>Studio 3</th>
					</tr>
				</mdb-tbl-head>
				<mdb-tbl-body>
					<tr scope="row" class="deep-orange lighten-4">
						<td>11:00am-12:30pm</td>
						<td>Intermediate Jazz (no tap!)<br/>Denise Caston-Clark</td>
						<td><strong>11:00am-12:00pm <br/>8-WEEK SESSION FROM 9/14-11/2 <br/>6-7 Year-Old Tap/Jazz Combo</strong><br/>Molly Sute<hr/>
						<strong>12:00pm-12:30pm <br/>8-WEEK SESSION FROM 9/14-11/2 <br/>First Shuffles (4-5 years old)</strong><br/>Molly Sute
						</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>12:30pm-2:00pm</td>
						<td>Beginner Jazz (no tap!)<br/>Denise Caston-Clark</td>
						<td>Intermediate 1-2<br/>Molly Sute</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>2:00pm-3:30pm</td>
						<td>Beginner 1 (0-1 year experience)<br/> Lisa Allai-Stop </td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>3:30pm-5:00pm</td>
						<td>Intermediate 1<br/> Lisa Allai-Stop </td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
				</mdb-tbl-body>
			</mdb-tbl>
		</section>
		<mdb-row class="text-justify">
    <div class="align-items-center justify-content-start p-3">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
				<a href="https://dancestudio-pro.com/online/index.php?account_id=15325" target="_blank"><mdb-btn outline="red">Register for classes!</mdb-btn></a>
	</div>
	</mdb-row>
	</section>
	<section>
	<mdb-row>
    <mdb-col lg="8" class="text-justify">
    <div class="mt-5 align-items-center justify-content-start p-3 pt-5">
    <hr class="deep-orange"/>
    <a id="youth"><h3 class="grey-text big">TDD YOUTH PROGRAM</h3></a>
	</div>
	<div class="mt-5 align-items-center justify-content-start p-3">
	<h4 class="deep-orange-text big">WEE SHUFFLES</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/><strong class="big">Tuesdays or Thursdays 11:30am-12:00pm</strong> </span>
	<p class="big">2-3 year olds</p>
    <p>Fall 1: 8-week session starting the week of September 9th and ending the week of October 28th. $100</p>
	<p>Fall 2: 6-week session starting on the week of November 4th and ending the week of December 16th. $75</p>
	</div>
    <div class="mt-5 align-items-center justify-content-start p-3">
	<h4 class="deep-orange-text big">FIRST SHUFFLES</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> <strong class="big">Mondays or Wednesdays 4:30pm-5:00pm or Saturdays from 12:00pm-12:30pm</strong></span>
    <p class="big">This 8-week session is for 4-5 year-olds to discover the joy of tap dancing, learning basic steps and participating in fun interactive activities that will teach them spacial awareness and musicality. The dancers will show off what they've learned after the last class.</p>
	<p><p>Fall 1: 8-week session starting the week of September 9th and ending the week of October 28th. Saturday class will begin September 14 and go through November 2. $100</p>
	<p>Fall 2: 6-week session starting on the week of November 4th and ending the week of December 16th. $75</p>
	</div>
  <!-- <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text big">SECOND SHUFFLES</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> <strong class="big">Tuesdays 4:00pm-5:00pm</strong></span>
    <p class="big">This 8-week session is for 6-7 year-olds to discover the joy of tap dancing or continue exploring what they've already developed, learning basic steps and participating in fun interactive activities that will teach them spacial awareness and musicality. The dancers will show off what they've learned after the last class!</p>
	<p><p>Fall 1: 8-week session starting the week of September 9th and ending the week of October 28th. $120</p>
	<p>Fall 2: 6-week session starting on the week of November 4th and ending the week of December 16th. $90</p>
  </div>  -->

  <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text big">YOUNG SHUFFLES</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> <strong class="big">Wednesdays or Thursdays 6:00pm-7:00pm</strong></span>
    <p class="big">This 8-week session is for 8-10 year-olds to discover the joy of tap dancing or continue exploring what they've already developed, learning basic steps and participating in fun interactive activities that will teach them spacial awareness and musicality. The dancers will show off what they've learned after the last class!</p>
	<p>Fall 1: 8-week session starting the week of September 9th and ending the week of October 28th. $140</p>
	<p>Fall 2: 6-week session starting on the week of November 4th and ending the week of December 16th. $105</p>
  </div> 
  
	<!-- <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text">Fall schedule starts September 8th. Details coming soon!</h4>
    </div> -->
		<hr class="deep-orange"/>
  </mdb-col>
   <mdb-col lg="4" class="p-3 pt-5 text-justify">
	   <div class="align-items-center justify-content-center p-5">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
				<a href="https://dancestudio-pro.com/online/index.php?account_id=15325" target="_blank"><mdb-btn class="btn-grad">REGISTER FOR YOUTH CLASSES!</mdb-btn></a>
	</div>
	
       <img src="/static/first-second-shuffles.jpg" class="img-fluid-grow mx-auto d-block" style="max-width: 100%"/>
	    <div class="align-items-center justify-content-center p-5">
      <!-- <mdb-col size="12" class="text-center mb-5"> -->
        <a href="#schedule"><mdb-btn class="btn-grad"><mdb-icon fab icon="canadian-maple-leaf" size="2x" /><br/>VIEW FULL FALL SCHEDULE</mdb-btn></a>
        
    </div>
   </mdb-col>
	 
   </mdb-row>
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
    data() {
      return {
		showModal: false,
		modal: false,
		showRock: false,
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

</style>
