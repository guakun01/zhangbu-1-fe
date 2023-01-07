import {defineComponent, PropType} from 'vue';
import s from './Tabs.module.scss';

export const Tabs = defineComponent({
  props: {
    classPrefix: {
      type: String as PropType<string>,
    },
    selected: {
      type: String as PropType<string>
    },
  },
  emits: ['update:selected'],
  setup: (props, context) => {

    return () => {

      let tabList = context.slots.default?.();
      if (!tabList) return () => null;
      for (let i = 0; i < tabList.length; i++) {
        if (tabList[i].type !== Tab) {
          throw new Error('Tabs only accepts <Tab> as children')
        }
      }

      const cp = props.classPrefix;

      return <div class={[s.tabs, cp + '_tabs']}>
        <ol class={[s.tabs_nav, cp + '_tabs_nav']}>
          {tabList.map(tab => {
            return <li
              class={[
                tab.props?.name === props.selected ? [s.selected, cp + '_selected'] : '',
                cp + '_tabs_nav_item'
              ]}
              onClick={() => context.emit('update:selected', tab.props?.name)}
            >
              {tab.props?.name}
            </li>;
          })}
        </ol>
        <div>
          {tabList.find(tab => tab.props?.name === props.selected)}
        </div>
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

