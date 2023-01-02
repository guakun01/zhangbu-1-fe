import { defineComponent, PropType } from 'vue';
import s from './Icon.module.scss';

export type IconName = 'add' | 'autumn' | 'dragon-fruit' | 'spring' | 'summer' | 'winter'
    | 'menu' | 'charts' | 'export' | 'kind' | 'notify' | 'left'

export const Icon = defineComponent({
    props: {
        name: {
            type: String as PropType<IconName>
        },
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>
        }
    },
    setup: (props, context) => {
        return () => <svg class={s.icon} onClick={props.onClick}><use xlinkHref={"#" + props.name}></use></svg>
    }
})