<template>
<mdb-container>
<mdb-row class="mx-auto p-5">
  <div id="blog-home">
      <h1 class="big">{{ page_title }}</h1>
      <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
      <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
        <router-link :to="'/blog/' + post.slug">
          <article class="media">
            <figure>
              <!-- Bind results using a ':' -->
              <!-- Use a v-if/else if their is a featured_image -->
              <!-- <img v-if="post.featured_image" :src="post.featured_image" alt="">
              <img v-else src="http://via.placeholder.com/250x250" alt=""> -->
            </figure>
            <!-- <p>{{ post.published }}</p> -->
            <h4 class="big">{{ post.title }} {{ post.published | formatDate }}</h4>
            
          </article>
        </router-link>
      </div>
  </div>
  </mdb-row>
  </mdb-container>
</template>
<style>
@import url(https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap);
#blog-home {
    padding: 50px 50px 50px 50px;
} 

.big {
   font-family: 'Noto Sans KR', sans-serif;
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
    name: 'blog-home',
    data() {
      return {
        page_title: 'Tap Dance Detroit Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
          // console.log(res.data)
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
  }
</script>