<template>
  <div class="c-text-filter">
    <input v-model="val" :placeholder="placeholder" type="text" />
    <button v-if="clearable" @click="clearField">clear</button>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "search for a user",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      val: "",
    };
  },
  watch: {
    val() {
      this.handleValChange();
    },
  },
  created() {
    const url = new URL(window.location);
    this.val = url.searchParams.get("filter");
  },
  methods: {
    getURL() {
      const url = new URL(window.location);
      if (this.val) {
        url.searchParams.set('filter', this.val);
        return url;
      }
      url.searchParams.delete('filter');
      return url;
    },
    clearField() {
      this.val = "";
      this.handleValChange();
    },
    handleValChange() {
      this.$emit("input", this.val);
      window.history.pushState(null, "", this.getURL());
    },
  },
};
</script>
