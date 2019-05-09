<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR" rel="stylesheet">

  </head>
  <div id="app" class="flyout">
    <mdb-navbar id="main-navbar" light position="top" class="big red accent-3" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
        TAP DANCE DETROIT
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item exact to="/" waves>HOME</mdb-nav-item>
          <mdb-nav-item to="/about" waves>ABOUT</mdb-nav-item>
          <mdb-nav-item to="/donate" waves>DONATE</mdb-nav-item>
          <mdb-nav-item to="/faculty" waves>FACULTY</mdb-nav-item>
          <mdb-nav-item to="/gallery" waves>GALLERY</mdb-nav-item>
          <mdb-nav-item to="/schedule" waves>SCHEDULE</mdb-nav-item>
          <mdb-nav-item to="/staff" waves>STAFF</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <main :style="{marginTop: '100px'}">
      <router-view></router-view>
    </main>
    <mdb-footer light class="red accent-3">
      <p class="footer-copyright mb-0 py-3 text-center big">
        &copy; {{new Date().getFullYear()}} Copyright: <a href="https://jaharonov.com"> J. Aharonov</a>
      </p>
    </mdb-footer>
  </div>
</html>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter
  }
};

</script>

<style>
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
 .big {
   font-family: 'Noto Sans KR', sans-serif;
 }
</style>
