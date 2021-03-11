<template>
  <div class="Phoenicians">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("Phoenicians") }}
      </p>
    </div>
    <div class="POI">
      <img class="imgMap" src="../assets/Phoenicians.png" />
    </div>
    <p class="location1">
      {{ $t("Burialpractices") }}
    </p>

    <p class="location2">
      {{ $t("Importedpottery") }}
    </p>
    <p class="location3">
      {{ $t("Maritimecommerce") }}
    </p>
    <p class="location4">
      {{ $t("Phoenicianharbor") }}
    </p>
    <p class="location5">
      {{ $t("Phoenicianwriting") }}
    </p>
    <p class="location6">
      {{ $t("Vesselsfordailyuse") }}
    </p>
    <p class="location7">
      {{ $t("Phoeniciangods") }}
    </p>
    <p class="location8">
      {{ $t("ThePhoenicians") }}
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
              {{ $t("Burial practices") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 2 -->
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
              {{ $t("Imported pottery") }}
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
              {{ $t("Maritime commerce") }}
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
              {{ $t("Phoenician harbor") }}
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
              {{ $t("Phoenician writing") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 6 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location6" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Vessels for daily use") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 7 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location7" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Phoenician gods") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 8 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location8" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("The Phoenicians") }}
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
  name: "Phoenicians",
};
</script>

<style scoped>
.Phoenicians {
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
.POI {
  background: #cccbc2;
  position: absolute;
  width: 100%;
  height: 91%;
  /* left: 50px; */
  top: 9%;
}
.imgMap {
  width: 95%;
  height: 100%;
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
  right: 61%;
  top: 40%;
  width: 80px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location2 {
  position: absolute;
  right: 63%;
  top: 69%;
  width: 80px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location3 {
  position: absolute;
  right: 53%;
  top: 53%;
  width: 80px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location4 {
  position: absolute;
  right: 42%;
  top: 60%;
  width: 80px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}

.location5 {
  position: absolute;
  right: 29%;
  top: 48%;
  width: 80px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}

.location6 {
  position: absolute;
  right: 18%;
  top: 38%;
  width: 46px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location7 {
  position: absolute;
  right: 17%;
  top: 64%;
  width: 80px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location8 {
  position: absolute;
  right: 31%;
  top: 71%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
</style>