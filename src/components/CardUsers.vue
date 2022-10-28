<template>
  <v-card max-width="200" class="mx-auto">
    <v-list three-line>
        <template v-for="item in users">
            <transition name="slide-fade">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>
        

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar @click="openModal(item.country)">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </transition>
    </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CardUsers",
  props: {
    users: Array,
  },
  methods: {
    ...mapMutations({
      openDialog: "openDialog",
      setDialogInfo: "setDialogInfo",
    }),
    openModal(item) {
      this.openDialog(true);
      this.setDialogInfo(item);
    },
  },
  computed: {
    ...mapState({
      dialog: (state) => state.dialog,
    }),
  },

};
</script>

<style>
.slide-fade-enter-active {
  transition: all 1.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
