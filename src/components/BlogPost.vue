<template>
<mdb-container>
  <div id="blog-post">
    <mdb-row>
    <h1 class="big">{{ post.data.title }}</h1>
    <h4 class="big">{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    <div v-html="post.data.body"></div>
</mdb-row>
    <mdb-row>
    <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="button">
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="button">
      {{ post.meta.next_post.title }}
    </router-link>
    </mdb-row>
  </div>
</mdb-container>
</template>
<style>
@import url(https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap);
.big {
   font-family: 'Noto Sans KR', sans-serif;
 }
#blog-post {
    padding: 50px 50px 50px 50px;
}


  /* Responsive default image width */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Responsive floating */
  @media only screen and (min-width: 720px)  {
    .butter-float-left {
      float: left;
      margin: 0px 10px 10px 0px;
    }

    .butter-float-right {
      float: right;
      margin: 0px 0px 10px 10px;
    }
  }

  /* Image caption */
  figcaption {
    font-style: italic;
    text-align: center;
    color: #ccc;
  }

  p code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    /* font-family: Menlo, Monaco, Consolas, "Courier New", monospace; */
  }

  pre {
    display: block;
    padding: 1em;
    margin: 0 0 2em;
    font-size: 1em;
    line-height: 1.4;
    word-break: break-all;
    word-wrap: break-word;
    color: #333333;
    background-color: #f5f5f5;
    font-family: Menlo, Monaco,Consolas, "Courier New", monospace;
}
</style>
<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            // console.log(res.data)
            this.post = res.data
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    created() {
      this.getPost()
    }
  }
</script>



