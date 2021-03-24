<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Translating Wesbite</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div v-if=!user.email>
          <router-link class="btn btn-light loginSpace" to="/login">Login</router-link>
           <router-link
            class="btn btn-outline-secondary my-2 my-sm-0"
            to="/register"
            >Register</router-link
          >
          </div>
          <div v-else>
            <router-link class="btn btn-light profileLink" to="/profile">Profile</router-link>
            <router-link class="btn btn-light profileLink" to="/messages">Messages</router-link>
            <button @click="logout" class="btn-lg btn">Logout</button>
         </div>
        </form>
      </div>
    </nav>
</template>
<script>
export default {
  name: "Navbar",
   data() {
    return {
     showDialog: false,
    };
  },
  methods: {
    logout:  async function () {
        this.$store.dispatch("deleteLoggedIn", {}); 
        this.$router.push({name: "logout", params: {}});
    }
  },
   computed: {
    user () {
      return this.$store.state.loggedInUser
    }
  },
};
</script>

<style scoped>
.loginSpace {
  padding-right: 10px;
}
.navbar {
  border: 1px dotted solid red;
}
</style>