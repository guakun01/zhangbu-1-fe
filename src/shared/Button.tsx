import {defineComponent, PropType} from 'vue';
import s from './Button.module.scss';

interface Props {
  onClick?: (e: MouseEvent) => void
}

export const Button = defineComponent({
  props: {
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
    level: {
      type: String as PropType<'normal' | 'important' | 'danger'>,
      default: 'important',
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
    }
  },
  setup: (props, context) => {
    return () => (
      <button type={props.type} class={[s.button, s[props.level]]}>{context.slots.default?.()}</button>
    )
  }
})