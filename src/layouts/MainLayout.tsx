import {defineComponent} from 'vue';
import s from './MainLayout.module.scss';
import {Navbar} from "../shared/Navbar";

export const MainLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <Navbar class={s.navbar}>{
          {
            default: () => context.slots.title?.(),
            icon: () => context.slots.icon?.(),
          }
        }</Navbar>
        {context.slots.default?.()}
      </div>
    )
  }
})
