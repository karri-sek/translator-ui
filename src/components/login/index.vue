<template>
  <div class="container login-container">
    <br />
    <h1 class="loginHeader">Login</h1>
    <br />
    <br />
    <div class="row">
       <label> username</label>
          <input
            type="email"
            class="form-control"
            id="email"
            required
            v-model="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
    </div>
    <br/>
    <div class="row">
       <label> password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            required
            v-model="password"
            placeholder="Enter password"
          />
    </div>
    <div class="row">
      <a class="registerLink" href="/register">haven't register yet!! click here to register</a>
    </div>
    <br/>
    <div class="form-group">
          <button @click="login" class="btn btn-primary">Login</button>
        </div>
  </div>
</template>
<script>

import verifyLogin from "../../services/loginService";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login:  async function () {
      //call to backend to get the user profile
    const data = await verifyLogin(this);
    console.log(" data ", data.statusCode)
    if (data.statusCode == 200) { //checking the status of the network(api) call , 200 is ok
        localStorage.setItem('loggedInUser', JSON.stringify(data.user));
        this.$store.dispatch("userLoggedIn", { loggedInUser: data.user }); 
        this.$router.push({name: "home", params: { email: data.user.email}});
      }
    },
  },
};
</script>

<style scoped></style>
