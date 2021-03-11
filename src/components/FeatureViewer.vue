<template>
  <div class="canvas-wrapper">
    <v-img
      contain
      :src="image1"
      class="featureImage"
    >
    <div  v-if="imageDetails">
      <div
        v-for="(item, index) in imageDetails.features"
        :key="index"
        v-on:click="goToQuestionCategories(item.featureid)"
        class="flex-rectangle"
        :style="{
          top: item.coords.y + '%',
          left: item.coords.x + '%',
          height: item.coords.height ? `${item.coords.height}%` : '100%',
          width: item.coords.width ? `${item.coords.width}%` : '100%',
        }"
      >
        <div
          class="insisde-rectangle"
          v-on:click="goToQuestionCategories(item.featureid)"
          :style="{ top: '0%', left: '0%', height: '100%', width: '100%' }"
        />
      </div>
    </div>
    </v-img>
  </div>
</template>
<script>
import { storage } from "../main";

export default {
  name: "featureViewer",
  props: { imageDetails: Object, room: String },
  data() {
    return { image1: "" };
  },
  methods: {
    goToQuestionCategories(featureID) {
        this.$router.push(`/feature/${featureID}`).catch((err) => {
        err;
      });
    },
    async getImageUrl(imageName) {
      this.image1 = await storage
        .ref(`/images/${imageName}.jpg`)
        .getDownloadURL();
    },
  },
  updated() {
    if (this.imageDetails.name) {
      this.getImageUrl(this.imageDetails.name);
    }
  },
  computed: {
    getImage: function () {
      return this.imageDetails.name;
    },
    getCoords: function () {
      return this.imageDetails.coords;
    },
  },
};
</script>
<style scoped>
.featureImage {
  clip-path: url(#clip);
  /*    
  mask-image: url("../assets/rectangle.svg?inline");
  mask-size:100vmin;
  mask-repeat: no-repeat;
  mask-position: center; */
}
.flex-rectangle {
   position: absolute;
  /* border: 3px solid hsl(32, 94%, 45%); */
  border: 3px solid hsl(32, 94%, 45%);
  border-radius: 22px;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5));
  border-radius: 12px;
  
}
.insisde-rectangle {
  /* border: 10px solid #d8d8d5; */
  /* border: 10px solid  hsl(32, 71%, 58%); */
  border: 10px solid  hsl(32, 73%, 51%);
  border-width: thick;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5));
  border-radius: 12px;
   border-radius: 9px;
}
.featureImage {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  max-width: 100%;
  height: auto;
}
</style>