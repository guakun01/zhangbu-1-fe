import {defineComponent, PropType, ref} from 'vue';
import s from './Charts.module.scss';
import {FormItem} from "../../shared/Form";

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

    return () => (
      <div class={s.wrapper}>
        <FormItem
          label="分类"
          type="select"
          options={[
            { value: 'expense', text: '支出' },
            { value: 'income', text: '收入' },
          ]}
          v-model={refCategory.value}/>

      </div>
    )
  }
})
