import {defineComponent, onMounted, PropType, ref} from 'vue';
import s from './LineChart.module.scss';
import * as echarts from "echarts";

export const LineChart = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {

    const refDiv = ref<HTMLDivElement>();
    onMounted(() => {
      if (refDiv.value === undefined) return;
      const myChart = echarts.init(refDiv.value);
      const options = {
        grid: [
          {left: 40, top: 20, right: 0, bottom: 20},
        ],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
      myChart.setOption(options)
    })

    return () => (
      <div ref={refDiv} class={s.wrapper}></div>
    )
  }
})
