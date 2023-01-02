import {defineComponent, PropType} from 'vue';
import s from './TagsEdit.module.scss';

export const TagsEdit = defineComponent({
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
