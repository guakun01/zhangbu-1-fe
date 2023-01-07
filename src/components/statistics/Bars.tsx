import {computed, defineComponent, PropType, reactive} from 'vue';
import s from './Bars.module.scss';

export const Bars = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const data3 = reactive([
      {tag: {id: 1, name: '房租', sign: '🚹'}, amount: '2,999'},
      {tag: {id: 2, name: '餐饮', sign: '🐰'}, amount: '1,999'},
      {tag: {id: 3, name: '交通', sign: '🚗'}, amount: '15,999'},
      {tag: {id: 4, name: '购物', sign: '🛍'}, amount: '99,999'},
      {tag: {id: 5, name: '娱乐', sign: '🎮'}, amount: '23,999'},
      {tag: {id: 6, name: '医疗', sign: '🏥'}, amount: '91,999'},
      {tag: {id: 7, name: '学习', sign: '📚'}, amount: '132,999'},
      {tag: {id: 8, name: '其他', sign: '🤔'}, amount: '21,999'},
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

    return () => (
      <div class={s.wrapper}>
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
    )
  }
})
