import {defineComponent, onMounted, PropType, ref} from 'vue';
import s from './Charts.module.scss';
import {FormItem} from "../../shared/Form";
import * as echarts from 'echarts';

export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true,
    },
    endDate: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props, context) => {
    const refCategory = ref('expense');

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

    const refDiv2 = ref<HTMLDivElement>();
    onMounted(() => {
      if (refDiv2.value === undefined) return;
      const myChart = echarts.init(refDiv2.value);
      const options = {
        grid: [
          {left: 0, top: 0, right: 0, bottom: 0},
        ],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
        ]
      }
      myChart.setOption(options)
    })

    return () => (
      <div class={s.wrapper}>
        <FormItem
          label="分类"
          type="select"
          options={[
            {value: 'expense', text: '支出'},
            {value: 'income', text: '收入'},
          ]}
          v-model={refCategory.value}/>

        <div ref={refDiv} class={s.demo}></div>
        <div ref={refDiv2} class={s.demo2}></div>
      </div>
    )
  }
})
