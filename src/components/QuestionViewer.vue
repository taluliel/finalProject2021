<template>
  <div class="questions">
    <ul>
      <li
        v-for="(item, index) in questions"
        :key="index"
        v-on:click="goToMovie(item.movieName,item.category,item.questionText)">
      <question :questionText="item.questionText" :category="item.category"/>
    
        <!-- <div class="question-wrapper">
          <div class="question-icon">
           <img :src="base_url+'assets/icon/'+item.category+'.png'" class="ca" />   
             
           </div>
          <div class="question">
            {{ item.questionText }}
          </div>
        </div>
   -->
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "../main";
import EventBus from "../eventBus";
import {logUser} from '../utils/helper';
import  Question  from './Question';

export default {
  name: "questions",
  components:{Question},
  data() {
    return {
      featureID: 1,
      questions: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchQuestions(to.params.id);
    });
  },
  mounted() {
    let vm1 = this;
    logUser(`Entering feature ${vm1.featureID} &  Checking the questions`);
    EventBus.$on("locale_changed", function (lang) {
      console.log(lang);
      vm1.fetchQuestions(vm1.featureID);
    });
  },
  methods: {
    goToMovie: function (movieName,cat,q) {
      this.$router.push({path:`/movie/${movieName}`,query:{
        "item":{
        "category":cat,"question":q}
      }}).catch((err) => {
        err;
      });
    },
    fetchQuestions(featureID) {
    
      this.featureID = featureID;
      this.questions.length = 0;
      db.collection("questions")
        .where("featureID", "==", +featureID)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.docs.map((questionRaw) => {
            let questionItem = questionRaw.data();
            this.questions.push({
              category: questionItem.category,
              ...questionItem.question[this.$i18n.locale.toUpperCase()],
            });
          });
        });
       
    },
  },
};
</script>

<style scoped>
ul {
  padding-left: 0;
  margin-top: 40px;
}
ul li {
  list-style-type: none;
}

</style>
