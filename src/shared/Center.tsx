import { defineComponent, PropType } from 'vue';
import s from './Center.module.scss';
const directionMap = {
    '-': 'horizental',
    '|': 'vertical',
    'horizental': 'horizental',
    'vertical': 'vertical',
}
export const Center = defineComponent({
    props: {
         direction: {
            type: String as PropType<keyof typeof directionMap>,
            default: 'horizental'
        }
    },
    setup: (props, context) => {
        const extraClass = directionMap[props.direction];

        return () => (
            <div class={[s.center, s[extraClass]]}>{context.slots.default?.()}</div>
        )
    }
})