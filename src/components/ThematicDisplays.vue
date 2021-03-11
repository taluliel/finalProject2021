<template>
  <div class="ThematicDisplays">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("ThematicDisplays") }}
      </p>
    </div>
    <div class="POI">
      <img class="imgMap" src="../assets/ThematicDisplays.png" />
    </div>
    <p class="location1">
      {{ $t("Coins") }}
    </p>
    <p class="location2">
      {{ $t("Lions/Femalefigurines") }}
    </p>
    <p class="location3">
      {{ $t("Weights") }}
    </p>
    <p class="location4">
      {{ $t("Sevenspecies") }}
    </p>
    <p class="location5">
      {{ $t("Jerusalem") }}
    </p>
    <p class="location6">
      {{ $t("Seals") }}
    </p>
    <p class="location7">
      {{ $t("TempleMount") }}
    </p>
    <p class="location8">
      {{ $t("Cyprus") }}
    </p>
    <p class="location9">
      {{ $t("Egypt/Greece") }}
    </p>
    <p class="location10">
      {{ $t("Oillamps") }}
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
              {{ $t("Coins") }}
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
              {{ $t("Lions/ Female figurines") }}
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
              {{ $t("Weights") }}
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
              {{ $t("Seven species") }}
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
              {{ $t("Jerusalem") }}
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
              {{ $t("Seals") }}
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
              {{ $t("Temple Mount") }}
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
              {{ $t("Cyprus") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 9 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location9" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Egypt/ Greece") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->
    <!-- 10 -->
    <!-- <v-dialog v-model="dialog" width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location10" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Oil lamps") }}
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
  name: "ThematicDisplays",
};
</script>

<style scoped>
.ThematicDisplays {
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
  margin-left: 10px;
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
  right: 52%;
  top: 46%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location2 {
  position: absolute;
  right: 10%;
  top: 50%;
  width: 48px;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
  line-height: 96%;
}
.location3 {
  position: absolute;
  right: 52%;
  top: 55%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location4 {
  position: absolute;
  right: 75%;
  top: 52%;
  width: 50px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}

.location5 {
  position: absolute;
  right: 31%;
  top: 62%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}

.location6 {
  position: absolute;
  right: 13%;
  top: 66%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location7 {
  position: absolute;
  right: 44%;
  top: 72%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location8 {
  position: absolute;
  right: 22%;
  top: 82%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location9 {
  position: absolute;
  right: 42%;
  top: 83%;
  width: 46px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location10 {
  position: absolute;
  right: 69%;
  top: 81%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
</style>