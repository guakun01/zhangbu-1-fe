import {defineComponent, PropType} from 'vue';
import s from './TagsPage.module.scss';
import {RouterView} from "vue-router";

export const TagsPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <RouterView />
    )
  }
})
