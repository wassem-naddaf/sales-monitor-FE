<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <date-range-filter-component @input="handleFilterChange" />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :date-range="dateRange" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import DateRangeFilterComponent from "../components/vue-components/common/date-range-filter.vue";
import { mapActions } from "vuex";

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    DateRangeFilterComponent,
  },
  methods: {
    ...mapActions("teamPerformance", ["fetchPerformanceData"]),
    handleFilterChange(range) {
      this.dateRange = range;
    },
  },
  data () {
    return {
      dateRange: {},
    };
  },
  created() {
    this.fetchPerformanceData();
  },
};
</script>
