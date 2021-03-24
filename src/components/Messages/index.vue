<template>
  <div class="container messageContainer">
       <div class="col-sm-3 profileContainer">
         <div v-for="(message) in loggedInUser.messages" v-bind:key="message">
           <button class="chatUser" @click="selectUser(message.fromUserEmail)">{{message.fromUserEmail}}</button>
         </div>
       </div>
       <div class="col-sm-9 profileContainer">
         <div v-for="(message) in loggedInUser.messages" v-bind:key="message">
           <div v-if="message.fromUserEmail === selectedUser">
              <div class="message" v-for="(m,index) in message.message" v-bind:key="index">
                {{m}}
                <br/>
                </div>
           </div>
         </div>
         <textarea class="textArea_message" v-model="replyMessage" placeholder="Type your reply here">  </textarea>
         <br/>
         <button class="btn btn-primary" @click="reply">reply</button>
       </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {sendMessageToTranslator} from "@/services/messageService";

export default {
  name: "Messages",
  data() {
  
  return {
      selectedUser: undefined,
      replyMessage: undefined
    };
  },
  mounted() {
    
    },
  
  methods: {
    selectUser: function(user){
      this.selectedUser = user;
    },
    reply: async function() {
      //(to user, from user, replyMessage)
      await sendMessageToTranslator(this.selectedUser, this.loggedInUser, this.replyMessage);
      await sendMessageToTranslator(this.loggedInUser, this.selectedUser, this.replyMessage);
       this.loggedInUser.messages.map(obj=>{
         if(obj.fromUserEmail === this.selectedUser){
           obj.message.push(this.replyMessage);
         }
       });
       this.replyMessage = '';
    }
  },
  computed: {
    ...mapState(['loggedInUser'])
  },
  
};
</script>

<style scoped></style>

