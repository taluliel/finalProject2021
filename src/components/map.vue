<template>
  <div class="map">
    <div class="canvas-wrapper">
      <div class="floor1">
        <!-- <button v-on:click="goToRoute('secondFloor')">
          <v-img class="floors_1" src="../assets/floors_1.png" />
      </button> -->
        <v-bottom-navigation background-color="#cccbc2" height="50px">
          <v-btn
            max-width="50%"
            outlined
            class="floorTitl1"
            v-on:click="goToRoute('map')"
          >
            <span class="currentfloor">{{ $t("floor1") }}</span>
          </v-btn>

          <v-btn
            max-width="50%"
            class="floorTitl2"
            outlined
            v-on:click="goToRoute('secondFloor')"
          >
            <span>{{ $t("floor2") }}</span>
          </v-btn>
        </v-bottom-navigation>
      </div>

      <!-- <v-tabs
          v-model="tab"
          centered
          fixed-tabs
          background-color="#cccbc2"
            >
          <v-tab style="margin-right: 0px">{{ $t("floor1") }}</v-tab>
          <div class="v-tabs-slider orange"></div>
          <v-divider vertical></v-divider>
          <v-tab v-on:click="goToRoute('secondFloor')">{{
            $t("floor2")
          }}</v-tab>
        </v-tabs> -->

      <!-- <button class="floorTitl1">
        {{ $t("floor1") }}
      </button>
      <button class="floorTitl2" v-on:click="goToRoute('secondFloor')">
        {{ $t("floor2") }}
      </button> -->
      <!-- <p class="floorTitl1">
          {{ $t("floor1") }}
        </p> -->

      <img class="imgMap" src="../assets/firstfloor.png" />
      <button class="Auditorium">
        {{ $t("Auditorium") }}
      </button>
      <button class="ship" v-on:click="goToRoute('ship')">
        {{ $t("ship") }}
      </button>
      <button class="Phoenicians" v-on:click="goToRoute('Phoenicians')">
        {{ $t("Phoenicians") }}
      </button>
      <button class="Crafts" v-on:click="goToRoute('Crafts')">
        {{ $t("Crafts") }}
      </button>
      <button class="ExchangingExhibition">
        {{ $t("ExchangingExhibition") }}
      </button>
      <button class="israelihome" v-on:click="goToRoute('israeliHome')">
        {{ $t("home") }}
      </button>
      <button class="religion" v-on:click="goToRoute('religion')">
        {{ $t("religion") }}
      </button>
      <button class="Entrance" v-on:click="goToRoute('Entrance')">
        {{ $t("Entrance") }}
      </button>
    </div>
  </div>
</template>

<script>
import { logUser } from "../utils/helper";
export default {
  name: "map",
  mounted() {
    logUser("checking the map");
  },
  methods: {
    goToRoute: function (route) {
      this.$router.push(`/${route}`).catch((err) => {
        err;
      });
    },
  },
};
</script>

<style scoped>
.map {
  background: #cccbc2;
}

.floorTitl1 {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: right;
  color: #0f2a48;
  border-bottom-color: orange;
  border-bottom-width: 2px;
}
.floorTitl2 {
  position: absolute;
  width: 50%;
  display: flex;
  align-items: center;
  text-align: right;
}
.currentfloor {
  color: #0f2a48;
  font-weight: bold;
}
.floor1 {
  position: absolute;
  /* height: 49px; */
  left: 0px;
  right: 0px;
  border-bottom-style: groove;
  background: #cccbc2;
}
.imgMap {
  margin-top: 50px;
  width: 100%;
  height: 94%;
  background: #cccbc2;
}
.floors_1 {
  position: absolute;
  width: 38px;
  height: 31px;
  right: 14px;
  top: 7px;

  /* color/Beige_5 */

  border: 1px solid #aaa99d;
  box-sizing: border-box;
  border-radius: 4px;
}
.canvas-wrapper {
  background: #cccbc2;
  position: absolute;
  width: 100%;
  height: 96%;
}
.Auditorium {
  position: absolute;
  left: calc(53% - 46px / 2 - 43.5px);
  top: 20%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}
.ship {
  position: absolute;
  width: 70px;
  left: calc(58% - 88px / 2 + 97.94px);
  top: 18%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.Phoenicians {
  position: absolute;
  width: 86px;
  right: 60%;
  top: 50%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.Crafts {
  position: absolute;
  width: 58px;
  left: calc(53% - 73px / 2 + 23px);
  top: 51%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.ExchangingExhibition {
  position: absolute;
  width: 53px;
  right: 11%;
  top: 52%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}
.israelihome {
  position: absolute;
  width: 85px;
  left: calc(51% - 85px / 2 + 27px);
  top: 81%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.religion {
  position: absolute;
  width: 38px;
  right: 87%;
  top: 79%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.Entrance {
  position: absolute;
  width: 26px;
  left: 5%;
  top: 97%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
</style>