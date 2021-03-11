<template>
  <div class="home">
    <!-- <h2>{{ $t("museum_name") }}</h2>
    <p class="startTour" >
      {{ $t("start_tour") }}
    </p> -->

      <div class="lang">
        <img  src="../assets/globe.png" />
      </div>
    <div class="Line">

      <p class="title">
        {{ $t("chooseLang") }}
      </p>
      <p class="Instructions">
        {{ $t("Instructions") }}
      </p>
    </div>
    <div class="allLangHome">
      <button class="changelang" v-on:click="choose('he')">
        <img src="../assets/hebrow.png" />
      </button>
      <button class="changelang" v-on:click="choose('en')">
        <img src="../assets/english.png" />
      </button>
      <button class="changelang" v-on:click="choose('ar')">
        <img src="../assets/arabic.png" />
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import EventBus from "../eventBus";
export default {
  name: "home",
  data: () => ({
    items: [],
    select: null,
  }),
  computed: {
    nav_label: function () {
      return "Please choose a room code";
    },
  },
  firestore() {
    return {
      items: db.collection("Rooms").where("roomCode", "!=", null),
    };
  },

  methods: {
    goToRoom: function () {
      console.log(this.select);
      this.$router.push(`/room/${this.select}`).catch((err) => {
        err;
      });
    },
    choose(lang) {
      this.$i18n.locale = lang;
      this.$vuetify.rtl = lang == "he" || lang == "ar";
      EventBus.$emit("locale_changed", lang);
    },
  },
};
</script>

<style>
.home {
  height: 100%;
  width: 100%;

  text-align: center;
  background-image: url("../assets/homePage.png");
  background-size: 100% 77%;
  /* animation: anim1 ease-in-out 20s infinite; */
}
.div-wrapper {
  position: relative;
  height: 300px;
  width: 300px;
}
.Group {
  position: fixed;
  top: 49%;
  left: calc(65% - 343px / 2);
}

.Line {
    position: absolute;
    top: 79%;
    margin-left: 41px;
    margin-right: 45px;
}
.title {
  height: 5px;
  right: 30px;
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */

  display: flex;
  align-items: center;
  text-align: right;

  /* color/blue_dark */

  color: #0f2a48;
}
.Instructions {
  right: 30px;
  top: 22px;

  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 11px;
  /* identical to box height, or 110% */

  display: flex;
  align-items: center;
  text-align: right;
  text-transform: capitalize;

  /* color/blue_light */

  color: #466a85;
}
.lang {
    top: 79%;
    position: absolute;
    margin-right: 15px;
    margin-left: 15px;
}

.changelang {
  position: static;
  width: 44px;
  height: 44px;
  left: 72.5px;
  top: 0px;

  /* color/Beige_3 */

  background: #eeeee9;
  border-radius: 12px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 9px;
}
.allLangHome {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  top: 85%;
  height: 49px;
  left: calc(50% - 163px / 2);
  background: #f4f4f1;
  border-radius: 0px;
}
</style>