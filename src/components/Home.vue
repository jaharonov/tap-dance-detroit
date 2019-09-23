<template>
  <mdb-container fluid>
    <mdb-row class="align-items-center p-5">
      <mdb-col size="6" class="text-center p-3 img-fluid-grow mx-auto">
        <mdb-carousel :interval="8000">
    <mdb-carousel-item img src="/static/tdd_home_1.jpg" alt="First slide" />
    <mdb-carousel-item img src="/static/tdd_home_2.jpg" alt="Second slide" />
  </mdb-carousel>
      </mdb-col>
      <mdb-col size="6" class="text-center mb-5">
        <img src="/static/tdd_logo_trans_high.png" class="mx-auto d-block view pb-2" style="max-height: 15rem;"/><br/>
        <a href="https://www.facebook.com/tapdancedetroit/" class="social"><img src="/static/facebook-logo.png" class="p-2 social"/></a>
        <a href="https://www.instagram.com/tapdancedetroit/" class="social"><img src="/static/instagram-logo.png" class="p-2 social"/></a>
      </mdb-col>
    </mdb-row>
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
    <mdb-row class="mt-5 justify-content-center pl-5 pr-5">
	<h4 class="deep-orange-text big">FALL SPECIAL: 2 weeks of unlimited classes for $29.99 if purchased by Friday, 9/27</h4><br/>
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
  </mdb-row>
    <mdb-row class="mx-auto pt-3">
      <mdb-col lg="2">
          
      </mdb-col>
      <mdb-col lg="4" class="pt-1">
          <img src="/static/beatles-on-tap-show.png" class="img-fluid-grow mx-auto d-block" style="max-width: 100%"/>
          <div class="text-center"><a href="https://www.ticketweb.com/event/beatles-on-tap-the-magic-bag-tickets/9815475?pl=magicbag" target="_blank"><mdb-btn class="btn-grad">Tickets</mdb-btn></a></div>
      </mdb-col>
      <mdb-col lg="4" class="justify-content-center align-items-right">
          <img src="/static/women-in-tap.png" class="img-fluid-grow mx-auto d-block" style="max-width: 100%"/>
          <div class="text-center"><a href="https://www.tapdancedetroit.org/#/tddpresents" target="_blank"><mdb-btn class="btn-grad">Register</mdb-btn></a></div>
</mdb-col>
<mdb-col lg="2">
      </mdb-col>
    </mdb-row>
    <!-- <mdb-row class="mx-auto">
        <img src="/static/tdd_logo_trans_high.png" class="mx-auto d-block view" style="max-height: 15rem;"/>
    </mdb-row> -->
    <section class="logo pb-5">
    <!-- <section class="logo pb-5"> -->
    
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
import { mdbTbl, mdbTblHead, mdbTblBody, mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbParallax,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbCarousel, mdbCarouselItem } from 'mdbvue';
  export default {
    name: 'AppPage',
    components: {
      mdbTbl,
      mdbCarousel,
      mdbCarouselItem,
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
        showModal: false
      };
    }
  }
</script>
//     },
//     created () {
//     (function () {
      
//       if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//           ShopifyBuyInit();
//         } else {
//           loadScript();

//         }
//       } else {
//         loadScript();
//       }

//       function loadScript() {
//         var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//         var script = document.createElement('script');
//         script.async = true;
//         script.src = scriptURL;
//         (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//         script.onload = ShopifyBuyInit;
//       }

//       function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//           domain: 'overtaps.myshopify.com',
//           storefrontAccessToken: '244fc4d27a412190862e1ff0232cb6d0',
//         });

//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//           ui.createComponent('collection', {
//             id: [3959260741743],
//             node: document.getElementById('product-component-e7de69b923f'),
//             moneyFormat: '%24%7B%7Bamount%7D%7D',
//             options: {
// "product": {
//     "variantId": "all",
//     "width": "240px",
//     "contents": {
//       "imgWithCarousel": false,
//       "variantTitle": false,
//       "description": false,
//       "buttonWithQuantity": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (max-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "10",
//           "margin-right": "10",
//           "margin-bottom": "50px",

