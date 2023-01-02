import {defineComponent, PropType} from 'vue';
import s from './TagsPage.module.scss';

export const TagsPage = defineComponent({
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
