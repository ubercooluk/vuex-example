<style scoped>
.row {
  display: flex;
  justify-content:flex-start;
  flex-direction:row;
  width:99%;
  padding:5px;
 
}

.addcontainer {
  width: 300px;
}
.header {
    display: flex;
    justify-content:flex-start;
    flex-direction:row;
    width:99%;
    padding:5px;
    font-weight:bold;
    background-color:#e3e3e3;
    color:#fff;
    height:48px;
    line-height: 48px; 
}
.row > div , .header > div{
  width :19%;
  text-align:left;
  word-wrap: break-word;
  color :#333300;
}

.row:nth-of-type(odd) {
background-color:#DAF7A6;

}
.row:nth-of-type(even) {
background-color:#FFFF99;

}
    
.link {
  text-decoration:underline;
  color:#000FFF;
  cursor:pointer;
}
</style>

<template>

<div>
 <h2>Users</h2>
 
 
<div class="container">
<div  class="addcontainer">

<div class="row">
<div>Name</div><div><input type="text" v-model="username" /></div>
</div>

<div class="row">
<div>Email</div><div><input type="email" v-model="email" /></div>
</div>

<div class="row">
<div>Phone</div><div><input type="text" v-model="phone" /></div>
</div>

<div class="row">
<div>website</div><div><input type="text" v-model="website" /></div>
</div>



<button v-on:click="addUserInput">Add</button>

</div>


<div style="width:100%">
 <div class="header">
   <div>Name</div>
   <div>Email</div>
   <div>Phone</div>
   <div>Website</div>
 </div>

  <div v-for="(user,index) in users" class="row" v-bind:key=user.id>
      <div> {{ user.name }} </div>
      <div> <a :href='"mailto:"+user.email'>{{ user.email }}</a> </div>
      <div> {{ user.phone }} </div>      
      <div> {{ user.website }} </div>
      <span v-on:click="removeUser(index)" class="link">delete</span> 
  </div>
</div>
</div>

<p>Total users in store : <strong>{{this.totalUsers}}</strong></p>
</div>
</template>

<script>
import UserApi from '../services/UserApi'
import { mapMutations, mapState, mapGetters} from 'vuex'
export default {
  name: 'Usercomponent',
 data() {                                     // Add this:
    return {
      username : '',
      phone:'',
      email:'',
      website:'',
     
    }
  },
  computed: {
    ...mapState([
      'users'
      
    ]),
      ...mapGetters([
        'maxId',
        'totalUsers'
      ])
      
  },
  methods:{
    
    addUserInput(){
      if(!this.username) return;
      this.addUser([{
            "id": this.maxId,
            "name": this.username,
            "phone":this.phone,
            "email":this.email,
            "website":this.website,
      }])
    
      this.username = ''
      this.phone = ''
      this.email = ''
      this.website = ''
    },
    removeUser(id){
      this.REMOVE_USER(id)
    },
    ...mapMutations([
      'ADD_USER',
      'REMOVE_USER',
    ]),
    addUser:function(data){
      this.ADD_USER(data)
    }
  },
  created() {
    UserApi.getUsers().then(users => {
      
      this.addUser(users);
    })
    .catch()
    .finally(() => {

    })
    
  }
  
}
</script>

