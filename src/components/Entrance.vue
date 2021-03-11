<template>
  <div class="Entrance">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("Entrance") }}
      </p>
    </div>
    <div class="POI">
      <img class="imgMap" src="../assets/Entrance.png" />
    </div>

    <p class="location1">{{ $t("Museumentrance") }}</p>
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
            {{ $t("Museum entrance") }}
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
  name: "Entrance",
};
</script>

<style scoped>
.Entrance {
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
  width: 90%;
  height: 100%;
  margin-left: 18px;
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
  right: 54%;
  top: 89%;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
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
</style>