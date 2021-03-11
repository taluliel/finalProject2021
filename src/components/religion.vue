<template>
  <div class="religion">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("religion") }}
      </p>
    </div>
    <div class="POI">
      <img class="imgMap" src="../assets/religion.png" />
    </div>
    <p class="location1">
      {{ $t("Gods") }}
    </p>

    <p class="location2">
      {{ $t("Jerusalemphoto") }}
    </p>
    <!-- 1 -->
    <!-- <div class="location1">
 <img class="location1" src="../assets/POI.png" width="20" height="20"/>
 <p class="cardText">{{ $t("Gods") }}</p>
 </div> -->
    <!-- 2 -->
    <!-- <div class="location2">
 <img class="location2" src="../assets/POI.png" width="20" height="20"/>
 <p class="cardText">{{ $t("Jerusalem photo") }}</p>
 </div> -->

    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location1" src="../assets/POI.png" width="20" height="20"/>
        </button>
      </template>
   <template v-slot:default="dialog">
      <v-card class="popUp">
        <v-card-actions>
          <v-card-text class="cardText">
            {{ $t("Gods") }}
          </v-card-text>
          <v-btn icon v-on:click="dialog.value = false">
            <v-icon> mdi-close-circle-outline </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
         </template>
    </v-dialog>

    <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location2" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
   <template v-slot:default="dialog">
      <v-card class="popUp">
        <v-card-actions>
          <v-card-text class="cardText">
            {{ $t("Jerusalem photo") }}
          </v-card-text>
          <v-btn icon v-on:click="dialog.value = false">
            <v-icon> mdi-close-circle-outline </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
       </template>
    </v-dialog> -->
  </div>
</template>

<script>
export default {
  name: "religion",
};
</script>

<style scoped>
.religion {
  background: #cccbc2;
}
.PoiTitle {
  text-align: center;
  margin-top: 14px;
      height: 25%;
  color: #0f2a48;
  border-bottom-style: groove;
  border-color: #ffffff;
}
.Poi {
  position: absolute;
  /* width: 100px; */
  height: 20%;
  left: 0px;
  right: 0px;
  top: 0%;
  background: #cccbc2;
}
.imgMap {
 width: 77%;
    height: 100%;
    margin-left: 42px;
}

.POI {
  background: #cccbc2;
  position: absolute;
  width: 100%;
  height: 91%;
  /* left: 50px; */
  top: 9%;
}
.location1 {
  position: absolute;
  right: 72%;
  top: 71%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location2 {
  position: absolute;
  right: 58%;
  top: 40%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}

.cardText {
  position: absolute;
  /* right: 0px; */
  width: 81px;
  text-align: center;
}
</style>