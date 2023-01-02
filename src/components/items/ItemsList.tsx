import { defineComponent, PropType } from 'vue';
import s from './ItemsList.module.scss';
export const ItemsList = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        return () => (
            <div class={s.wrapper}>hi, from item list</div>
        )
    }
})
