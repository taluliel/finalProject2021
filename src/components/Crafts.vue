<template>
  <div class="Crafts">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("Crafts") }}
      </p>
    </div>
    <div class="POI">
      <img class="imgMap" src="../assets/Crafts.png" />
    </div>
    <p class="location1">
      {{ $t("Woodworking") }}
    </p>
    <p class="location2">
      {{ $t("Glassmaking") }}
    </p>
    <p class="location3">
      {{ $t("Stonevessels") }}
    </p>
    <p class="location4">
      {{ $t("Synagoguemosaic") }}
    </p>
    <p class="location5">
      {{ $t("Metalworking") }}
    </p>
    <!-- 1 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location1" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Woodworking") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <! 2 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location2" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Glassmaking") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 3 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location3" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Stone vessels") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 4 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location4" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Synagogue mosaic") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 5 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location5" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Metalworking") }}
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
  name: "Crafts",
};
</script>

<style scoped>
.Crafts {
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
  width: 95%;
  height: 100%;
  margin-left: 9px;
}

.POI {
  background: #cccbc2;
  position: absolute;
  width: 100%;
  height: 91%;
  /* left: 50px; */
  top: 9%;
}

.cardText {
  position: static;
  width: 200px;
  height: 22px;
  left: calc(50% - 200px / 2 + 20px);
  top: 10px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */

  display: flex;
  align-items: center;
  text-align: right;

  /* color/blue_dark */

  color: #0f2a48;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
}
.location1 {
  position: absolute;
  right: 53%;
  top: 40%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location2 {
  position: absolute;
  right: 59%;
  top: 80%;
  width: 68px;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location3 {
  position: absolute;
  right: 21%;
  top: 78%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location4 {
  position: absolute;
  right: 40%;
  top: 85%;
  width: 59px;
 line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location5 {
  position: absolute;
  right: 23%;
  top: 93%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
</style>