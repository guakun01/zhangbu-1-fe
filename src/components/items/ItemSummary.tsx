import {defineComponent, PropType} from 'vue';
import s from './ItemSummary.module.scss';
import {Time} from "../../shared/time";

export const ItemSummary = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
    },
    endDate: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const t = new Time(new Date(2000, 0, 31, 0, 0, 0, 0));
    console.log(t.add(1, 'month'));
    return () => (
      <div class={s.wrapper}>item summary</div>
    )
  }
})
