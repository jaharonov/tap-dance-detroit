<template>
  <mdb-container>
      <mdb-row class="mx-auto p-3">
        <h1 class="mx-auto text-center display-4 p-3 red-text big">GALLERY</h1>
    </mdb-row>
    <!-- Grid row -->
<mdb-row>

  <!-- Grid column -->
  <mdb-col lg="6" class="mb-3">

    <img src="/static/tdd-gallery-2.png" class="img-fluid z-depth-1" alt="Responsive image">

  </mdb-col>
  <!-- Grid column -->

  <!-- Grid column -->
  <mdb-col lg="6" class="mb-3">

    <img src="/static/tdd-gallery-3.png" class="img-fluid z-depth-1"
      alt="Responsive image">

  </mdb-col>
  <!-- Grid column -->

  <!-- Grid column -->
  <mdb-col lg="6" class="mb-3">

    <img src="/static/tdd-gallery-6.png" class="img-fluid z-depth-1"
      alt="Responsive image">

  </mdb-col>
  <!-- Grid column -->

  <!-- Grid column -->
  <mdb-col lg="6" class="mb-3">

    <img src="/static/tdd-gallery-7.png" class="img-fluid z-depth-1"
      alt="Responsive image">

  </mdb-col>
  <!-- Grid column -->
    <!-- Grid column -->
  <mdb-col lg="6" class="mb-3">

    <img src="/static/tdd-gallery-8.png" class="img-fluid z-depth-1"
      alt="Responsive image">

  </mdb-col>
  <!-- Grid column -->
  <!-- Grid column -->
  <mdb-col lg="6" class="mb-3">

    <img src="/static/tdd-gallery-9.png" class="img-fluid z-depth-1"
      alt="Responsive image">

  </mdb-col>
  <!-- Grid column -->
  <!-- Grid column -->
  <mdb-col lg="6" class="mb-3">

    <img src="/static/tdd-gallery-10.png" class="img-fluid z-depth-1"
      alt="Responsive image">

  </mdb-col>
  <!-- Grid column -->
  <!-- Grid column -->
  <mdb-col lg="6" class="mb-3">

    <img src="/static/tdd-gallery-1.png" class="img-fluid z-depth-1"
      alt="Responsive image">

  </mdb-col>
  <!-- Grid column -->
</mdb-row>
<!-- Grid row -->
    
  </mdb-container>
</template>
<style>
body {
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    /* height: calc(80vh - 100px); */
    height: 60vh;
    z-index: -1;
    margin: 0;
  }
</style>
<script>
  import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
  export default {
    components: {
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>