<template>
<mdb-container>
  <mdb-row class="mt-5 align-items-center justify-content-start">
    <h1 class="mx-auto text-center display-4 red-text big">SCHEDULE</h1>
  </mdb-row>
    <mdb-row>
    <mdb-col lg="8" class="p-3 text-justify">
    <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text">FIRST SHUFFLES</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    <p><strong>Tuesdays starting on 7/9 for 4 weeks: <br/>
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> July 9th, 16th, 23rd, and 30th</span></strong></p>
    <p>This 4-week session is for 4-5 year-olds to discover the joy of tap dancing, learning basic steps and participating in fun interactive activities that will teach them spacial awareness and musicality. The dancers will show off what they've learned after the last class.</p>
    
  </div>
  <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text">SECOND SHUFFLES</h4>
    </div>
    <div class="align-items-center justify-content-start pl-3">
    <p><strong>Thursdays starting on 7/11 for 4 weeks:<br/> 
    <span class="red-text"><mdb-icon far icon="calendar-alt" size="2x"/> July 11th, 18th, 25th, and August 1st</span></strong></p>
    <p>This 4-week session is for 6-7 year-olds to discover the joy of tap dancing or continue exploring what they've already developed, learning basic steps and participating in fun interactive activities that will teach them spacial awareness and musicality. The dancers will show off what they've learned after the last class!</p>
    
  </div> 
  <div class="mt-5 align-items-center justify-content-start p-3">
    <h4 class="deep-orange-text">PRICING</h4>
    </div>
  <div class="align-items-center justify-content-start pl-3">
    <ul>
    <li>single class - $18</li>
    <li>5-class package - $87.50</li>   
    <li>10-class package - $170</li>
    <li>First Shuffles + Second Shuffles 4-week session - $50</li>
    </ul>
    <mdb-row class="mt-5 justify-content-start">
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
<form method="POST" action="https://formspree.io/info@tapdancedetroit.org" target="_blank">
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
    </mdb-row>
    
  </div>
  </mdb-col>
   <mdb-col lg="4" class="p-3 pt-5 text-justify">
       <img src="/static/first-second-shuffles.jpg" class="img-fluid-grow mx-auto d-block" style="max-width: 100%"/>
   </mdb-col>
   </mdb-row>
  <hr class="pt-3"/>
  <mdb-row class="mt-5 justify-content-end p-2">
    <a href="https://dancestudio-pro.com/online/index.php?account_id=15325"><mdb-btn outline="red">REGISTER FOR CLASSES!</mdb-btn></a>
  </mdb-row>
  
<section class="demo-section">
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
						<td>1:00pm-2:00pm</td>
						<td>Beginner 1 (1+ yrs)<br/>Denise Caston-Clark</td>
						<td></td>
						<td></td>
					</tr>
					<tr scope="row">
						<td>4:00pm-5:30pm</td>
						<td>Intermediate 1 (4+ yrs) <br/>Paige Baidel</td>
						<td>Beginner 2 (2+ yrs<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>5:30pm-7:00pm</td>
						<td>Advanced Beginner (3+ years)<br/>Paige Baidel</td>
						<td>Advanced <br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>7:00pm-8:30pm</td>
						<td>Beginner 1 (1+ yrs) <br/>Paige Baidel</td>
						<td>Intermediate 2 (5+ years) <br/> Denise Caston-Clark</td>
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
						<td>12:00pm-12:45pm</td>
						<td>First Shuffles - Ages 4-5 <br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>1:00pm-2:15pm</td>
						<td>Beginner 1 (1+ yrs) <br/> Jamie Hetherington</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>2:15pm-3:30pm</td>
						<td>Advanced Beginner (3+ years)<br/>Jamie Hetherington</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>4:00pm-5:30pm</td>
						<td>Advanced <br/>Denise Caston-Clark</td>
						<td>ABSOLUTE BEGINNER<br/> workshop with Nia Silao</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row" class="deep-orange lighten-4">
						<td>5:30pm-7:00pm</td>
						<td>Intermediate 2 (5+ years) <br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>7:00pm-8:30pm</td>
						<td>Intermediate 1-2 Broadway Style <br/>Denise Caston-Clark </td>
						<td>RENTAL AVAILABLE</td>
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
						<td>1:00pm-2:00pm</td>
						<td>Advanced Beginner (3+ years) <br/>Denise Caston-Clark</td>
						<td></td>
						<td></td>
					</tr>
					<tr scope="row">
						<td>4:00pm-5:30pm</td>
						<td>Intermediate 1 (4+ yrs) <br/>Kelsey Rose Young</td>
						<td>Beginner 2 (2+ yrs<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>5:30pm-7:00pm</td>
						<td>Advanced Beginner (3+ years)<br/>Kelsey Rose Young</td>
						<td>Advanced <br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>7:00pm-8:30pm</td>
						<td>Beginner 1 (1+ yrs) <br/>Kelsey Rose Young</td>
						<td>Intermediate 2 (5+ years) <br/> Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
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
					<tr scope="row" class="deep-orange lighten-4">
						<td>12:00pm-12:45pm</td>
						<td>Second Shuffles - Ages 6-7</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row">
						<td>1:00pm-2:15pm</td>
						<td>Beginner 1 (1+ yrs) <br/> Jamie Hetherington</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>2:15pm-3:30pm</td>
						<td>Advanced Beginner (3+ years)<br/>Jamie Hetherington</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>4:00pm-5:30pm</td>
						<td>Advanced <br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row" class="deep-orange lighten-4">
						<td>5:30pm-7:00pm</td>
						<td>Intermediate 1-2 Broadway Style <br/>Denise Caston-Clark </td>
						<td>RENTAL AVAILABLE</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>7:00pm-8:30pm</td>
						<td>Intermediate 1-2 Broadway Style <br/>Denise Caston-Clark </td>
						<td>RENTAL AVAILABLE</td>
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
						<td>1:00pm-2:00pm</td>
						<td>Advanced Beginner (3+ years) <br/>Denise Caston-Clark</td>
						<td></td>
						<td></td>
					</tr>
					<tr scope="row">
						<td>4:00pm-5:30pm</td>
						<td>Intermediate 1 (4+ yrs) <br/>Jer Vernier</td>
						<td>Beginner 2 (2+ yrs<br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
					<tr scope="row" class="deep-orange lighten-4">
						<td>5:30pm-7:00pm</td>
						<td>Advanced Beginner (3+ years)<br/>Jer Vernier</td>
						<td>Advanced <br/>Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
                    <tr scope="row">
						<td>7:00pm-8:30pm</td>
						<td>Beginner 1 (1+ yrs) <br/>Jer Vernier</td>
						<td>Intermediate 2 (5+ years) <br/> Denise Caston-Clark</td>
						<td>RENTAL AVAILABLE</td>
					</tr>
				</mdb-tbl-body>
			</mdb-tbl>
		</section>
	</section>
</mdb-container>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody, mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbParallax,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue';
  export default {
    name: 'AppPage',
    components: {
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
</style>
