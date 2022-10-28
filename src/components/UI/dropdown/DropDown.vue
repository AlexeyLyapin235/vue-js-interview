<template>
  <v-select
    v-model="value"
    :items="items"
    clearable
    label="Filter by country"
  ></v-select>
</template>

<script>
export default {
  name: "DropDown",
  inheritAttrs: false,
  props: {
    modelValue: String,
    items: Array,
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style></style>
