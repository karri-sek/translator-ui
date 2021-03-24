<template>

<div class="container results">
<!-- Modal -->
<div v-if="showMessagePanel">
<div  class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Compose message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <textarea ref= "messageArea" class="textArea_message" v-model="message"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="sendMessage">Send Message</button>
      </div>
    </div>
  </div>
</div>
</div>
  <div v-for="(translator) in translatorResults" v-bind:key="translator.name">
    <div class="card rcard" >
      <h5 class="card-title profileHeaderRow">{{ translator.name }}</h5>
      <hr>
        <img class="rprofileImage" :src="imageSource(translator)" alt="profile image" />
        <div class="card-body">
           <p class="card-text">
            {{ translator.languages.join(',') }}
          </p> <p class="card-text"> location: {{translator.location}} </p>
           <p class="card-text"> qualification: {{translator.qualification}} </p>
            <br>
             <button  v-if="isLoggedIn"  data-toggle="modal" data-target="#exampleModal" type="button" @click="enableMessagePanel(translator.email)" class="btn btn-info">click to send a message</button>
            <button v-if="!isLoggedIn" type="button" @click="connect" class="btn btn-info">connect</button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
import {isEmpty} from '../../utils/utils';
import {sendMessageToTranslator} from "@/services/messageService";
export default {
  name: "TranslatorResults",
  data() {
    return{
      showMessagePanel: false,
      message: undefined,
      toUser: {},
      fromUser: {},
     
    }
  },
  computed: {
    ...mapState(["translatorResults", "loggedInUser"]),
    isLoggedIn: function() {
      return !isEmpty(this.loggedInUser.email);
    }
    
  },
  methods: {
    imageSource: function(translator){
      return  (translator.profileURL === '' || translator.profileURL === undefined)? 'https://firebasestorage.googleapis.com/v0/b/skyline-f1511.appspot.com/o/default-avatar.jpg?alt=media&token=bde3c5ba-98eb-44ea-8aee-0f4df4aabbd8':translator.profileURL;
    },
   
    sendMessage: async function(){
        const re  = await sendMessageToTranslator(this.toUser, this.fromUser, this.message);
        if(re.statusCode === 200){
           this.showMessagePanel = !this.showMessagePanel

        }


    },
    connect: function () {
               this.$router.push({name: "login"});
    },
    enableMessagePanel: function(email) {
      this.toUser = { email:email}
      this.fromUser= this.loggedInUser;
      this.showMessagePanel = !this.showMessagePanel
    
    }
  }
};
</script>
