<template>
  <div class="container">
   
    <div class="col-sm-9 profileContainer">
          <div v-if="showAlert" class="row alert alert-success" role="alert">
                Thanks!!! your profile has been updated
            </div>
          <div class="row justify-content-md-center">
              <div class="pull-center"><h3>{{ loggedInUser.name }}</h3></div>
          </div>
    <div class="row justify-content-md-center profilePageImage">
          <img
            :src="imageURL"
            class="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <input v-on:change="handleFileUpload()" id="" ref="file" type="file" class="chooseFile" />
     </div>
     <br/>

  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control" id="validationServer01" v-model="loggedInUser.firstName">
      
    </div>
    <div class="col-md-4 mb-3">
      <label for="lastName">Last name</label>
      <input type="text" class="form-control" id="lastName" v-model="loggedInUser.lastName">
    </div>
    <div class="col-md-4 mb-3">
      <label for="qualification">Qualification</label>
      <input type="text" class="form-control" id="qualification" v-model="loggedInUser.qualification">
    </div>
   
  </div>
  
  <div class="form-row">
     <div class="col-md-6 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <input type="text" class="form-control" id="userName" v-model="loggedInUser.email" placeholder="Username">
      </div>
    </div>
    
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" class="form-control" id="city" v-model="loggedInUser.city" placeholder="City">
    </div>
  </div>
 
    <div  v-if ="loggedInUser.userType === 'translator'" class="form-row">
     <div class="col-md-12 mb-3">
      <label for="validationServerUsername">Languages</label>
      <div class="input-group">
        <textarea class="form-control" id="languages" v-model="loggedInUser.languages" placeholder="languages"></textarea>
      </div>
    </div>
  </div>
  <button class="btn btn-primary" @click="updateProfile" >Update</button>
</div>
  </div>
</template>

<script>
import {uploadProfileImage, updateUserProfileWithImageURL, updateProfileLanguages} from "@/services/profileService";
import { mapState } from 'vuex';

export default {
  name: "profile",
  data() {
  let user;
   if(localStorage.getItem('loggedInUser')){
      user = JSON.parse(localStorage.getItem('loggedInUser'));
    }
  return {
      showAlert: false,
      file: '',
      loggedInUser:user,
      imageURL:user.profileURL,
      enableEdit: false 
    };
  },
  mounted() {
    
    },
  
  methods: {
  handleFileUpload: async function(){
    this.file = this.$refs.file.files[0];
    const re  = await uploadProfileImage(this.file, this.loggedInUser.email)
    this.imageURL=re.fileUrl;
    await updateUserProfileWithImageURL(this.loggedInUser.email, this.imageURL);
  },
  enableEditProfile: async function (){
    this.enableEdit =    !this.enableEdit;
  },
  updateProfile: async function () {
    this.enableEdit =   false;
     const response = await updateProfileLanguages(
       this.loggedInUser.languages,
       this.loggedInUser.qualification,
       this.loggedInUser.email,
       this.loggedInUser.firstName,
       this.loggedInUser.lastName,
       this.loggedInUser.city,
     );
      console.log("response ", response.user)
      localStorage.setItem('loggedInUser', JSON.stringify(response.user));
      this.$store.dispatch("userLoggedIn", { loggedInUser: response.user }); 
      this.showAlert = true;
  }
  },
  computed: {
    ...mapState(['loggedInUser'])
  },
  
};
</script>

<style scoped></style>

