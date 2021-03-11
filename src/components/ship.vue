<template>
  <div class="ship">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("ship") }}
      </p>
    </div>

    <div class="POI">
      <img class="imgMap" src="../assets/ship.png" />
    </div>
    <p class="location1">
      {{ $t("Shipwreckfinds") }}
    </p>
    <p class="location2">
      {{ $t("Carpentertools") }}
    </p>
    <p class="location3">
      {{ $t("Shipstern") }}
    </p>
    <p class="location4">
      {{ $t("Shipwreck") }}
    </p>
    <p class="location5">
      {{ $t("Maritimearchaeology") }}
    </p>
    <p class="location6">
      {{ $t("Shipbow") }}
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
              {{ $t("Shipwreck finds") }}
            </v-card-text>
            <v-btn icon v-on:click="dialog.value = false">
              <v-icon> mdi-close-circle-outline </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->

    <!-- 2 -->
    <!-- <v-dialog width="260" height="44">
      <template v-slot:activator="{ on, attrs }">
        <button v-on="on" v-bind="attrs">
          <img class="location2" src="../assets/CurrentLocationMarker.png" />
        </button>
      </template>
      <template v-slot:default="dialog">
        <v-card class="popUp">
          <v-card-actions>
            <v-card-text class="cardText">
              {{ $t("Carpenter tools") }}
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
              {{ $t("Ship stern") }}
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
              {{ $t("Shipwreck") }}
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
              {{ $t("Maritime archaeology") }}
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
              {{ $t("Ship bow") }}
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
  name: "ship",
  methods: {
    closedialog() {
      this.shown = false;
    },
  },
};
</script>

<style scoped>
.ship {
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
  right: 67%;
  top: 20%;
  width: 80px;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location2 {
  position: absolute;
  right: 42%;
  top: 19%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location3 {
  position: absolute;
  right: 27%;
  top: 32%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
.location4 {
  position: absolute;
  right: 27%;
  top: 55%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}

.location5 {
  position: absolute;
  right: 41%;
  top: 76%;
  width: 76px;
  line-height: normal;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}

.location6 {
  position: absolute;
  right: 58%;
  top: 70%;
  line-height: normal;
  font-style: normal;
  font-size: 12px;
  color: #0f2a48;
}
</style>