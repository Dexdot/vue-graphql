<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="post in getPosts" :key="post._id">
        {{ post.title }}
        {{ post.imageUrl }}
        {{ post.description }}
      </li>
      <v-btn @click="showPosts">Show posts</v-btn>
    </ul>
  </div>
</template>


<script>
import { gql } from 'apollo-boost';

export default {
  name: 'Home',
  methods: {
    showPosts() {
      // eslint-disable-next-line
      console.log(this.getPosts);
    }
  },
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            description
            imageUrl
            categories
            createdDate
            likes
          }
        }
      `
    }
  }
}
</script>
