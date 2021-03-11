<template>
  <div class="room">
     <v-dialog class="error"
      v-model="dialog"
      max-width="290"
        >
      <v-card style="height: 178px;">
        <v-card-title class="headline">
          </v-card-title>
          <v-img class="search"
              contain
              src="../assets/search.png"
              max-width="24px"
              margin-right="24px"
            />
        <v-card-text class="roomNotFound">
              {{ $t("room_not_found") }}
        </v-card-text>
      <v-card-text class="roomNotFound2">
              {{ $t("room_not_found2") }}
        </v-card-text>
        <v-card-actions>
          <v-btn
          class="ok"
            color="white"
            text
            @click="dialog = false"
          >
             {{ $t("ok") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="PoI">
      <span class="titlePOI" v-if="currentRoom">
        {{ currentRoom.title[this.$i18n.locale.toUpperCase()] }}
      </span>
    </div>
    <div>
      <feature-viewer
        class="feature"
        :image-details="currentRoom"
        :room="currentRoomCode"
      ></feature-viewer>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import { logUser } from '../utils/helper';
import FeatureViewer from "./FeatureViewer";

export default {
  name: "room",
  components: { FeatureViewer },
  data: () => ({
    items: [2000, 3000, 4000, 5000],
    currentRoomCode: null,
    currentRoom: null,
    dialog:false
  }),
  mounted() {
    this.getFeatures(this.$route.params.id);
  },
  methods: {
    getFeatures(roomCode) {
      console.log(roomCode);
      this.currentRoomCode = roomCode;
      db.collection("Rooms")
        .where("roomCode", "==", +roomCode)
        .get()
        .then((querySnapshot) => {
          const room = querySnapshot.docs[0].data();
          this.currentRoom = room;
        }).catch((err)=>{
          console.log(err);
          this.dialog=true;
        });
    },
  },

  beforeRouteUpdate(to, from, next) {
    let roomCode = to.params.id;
    logUser(`Went to room ${roomCode}`);

    this.getFeatures(roomCode);
    next();
  },
};
</script>

<style scoped>
.room {
  width: 100%;
  text-align: center;
}
.PoI {
  height: 58px;
  border-bottom-style: groove;
  border-color: #ffffff;
  /* color/Beige_4 */
}
.titlePOI {
  position: absolute;
  width: 330px;
  /* height: 22px; */
  right: 18px;
  top: 12px;

  color: #0f2a48;

  line-height: 22px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

.feature {
  width: 100%;
  /* left: 0px; */
  /* height: 100%; */
  /* top: 173px; */
  position: absolute;
}
.error{
      transform-origin: center center;
    max-width: 290px;
    position: absolute;
    height: 178px;
    /* left: 33px; */
    /* right: 32px; */
    top: 20%;
    background: #FFFFFF;
    box-shadow: 0px 0px 24px rgb(0 0 0 / 22%), 0px 24px 24px rgb(0 0 0 / 30%);
    border-radius: 4px;
}
.roomNotFound{
  position: absolute;
width: 221px;
height: 34%;
right: 15%;

font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
display: flex;
align-items: center;
text-align: right;

/* color/blue_dark */

color: #0F2A48;
}
.roomNotFound2{
  position: absolute;
width: 253px;
right: 14%;
top: 44%;

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
/* or 129% */

display: flex;
align-items: center;
text-align: right;
text-transform: capitalize;

/* color/blue_dark */

color: #0F2A48;
}
.ok{
  display: flex;
flex-direction: row;
justify-content: center;
padding: 5px 18px;

position: absolute;
width: 76px;
height: 36px;
left: 24px;
bottom: 10px;

/* color/orange */

background: #FE8212;
border-radius: 4px;
}
.search{
  position: absolute;
right: 24px;
top: 33px;

}
</style>
