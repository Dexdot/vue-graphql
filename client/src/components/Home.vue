<template>
  <div>
    <h1>Home</h1>
    <div v-if="$apollo.loading">Loading...</div>
    <ul v-else>
      <li v-for="post in posts" :key="post._id">
        {{ post.title }}<br>
        {{ post.description }}<br>
        <img :src="post.imageUrl" :alt="post.title">
      </li>
      <v-btn>Button</v-btn>
    </ul>
  </div>
</template>


<script>
import { gql } from 'apollo-boost';

export default {
  name: 'Home',
  data: () => ({
    posts: []
  }),
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPost {
            _id
            title
            description
            imageUrl
            categories
            createdDate
            likes
            } 
        }
      `,
      result({ data, loading }) {
        if (!loading) {
          this.posts = data.getPosts;
        }
      },
      error(err) {
        console.error(err);
      }
    }
  }
}
</script>
