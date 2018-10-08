<template>
  <v-app>

    <!-- Header -->
    <v-toolbar fixed dark color="primary">

      <!-- Burger -->
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <!-- Title -->
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/">VueShare</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search input -->
      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="success" single-line-hide-details></v-text-field>

      <v-spacer></v-spacer>

      <!-- Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <!-- ./Header -->

    <!-- App Content -->
    <main>
      <v-container class="mt-5">
        <router-view />
      </v-container>
    </main>
    <!-- ./App Content -->

  </v-app>
</template>


<script>
export default {
  name: 'App',
  computed: {
    horizontalNavItems: () => [
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'},
        {icon: 'create', title: 'Sign Up', link: '/signup'}
      ]
  }
}
</script>

<style lang="sass">
a.router-link-active
  color: #ffffff
  text-decoration: none
</style>

