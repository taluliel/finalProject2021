<template>
  <div>
    <v-toolbar class="primaryNav">
      <v-menu max-height="100%" left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list class="hamburger" :value="shown" :close-on-content-click="true">
          <v-list-item class="Upmenu">
            <p class="menuTitle">
              {{ $t("title") }}
            </p>
            <div>
              <v-btn icon v-on:click="closemenu()">
                <v-icon> mdi-close-circle-outline </v-icon>
              </v-btn>
            </div>
          </v-list-item>
          <!-- <v-list-item class="menuLine">
            <a v-on:click="goToRoute('map')">
              <v-img
                class="feature"
                contain
                src="../assets/inputColor.png"
                max-width="28px"
                margin-right="35px"
              />
            </a>
            <v-list-item-title>
              <button class="title" v-on:click="goToRoute('map')">
                {{ $t("feature") }}
              </button>
            </v-list-item-title>
          </v-list-item> -->

          <v-divider class="divider"></v-divider>
          <v-list-item class="menuLine">
            <a v-on:click="goToRoute('map')">
              <v-img
                class="map"
                contain
                src="../assets/map.png"
                max-width="28px"
                margin-right="35px"
              />
            </a>
            <v-list-item-title>
              <button class="title" v-on:click="goToRoute('map')">
                {{ $t("map") }}
              </button>
            </v-list-item-title>
          </v-list-item>

          <v-divider class="divider"></v-divider>
          <v-list-item class="menuLine">
            <v-img
              contain
              src="../assets/globe.png"
              max-width="28px"
              margin-right="35px"
            />

            <v-list-item-title>
              <button class="title">
                {{ $t("chooseLang") }}
              </button>
            </v-list-item-title>
          </v-list-item>
          <div class="allLang">
            <v-list-item>
              <button class="changelang" v-on:click="choose('he')">
                <img src="../assets/hebrow.png" />
              </button>
              <button class="changelang" v-on:click="choose('en')">
                <img src="../assets/english.png" />
              </button>
              <button class="changelang" v-on:click="choose('ar')">
                <img src="../assets/arabic.png" />
              </button>
            </v-list-item>
          </div>
          <v-divider class="divider"></v-divider>
          <v-list-item class="bottom">
            <div class="icons2">
              <v-img
                class="icons"
                contain
                position="absolute"
                src="../assets/HAIFA_UNI.png"
                max-width="50px"
              />

              <a v-on:click="goToRoute('')">
                <v-img
                  alt="Hecht Logo"
                  contain
                  position="absolute"
                  src="../assets/logo.jpeg"
                  max-width="40px"
                />
              </a>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="Hechttitle">
        <v-toolbar-title style="font-size: 16px;">
          {{ $t("title") }}
        </v-toolbar-title>
      </div>

      <div class="university">
        <v-img
          alt="university Logo"
          contain
          position="absolute"
          src="../assets/haifa_uni_logo.png"
          max-width="28px"
        />
      </div>
      <div class="hecht">
        <a v-on:click="goToRoute('')">
          <v-img
            alt="Hecht Logo"
            contain
            position="absolute"
            src="../assets/hecht_Logo.png"
            max-width="28px"
          />
        </a>
      </div>
    </v-toolbar>

    <div class="fram22">
      <v-btn icon v-on:click="back()" class="chevron-right">
        <v-icon> mdi-chevron-right </v-icon>
      </v-btn>
      <div class="roomQuery-container">
        <RoomQuery></RoomQuery>
      </div>
      <v-divider class="divider"></v-divider>
    </div>
  </div>
</template>



<script>
import RoomQuery from "./RoomQuery";
import EventBus from "../eventBus";

