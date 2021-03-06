<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { mapGetters } from "vuex";
use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",
  props: {
    dateRange: {
      type: Object,
      default: () => {
        return {
          start: "",
          end: "",
        };
      },
    },
  },
  components: {
    VChart,
  },

  computed: {
    ...mapGetters("teamPerformance", ["getFilteredPerformanceData"]),
    chartData() {
      return this.getFilteredPerformanceData(this.dateRange);
    },
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 0,
          formatter: function (params) {
            return `<div class="c-chart__tooltip">
              <p><b>${params[0].name}</b></p>
              <div>
                <span>${params[0].marker}</span>
                <span>Team Performance index ${params[0].value} %</span>
              </div>
            </div>`;
          },
        },
        visualMap: {
          show: true,
          dimension: 1,
          bottom: 20,
          right: 5,
          pieces: [
            {
              min: 0,
              max: 50,
              color: "red",
              label: "0 - 50",
            },
            {
              min: 50,
              max: 80,
              color: "orange",
              label: "50 - 80",
            },
            {
              min: 80,
              max: 100,
              color: "green",
              label: "80 - 100",
            },
          ],
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
