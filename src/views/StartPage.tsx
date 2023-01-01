import {defineComponent, PropType, ref} from 'vue';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import { Icon } from '../shared/Icon';
import { Navbar } from '../shared/Navbar';
import s from './StartPage.module.scss';
import {Overlay} from "../shared/Overlay";
export const StartPage = defineComponent({
    setup: (props, context) => {
        const refOverlayVisible = ref(true);

        const onClickMenu = () => {
            console.log('x');
            refOverlayVisible.value = !refOverlayVisible.value
        }
        return () => (
            <div>
                <Navbar>{
                    {
                        default: () => '使用火龙果',
                        icon: () => <Icon name="menu" class={s.nav_icon} onClick={onClickMenu} />
                    }
                }</Navbar>
                <Center class={s.dragon_fruit_wrapper}><Icon name='dragon-fruit' class={s.dragon_fruit} /></Center>
                <div class={s.button_wrapper}>
                    <Button class={s.button}>记一笔</Button>
                </div>
                <FloatButton iconName='add' />
                {refOverlayVisible.value
                    && <Overlay onClose={() => {refOverlayVisible.value = false}} />}
            </div>
        )
    }
})