export default {
  name: "NavHeader",
  components: {
    RoomQuery,
  },
  data() {
    return {
      shown: true,
    };
  },
  methods: {
    choose(lang) {
      this.$i18n.locale = lang;
      this.$vuetify.rtl = lang == "he" || lang == "ar";
      EventBus.$emit("locale_changed", lang);
    },
    goToRoute: function (route) {
      this.$router.push(`/${route}`).catch((err) => {
        err;
      });
    },
    back() {
      this.$router.back();
    },
    closemenu() {
      this.shown = false;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Assistant";
  src: ("/Assistant-Regular.woff2"); /* IE9 Compat Modes */
}
.roomQuery-container {
  width: 90%;
}
.align-center img {
  cursor: pointer;
}
.primaryNav {
  height: 37px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* color/final/background/bright&text */

  background: #fbfaf9;
  /* effect/drop_shadow/patch */

  box-shadow: 0px 3px 5px rgba(11, 14, 36, 0.15);
}
.Upmenu {
  display: flex;
  flex-direction: row;
  padding: 21px 20px 21px 0px;

  position: static;
  width: 309px;
  height: 66px;
  left: calc(50% - 309px / 2);
  top: 0px;

  /* color/Beige_3 */

  background: #eeeee9;
  border-radius: 12px 0px 0px 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.NavBtn {
  height: 36px;
  width: 66px;
}
.menuTitle {
  position: static;
  width: 235px;
  height: 22px;
  left: calc(50% - 235px / 2 + 17px);
  top: 21px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
   align-items: center;
  text-align: right;
  color: #466a85;
  flex: none;
  flex-grow: 0;
  margin: 8px 0px;
}
.Hechttitle {
  width: 252px;
  height: 29px;
  top: 10px;
  left: calc(57% - 199px / 2 - 5.32px);
font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 22px;
   text-align: center;
  color: #466a85;
}
.fram22 {
  height: 70px;
  left: 0px;
  right: 0px;
  top: 37px;
  background: #eeeee9;
}
.chevron-right {
  position: absolute;
  right: 3%;
  margin-top: 15px;
  color: #5c3f55;
  mix-blend-mode: normal;
}

.menuLine {
  padding: 21px 18px 21px 0px;
  position: static;
  background: #f4f4f1;
  padding-left: 28px;
  padding-right: 19px;
}
.title {
  position: static;
  width: 200px;
  height: 22px;
  left: calc(50% - 200px / 2 + 4.5px);
  top: 21px;
  margin-left: 15px;
  margin-right: 15px;
  color: #0f2a48;
}

.allLang {
  /* Auto Layout */

  display: flex;
  flex-direction: row;

  align-items: center;
  padding: 10px 52px 21px 0px;

  position: static;
  width: 309px;
  height: 75px;
  left: calc(50% - 309px / 2);
  top: 267px;

  /* color/Beige_2 */

  background: #f4f4f1;
  border-radius: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 8;
  flex-grow: 0;
  margin: 0px 0px;
}

.changelang {
  position: static;
  width: 44px;
  height: 44px;
  left: 93px;
  top: 10px;

  /* color/Beige_3 */

  background: #eeeee9;
  border-radius: 12px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 5px;
}
.hamburger {
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;

  width: 309px;
  height: 100%;
  right: 0px;
  top: 0px;

  /* color/Beige_3 */

  background: #eeeee9;
  /* effect/drop_shadow/patch */

  box-shadow: 0px 3px 5px rgba(11, 14, 36, 0.15);
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 20px 0px;

  position: static;
  width: 309px;
  height: 235px;
  left: calc(50% - 309px / 2);
  top: 410px;

  /* color/Beige_2 */

  background: #f4f4f1;
  border-radius: 0px 0px 0px 12px;

  /* Inside Auto Layout */

  flex: none;
  order: 11;
  flex-grow: 1;
  margin: 0px 0px;
}
.icons {
  margin-left: 25px;
  margin-right: 25px;
}
.icons2 {
  position: absolute;
  display: flex;
  width: 190px;
}
.divider {
  position: static;
  width: 309px;
  height: 2px;
  left: calc(50% - 309px / 2);
  top: 204px;

  /* Inside Auto Layout */

  flex: none;
  order: 6;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
}
</style>
