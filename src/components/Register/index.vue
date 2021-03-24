<template>
  <div class="container registerContainer">
    <h1>Register</h1>
    <div class="row">
    <div class="custom-control custom-radio custom-control-inline">
          <label><input  v-model="userType" type="radio" name="userType" autocomplete="off" v-bind:value="'translator'" checked /> I am translator</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <label><input type="radio" v-model="userType" name="userType" v-bind:value="'customer'" /> I am looking for a translator</label>
        </div>
        <br/>
    <br />
    </div> 
    <div class="row">
      <div class="col-md-5"> <label>First Name</label></div>
      <div class="col-md-7">
          <input
            type="text"
            class="form-control"
            id="firstName"
            v-model="firstName"
            required
            placeholder="First Name"
          />
      </div>
    </div>
    <br>
    <div class="row">
       <div class="col-md-5"> <label>Last Name</label></div>
       <div class="col-md-7">
           <input
            type="text"
            class="form-control"
            id="lastName"
            v-model="lastName"
            required
            placeholder="Last Name"
          />
          </div>
        </div>
        <br/>
        <div class="row">
        <div class="col-md-5">Email</div>
       <div class="col-md-7">
        <input
            type="email"
            class="form-control"
            id="email"
            required
            v-model="email"
            placeholder="Enter email address"
          />
        </div>
        </div>
        <br>
        <div class="row">
           <div class="col-md-5"><label>Password</label></div>
           <div class="col-md-7">
          <input
            type="password"
            class="form-control"
            id="password"
            required
            v-model="password"
            placeholder="Enter Password"
          />
          </div>
          <div
            v-if="password.length > 1 && password.length < 6"
            class="text-danger"
          >
            Password length should be greater than 6
          </div>
        </div>
        <br>
        <div class="row">
           <div class="col-md-5"><label>Confirm password</label></div>
          <div class="col-md-7">
          <input
            type="password"
            class="form-control"
            id="re-enterPassword"
            required
            v-model="reenterpassword"
            placeholder="Re-enter password"
          />
          </div>
          </div>
        <br />
        <div class="row">
        <div class="col-md-12 text-danger" >
        {{errors.error}}
        </div>
        </div>
        <div class="row">
        <button @click="register" type="button" class="btn-lg btn-primary">Register</button>
        </div>
      </div>
</template>

<script>
import registerUser from "../../services/registrationService";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      reenterpassword: "",
      userType: "translator",
      fullName: "",
      firstName: '',
      lastName: '',
      errors: {}
    };
  },
  methods: {
    validate: async function() {
      console.log(" validating ", this.email)
      if(this.firstName  === ''|| this.lastName === '' || this.email === '' || this.reenterpassword === ''){
        this.errors = {"error": 'please fill all the details'}
      return "errors";
      } else if(this.password !== this.reenterpassword){
        this.errors = {"error": 'passwords not matched, please correct'}
      }else{
        this.errors = {};
        return "good";
      }
    },
    register: async function () {
      const response = await this.validate();
      console.log( " response ", response);
      if(response === 'good'){
      const data = await registerUser(this);
      if (data.statusCode == 200) {
         this.$router.push({name: "home", params: { email: data.user.email}});
      }
      }
    },
  },
};
</script>

<style scoped></style>
