<template>
  <div>
    <v-flex xs12 text-xs-center>
      <v-carousel v-if="posts.length" v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 class="carousel__title"> {{ post.title }} </h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </div>
</template>


<script>
import { gql } from 'apollo-boost';

export default {
  name: 'Home',
  methods: {
    handleGetCarouselPosts() {
      this.$store.dispatch('getPosts');
    }
  },
  created() {
    this.handleGetCarouselPosts();
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  }
  // apollo: {
  //   getPosts: {
  //     query: gql`
  //       query {
  //         getPosts {
  //           _id
  //           title
  //           description
  //           imageUrl
  //           categories
  //           createdDate
  //           likes
  //           } 
  //       }
  //     `,
  //     result({ data, loading }) {
  //       if (!loading) {
  //         this.posts = data.getPosts;
  //       }
  //     },
  //     error(err) {
  //       console.error(err);
  //     }
  //   }
  // }
}
</script>

<style lang="sass" scoped>
  .carousel__title
    position: absolute
    background: rgba(0, 0, 0, 0.5)
    color: #ffffff
    border-radius: 5px 5px 0 0
    padding: 0.5em
    margin: 0 auto
    bottom: 50px
    left: 0
    right: 0
</style>

