<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" md="4">
        <drop-down v-model="setVal" :items="items"></drop-down>
        <drop-down v-model="setValScore" :items="items1"></drop-down>
      </v-col>

      <v-col cols="12" md="4">
          <h3 v-if="loader">Фильтрация...</h3>
        <card-users  :users="users"></card-users>
      </v-col>
    </v-row>
    <dialog-view
      :dialog="dialog"
      :closeDialog="closeDialog"
      :dialogInfo="dialogInfo"
    ></dialog-view>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import DialogView from "./DialogView.vue";
import DropDown from "./UI/dropdown/DropDown.vue";
import CardUsers from "./CardUsers.vue";
import { usersAp } from "../api/users";
import type { Ref } from "vue";
import { Users } from "../types/types";
import { useStore } from "vuex";

export default defineComponent({
  components: { DropDown, CardUsers, DialogView },
  name: "ContentBlock",
  setup(props, ctx) {
    const items = [
      "russia",
      "usa",
    ];
    const items1 = [
      ">20",
      "<10",
    ];


    const users: Ref<Users[]> = ref([]);
    const store = useStore();
    const count = ref(0);
    const loader: Ref<Boolean> = ref(false);

    onMounted(() => {
      users.value = usersAp;
    });
    const watchVariant = computed(() => store.state.variant);
    const watchVariantAge = computed(() => store.state.variantScore);
    watch(watchVariant, (newVal) => {
      if (newVal !== "") {
        loader.value = true;
        users.value = usersAp;
        users.value = users.value.filter(
          (el: Users) => el.country.toLocaleLowerCase() !== setVal.value
        );
        setTimeout(() => {
          loader.value = false;
        }, 1500);
      }
    });
    watch(watchVariantAge, (newVal) => {
      if (newVal == ">20") {
        loader.value = true;
        users.value = usersAp;
        users.value = users.value.filter((el: Users) => el.age < 20);
        setTimeout(() => {
          loader.value = false;
        }, 1500);
      }
      if (newVal == "<10") {
        loader.value = true;
        users.value = usersAp;
        users.value = users.value.filter((el: Users) => el.age > 10);
        setTimeout(() => {
          loader.value = false;
        }, 1500);
      }
    });
    const dialog = computed({
      get: () => store.state.dialog,
      set: (val) => {
        store.commit("openDialog", val);
      },
    });

    const setVal = computed({
      get: () => store.state.variant,
      set: (val) => {
        store.commit("updateVarian", val);
      },
    });
    const setValScore = computed({
      get: () => store.state.variantScore,
      set: (val) => {
        store.commit("updateVariantScore", val);
      },
    });
    const dialogInfo = computed({
      get: () => store.state.dialogInfo,
      set: (val) => {
        store.commit("updateVarian", val);
      },
    });

    const closeDialog = () => {
      dialog.value = false;
    };
  
    return {
      items,
      users,
      setVal,
      setValScore,
      dialog,
      closeDialog,
      dialogInfo,
      loader,
      items1
      
    };
  },
});
</script>
<style scoped>

</style>
