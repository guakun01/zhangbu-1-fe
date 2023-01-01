import {defineComponent, PropType} from 'vue';
import s from './Overlay.module.scss';

export const Overlay = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        return () => (
            <div class={s.wrapper}>overlay</div>
        )
    }
})
