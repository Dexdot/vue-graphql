<template>
  <div>

    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="70" :width="7" color="primary">
            </v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>

    <v-flex xs12 text-xs-center>
      <v-carousel v-if="!loading && posts.length" v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 class="carousel__title"> {{ post.title }} </h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

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
    ...mapGetters(['posts', 'loading'])
  }
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

