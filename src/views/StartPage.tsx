import { defineComponent, PropType } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import s from './StartPage.module.scss';
export const StartPage = defineComponent({
    setup: (props, context) => {
        const x = () => { console.log("hi"); }
        return () => (
            <div>
                <div class={s.button_wrapper}>
                    <Button onClick={x} class={s.button}>Test</Button>
                </div>
                <FloatButton />
            </div>
        )
    }
})