//         }
//       },
//       "button": {
//         "background-color": "#ff5252",
//         "font-family": "Noto Sans KR, sans-serif",
//         ":hover": {
//           "background-color": "#ff1744"
//         },
//         ":focus": {
//           "background-color": "#ff1744"
//         },
//       },
//       "variantTitle": {
//         "font-family": "Noto Sans KR, sans-serif"
//       },
//       "title": {
//         "font-family": "Noto Sans KR, sans-serif"
//       },
//       "description": {
//         "font-family": "Noto Sans KR, sans-serif"
//       },
//       "price": {
//         "font-family": "Noto Sans KR, sans-serif"
//       },
//       "compareAt": {
//         "font-size": "12px",
//         "font-family": "Noto Sans KR, sans-serif"
//       }
//     },
//     "googleFonts": [
//       "Roboto Condensed",
//       "Roboto Condensed",
//       "Roboto Condensed",
//       "Roboto Condensed",
//       "Roboto Condensed",
//       "Roboto Condensed"
//     ]
//   },
//   "cart": {
//     "contents": {
//       "button": true,
//       "note": true
//     },
//     "text": {
//       "notice": 'Shipping and discount codes are added at checkout.',
//       "noteDescription": 'Student Name'
//     },
//     "styles": {
//       "button": {
//         "background-color": "#ff5252",
//         "font-family": "Noto Sans KR, sans-serif",
//         ":hover": {
//           "background-color": "#ff1744"
//         },
//         ":focus": {
//           "background-color": "ff1744"
//         },
//       },
//       "footer": {
//         "background-color": "#ffffff"
//       }
//     },
//     "googleFonts": [
//       "Roboto Condensed"
//     ]
//   },
//   "modalProduct": {
//     "contents": {
//       "img": false,
//       "imgWithCarousel": true,
//       "variantTitle": false,
//       "buttonWithQuantity": true,
//       "button": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0px",
//           "margin-bottom": "0px"
//         }
//       },
//       "button": {
//         "background-color": "#ff5252",
//         "font-family": "Noto Sans KR, sans-serif",
//         ":hover": {
//           "background-color": "#ff1744"
//         },
//         ":focus": {
//           "background-color": "#da611f"
//         },
//       },
//       "variantTitle": {
//         "font-family": "Noto Sans KR, sans-serif",
//       },
//       "title": {
//         "font-family": "Noto Sans KR, sans-serif"
//       },
//       "description": {
//         "font-family": "Noto Sans KR, sans-serif",
//       },
//       "price": {
//         "font-family": "Noto Sans KR, sans-serif",
//       },
//       "compareAt": {
//         "font-family": "Noto Sans KR, sans-serif",
//       }
//     },
//     "googleFonts": [
//       "Roboto Condensed",
//       "Roboto Condensed",
//       "Roboto Condensed",
//       "Roboto Condensed",
//       "Roboto Condensed",
//       "Roboto Condensed"
//     ]
//   },
//   "toggle": {
//     "styles": {
//       "toggle": {
//         "font-family": "Noto Sans KR, sans-serif",
//         "background-color": "#ff5252",
//         ":hover": {
//           "background-color": "#ff1744"
//         },
//         ":focus": {
//           "background-color": "#ff1744"
//         },
//       }
//     },
//     "googleFonts": [
//       "Roboto Condensed"
//     ]
//   },
//   "option": {
//     "styles": {
//       "label": {
//         "font-family": "Noto Sans KR, sans-serif",
//       },
//       "select": {
//         "font-family": "Noto Sans KR, sans-serif",
//       }
//     },
//     "googleFonts": [
//       "Roboto Condensed",
//       "Roboto Condensed"
//     ]
//   },
//   "productSet": {
//     "styles": {
//       "products": {
//         "@media (min-width: 601px)": {
//           "margin-left": "-20px"
//         }
//       }
//     }
//   }
// }
//           });
//         });
//       }
//     })();
//     this.fetchData()
//   },
//   watch: {
    // call again the method if the route changes
  //   '$route': 'fetchData'
  // },
  // methods: {
  //   fetchData () {
  //     this.error = this.post = null
  //     this.loading = true
  //     // replace `getPost` with your data fetching util / API wrapper
  //     getPost(this.$route.params.id, (err, post) => {
  //       this.loading = false
  //       if (err) {
  //         this.error = err.toString()
  //       } else {
  //         this.post = post
  //       }
  //     })
  //   }
  // }
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

.btn-grad {
  background-image: linear-gradient(to right, #ff5252 100%);
  
};

.btn-grad:hover { background-position: right center; }

.social:hover {
    cursor: pointer;
}
</style>