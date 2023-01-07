import {computed, defineComponent, onMounted, PropType, reactive, ref} from 'vue';
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

    const data3 = reactive([
      {tag: {id: 1, name: '房租', sign: '🚹'}, amount: '2,999'},
      {tag: {id: 2, name: '餐饮', sign: '🐰'}, amount: '1,999'},
      {tag: {id: 3, name: '交通', sign: '🚗'}, amount: '1,999'},
      {tag: {id: 4, name: '购物', sign: '🛍'}, amount: '1,999'},
      {tag: {id: 5, name: '娱乐', sign: '🎮'}, amount: '1,999'},
      {tag: {id: 6, name: '医疗', sign: '🏥'}, amount: '1,999'},
      {tag: {id: 7, name: '学习', sign: '📚'}, amount: '1,999'},
      {tag: {id: 8, name: '其他', sign: '🤔'}, amount: '1,999'},
    ]);

    const betterData3 = computed(() => {
      const total = data3
        .reduce(
          (sum, item) =>
            sum + parseFloat(item.amount.replace(',', '')),
          0
        );
      return data3.map(item => {
        const amount = parseFloat(item.amount.replace(',', ''));
        return {
          ...item,
          percentage: Math.round(amount / total * 100) + '%',
        };
      });
    })

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

        <div class={s.demo3}>
          {betterData3.value.map(({tag, amount, percentage}) => {
            return <div class={s.topItem}>
              <div class={s.sign}>{tag.sign}</div>
              <div class={s.bar_wrapper}>
                <div class={s.bar_text}>
                  <span>{tag.name} - {percentage}</span>
                  <span>￥{amount}</span>
                </div>
                <div class={s.bar}>
                  <div class={s.bar_inner}></div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
})
