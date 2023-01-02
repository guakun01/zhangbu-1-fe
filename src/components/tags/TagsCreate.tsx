import {defineComponent, PropType} from 'vue';
import s from './TagsCreate.module.scss';

export const TagsCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}></div>
    )
  }
})
