<template>
  <div class="movieViewer">
   <question :questionText="question" :category="category"/><br/>
    <video-player class="video-player-box"
                 ref="videoPlayer"
                 type= "video/mp4"
                 :options="playerOptions"
                 :playsinline="true"
                ></video-player>
  </div>
</template>

<script>

import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
import { storage } from "../main";
import { logUser } from '../utils/helper';

import Question from './Question';
export default{
    name:'movieViewer',
    components:{
      videoPlayer,
      Question
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },

    data:()=> ({
      selectedMovie:"",
      question:"",
      category:"",
        playerOptions: {
          // videojs options
          muted: false,
          autoplay: true,
          language: 'en',
          sources: [{
            type: "video/mp4",
            src: ""
          }]
        }
    }),
    beforeRouteEnter(to, from, next) {
   next(vm =>{
     vm.getMovie(to.params.id,to.query.item)
   })},
     mounted(){
        this.getMovie(this.$route.params.id,this.$route.query.item);
    },
    
    methods:{   
      
     async getMovie(movieName,questionDetails){
      
      this.selectedMovie = await storage.ref(`/videos/${movieName}.mp4`).getDownloadURL();
      this.playerOptions.sources[0].src=this.selectedMovie;
      this.question = questionDetails.question;
      this.category = questionDetails.category;
      logUser(`clicked on question ${questionDetails.question}`);
      logUser(`watching movie ${movieName}`);
     }
    },
    beforeDestroy(){
      let viewRatePercentage = (this.player.currentTime()/this.player.duration())*100;
      this.$gtag.event('views_movie',{movieName:this.$route.params.id,viewRate:viewRatePercentage.toFixed(2)});
      console.log(viewRatePercentage.toFixed(2));
    }

}
</script>

<style>
.movieViewer{
   width:100%;
}
.video-js{
    width: 100% !important;
  
}
.video-player.video-player-box{
   height:100%;
  width:100%;
  
}
video {
  /* override other styles to make responsive */
  width: 100% !important;
  height:100%;
}
</style>
