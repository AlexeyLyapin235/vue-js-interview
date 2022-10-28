<template>
  <div class="text-center">
    <v-dialog @click="closeDialog" v-model="dialog" width="500">
      <v-card @click.stop>
        <v-card-title class="text-h5 grey lighten-2"> info </v-card-title>

        <v-card-text>
          {{ dialogInfo }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DialogView",
  props: {
    dialog: {
      type: Boolean,
    },
    info: {
      type: Object,
    },
    closeDialog: {
      type: Function,
    },
    dialogInfo: {
      type: String,
    },
  },
});
</script>
