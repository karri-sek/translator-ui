<template>
  <div className="container-fluid p-0">
    <Navbar />
      <template v-if="currentRouteName !== 'register' && currentRouteName !== 'profile' && currentRouteName !== 'login'">
         <div className="container">
        <div
        className="d-flex flex-column justify-content-center align-items-center my-flex-container"
      >
        <div className="p-4 my-flex-item">
          <SearchBar /></div>
           </div>
    </div>
      </template>
      <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/searchBar";

export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {},
  components: {
    Navbar,
    SearchBar,
  },
  computed: {
   currentRouteName() {
        return this.$route.name;
    }
  }
};
</script>
<style>


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
