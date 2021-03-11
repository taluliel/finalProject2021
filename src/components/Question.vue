<template>
<div class="question-wrapper">
          <div class="question-icon">
           <img :src="base_url+'assets/icon/'+category+'.png'" class="ca" /> 
           </div>
          <div class="question">
            {{ questionText }}
          </div>
        </div>
</template>
<script>


export default {
  name: "question",
 props: { category: String, questionText: String },
 data(){
     return {
         base_url:window.myapp.BASE_URL
     }
 }
  }
  </script>
  <style>
  .question-wrapper {
  display: flex;
  /* color/final/white */

  background: #ffffff;
  /* effect/drop_shadow/patch_banner */

  box-shadow: 0px 3px 5px rgba(11, 14, 36, 0.05);
  border-radius: 12px;
      justify-content: flex-end;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 10px 14px;
    position: static;
    width: 94%;
    height: 80px;
    left: calc(50% - 343px/2);
    top: 0px;
}
.question {
  flex: 5;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: right;
  color: #202447;
  margin: 10px 5px;
}
.question-icon {
  flex: 0.85;
  background: #FBFAF9;
border-radius: 0px 12px 12px 0px;

/* Inside Auto Layout */
align-self: stretch;
margin: 0px 0px;
}
.ca{
  margin-top: 20px;
}
  </style>

  