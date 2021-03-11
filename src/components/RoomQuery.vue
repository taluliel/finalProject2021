<template>
  <div class="roomQuery">
     <form>
    <div class="goToRoom">
     
      <button class="searchitem" v-on:click="goToRoom">
        <img src="../assets/return.png" />
      </button>
    </div>
    <input type="number" 
      class="chooseRoom"
      v-model="select"
      :placeholder="choose_room"
      :items="items"
      item-text="roomCode"
      item-value="roomCode"
    />
     </form>
  </div>
 
</template>

<script>
import { db } from "../main";
export default {
  name: "roomQuery",
  data: () => ({
    items: [],
    select: null,
  }),
  computed: {
    choose_room: function () {
      return this.$t("choose_room");
    },
  },
  firestore() {
    return {
      items: db.collection("Rooms").where("roomCode", "!=", null),
    };
  },
  mounted() {},
  methods: {
    goToRoom: function () {
      
      this.$router.push(`/room/${this.select}`).catch((err) => {
       console.log(err);
      });
    },
  },
};
</script>

<style scoped>
.roomQuery {
  position: absolute;
  left: 105px;
  right: 63px;
  height: 56px;
      width: 56%;
  border-radius: 2px;
   outline: none;
  margin-top: 8px;
  background: #e7e7df;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.12),
    inset 0px 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgBtVRBTsMwENx1yj1PgBeQJ5Qf0BdwRBUHhESRkBBxUW8tEifaW9UXAC8gT8gP6BN6pqkHuxTRBJvaIYwUOd5d73jt9RD9M9jl6I8m54ohCRzT7jQ5L1VHXnfnVY+whd+MHo8V0YNfcgMk2OOpzdOyGQU4MbUB6N/1upJ2IB1NoIe2N8EmqaQG0HI5bodjaSFtjoAFnxBofzPNqWZFJQI5HLch9GWBF/oGttgoTu8nb8a+0g02uDx9Jk+Uusgkh8KMGPHW7mn9r5Mz1EtENKUAlI8IiPXRHJaSfzsTsN4PY0EBKFXASh3pIfltAa9WHapLIK/OckXou4IVaGZiqC6BQfROmSs4QuH0eRN86gn/3CXTPHT3BtZ3oLvlQlWevoC7smCCNQlzuj0vgIyaIpC9bqalonTZA22jpggM6mqPF4EROnNEvnIdTPAFQ6K1PqU/QIQE8xIH5gtZIxzGzGYvBJKiZdOpNXJvAtNFrM+/KmxRJJ4i5lfLkkxXFqRRjeEDLjiSrPZ461QAAAAASUVORK5CYII=);
  background-position: right;
  background-repeat: no-repeat;
}
.goToRoom {
  background: #f4f4f1;
  position: absolute;
  top: 6%;
  right: 105%;
  color: #5c3f55;
  mix-blend-mode: normal;
   outline: none;
}
.chooseRoom {
  position: absolute;
  right: 22px;
  top: 6px;
  bottom: 8px;
    width: 85%;
 outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* or 137% */

  display: flex;
  align-items: center;
  text-align: right;

  /* color/blue_dark_50% */

  color: #7f8c98;
}
.searchitem{
  outline: none;
}
</style>

