<template>
  <mdb-container>
      <mdb-row class="mx-auto p-3">
        <h1 class="mx-auto text-center display-4 p-3 red-text big">STAFF</h1>
    </mdb-row>
<mdb-row>
    <h3 class="mx-auto text-center p-3 grey-text big">COMING SOON!</h3>
</mdb-row>
<!-- <div id="dib-posts"></div> -->
  </mdb-container>
</template>
<style>

</style>
<script>
var dib_id = '1H47JH5P4ERQPBMJWRMA'
  
  import { mdbTbl, mdbTblHead, mdbTblBody, mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbParallax,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue';
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
    data () {
    return {
      post: null,
      error: null,
      loading: false
    }
  },
  created () {
    (function () {
        loadScript();
      function loadScript() {
        var scriptURL = 'https://dropinblog.com/js/embed.js';
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      }

    })();
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
</script>




