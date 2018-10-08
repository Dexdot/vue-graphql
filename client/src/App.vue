<template>
  <v-app>

    <!-- Side Nav -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Nav Links -->
      <v-list>

        <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
      <!-- ./Side Nav Links -->

    </v-navigation-drawer>
    <!-- ./Side Nav -->

    <!-- Header -->
    <v-toolbar fixed dark color="primary">

      <!-- Burger -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>

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
        <transition name="fade">
          <router-view />
        </transition>
      </v-container>
    </main>
    <!-- ./App Content -->

  </v-app>
</template>


<script>
export default {
  name: 'App',
  data: () => ({
    sideNav: false
  }),
  computed: {
    horizontalNavItems: () => [
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'},
        {icon: 'create', title: 'Sign Up', link: '/signup'}
      ],
    sideNavItems: () => [
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'},
        {icon: 'create', title: 'Sign Up', link: '/signup'}
      ]
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
</script>

<style lang="sass">
  a.router-link-active
    color: #ffffff
    text-decoration: none

  .fade-enter-active,
  .fade-leave-active
    transition: opacity 0.25s

  .fade-enter,
  .fade-leave-active
    opacity: 0

  .fade-enter-active
    transition-delay: 0.25s
</style>

