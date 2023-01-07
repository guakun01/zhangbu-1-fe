import {defineComponent} from 'vue';
import {Button} from '../shared/Button';
import {Center} from '../shared/Center';
import {FloatButton} from '../shared/FloatButton';
import {Icon} from '../shared/Icon';
import s from './StartPage.module.scss';
import {RouterLink} from "vue-router";
import {MainLayout} from "../layouts/MainLayout";
import {OverlayIcon} from "../shared/Overlay";

export const StartPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout>{
        {
          title: () => '使用火龙果',
          icon: () => <OverlayIcon />,
          default: () => <>
            <Center class={s.dragon_fruit_wrapper}><Icon name='dragon-fruit' class={s.dragon_fruit}/></Center>
            <div class={s.button_wrapper}>
              <RouterLink to="/items/create">
                <Button class={s.button}>记一笔</Button>
              </RouterLink>
            </div>
            <RouterLink to="/items/create">
              <FloatButton iconName='add'/>
            </RouterLink>
          </>,
        }
      }</MainLayout>
    )
  }
})