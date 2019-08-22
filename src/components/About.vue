<template>
  <mdb-container>
    <mdb-row class="mx-auto pt-2">
        <h1 class="mx-auto text-center display-4 p-3 red-text big">ABOUT</h1>
    </mdb-row>
    <mdb-row class="mx-auto pt-5">
      <mdb-col lg="4" class="pt-4">
          <img src="/static/denise_about.jpg" class="img-fluid-grow mx-auto d-block" style="max-width: 100%"/>
      </mdb-col>
      <mdb-col lg="8" class="text-justify pt-3">
        
          <p class="pt-3">Founded by former Radio City Rockette Denise Caston-Clark, Tap Dance Detroit offers daily drop-in classes for all levels of adults from beginners to working professionals. We also offer jazz and other specialty fitness. Stop by any time and take classes from our daily schedule.</p>

<p>We offer a youth tap program dedicated to young movers 2-10 years old, running in 6-8 week sessions to allow greater flexibility. </p>

<p>Classes at Tap Dance Detroit are taught by professional tap dancers and tap dance educators fully committed to each individual's development, training and enjoyment of the art form.</p>

<p>The Caston-Clark Tap Dance Foundation is dedicated to preserving and advancing the art form of tap dance through education and performances. 
</p>

</mdb-col>
    </mdb-row>
    
  </mdb-container>
</template>

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
