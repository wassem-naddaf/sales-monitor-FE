<template>
  <div class="c-date-range-filter">
    <div class="c-date-range-filter__start-date">
      <label for="start-date">Start date:</label>
      <input
        v-model="date.start"
        type="date"
        id="start-date"
        @input="handleRangeChange"
      />
    </div>
    <div class="c-date-range-filter__end-date">
      <label for="end-date">End date:</label>
      <input
        v-model="date.end"
        type="date"
        id="end-date"
        @input="handleRangeChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: {},
    };
  },
  methods: {
    handleRangeChange() {
      if (this.date.start && this.date.end) {
        this.$emit("input", this.date);
      }
    },
  },
};
</script>
