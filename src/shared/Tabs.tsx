import {defineComponent, PropType} from 'vue';
import s from './Tabs.module.scss';

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>
    },
    // onUpdateSelected: {
    //   type: Function as PropType<(name: string) => void>
    // },
  },
  setup: (props, context) => {

    return () => {

      let childList = context.slots.default?.();
      if (!childList) return () => null;
      for (let i = 0; i < childList.length; i++) {
        if (childList[i].type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children')
        }
      }

      return <div class={s.tabs}>
        <ol class={s.tabs_nav}>
          {childList.map(child =>
            <li class={child.props?.name === props.selected ? s.selected : ''}
                // onClick={() => props.onUpdateSelected?.(child.props?.name)}
                onClick={() => context.emit('update:selected', child.props?.name)}
            >
              {child.props?.name}
            </li>)}
        </ol>
      </div>
    }
  }
})


export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>{context.slots.default?.()}</div>
    )
  }
})

