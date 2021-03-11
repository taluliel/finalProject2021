
<template>
  <div class="secondFloor">
    <div class="canvas-wrapper">
      <div class="floor2">
        <v-bottom-navigation background-color="#cccbc2" height="50px">
          <v-btn
            max-width="50%"
            outlined
            class="floorTitl1"
            v-on:click="goToRoute('map')"
          >
            <span>{{ $t("floor1") }}</span>
          </v-btn>
          <v-btn
            max-width="50%"
            class="floorTitl2"
            outlined
            v-on:click="goToRoute('secondFloor')"
          >
            <span class="currentfloor">{{ $t("floor2") }}</span>
          </v-btn>
        </v-bottom-navigation>
      </div>
      <img class="imgMap" src="../assets/secondfloor.png" />
      <button class="Auditorium">
        {{ $t("Auditorium") }}
      </button>
      <button class="office">
        {{ $t("office") }}
      </button>

      <button
        class="ThematicDisplays"
        v-on:click="goToRoute('ThematicDisplays')"
      >
        {{ $t("ThematicDisplays") }}
      </button>
      <button class="ExchangingExhibition">
        {{ $t("ExchangingExhibition") }}
      </button>
      <button class="ArtDepartment">
        {{ $t("ArtDepartment") }}
      </button>
      <button class="ThematicViews">
        {{ $t("ThematicViews") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "secondFloor",
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
.secondFloor {
  background: #cccbc2;
}

.floorTitl1 {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: right;
}
.floorTitl2 {
  position: absolute;
  width: 50%;
  display: flex;
  align-items: center;
  text-align: right;
  border-bottom-color: orange;
  border-bottom-width: 2px;
}
.currentfloor {
  color: #0f2a48;
  font-weight: bold;
}
.floor2 {
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
.floors_2 {
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
  left: calc(50% - 46px / 2 - 43.5px);
  top: 22%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}
.office {
  position: absolute;
  width: 35px;
  top: 30%;
  right: 7%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}

.ExchangingExhibition {
  position: absolute;
  width: 58px;
  right: 14%;
  top: 50%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}
.ThematicDisplays {
  position: absolute;
  width: 85px;

  right: 19%;
  top: 80%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.ArtDepartment {
  position: absolute;
  width: 73px;
  left: calc(50% - 84px / 2 + 0px);
  top: 52%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}

.ThematicViews {
  position: absolute;
  width: 89px;
  left: 9%;
  top: 69%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}
</style>


