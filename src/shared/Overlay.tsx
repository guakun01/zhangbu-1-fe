import {defineComponent, PropType, ref} from 'vue';
import s from './Overlay.module.scss';
import {Icon} from "./Icon";
import {RouterLink} from "vue-router";

export const Overlay = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        },
        onClose: {
            type: Function as PropType<() => void>
        },
    },
    setup: (props, context) => {
        const close = () => {
            props.onClose?.();
        }
        return () => <>
            <div class={s.mask} onClick={close}></div>
            <div class={s.overlay}>
                <section class={s.current_user}>
                    <h2>未登录用户</h2>
                    <p>点击这里登录</p>
                </section>
                <nav class={s.action_list}>
                    <ul>
                        <li>
                            <RouterLink to="/statistics" class={[s.action, s.icon_statistics]}>
                                <Icon name="charts" class={s.icon} />
                                <span>统计图表</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/export" class={[s.action, s.icon_export]}>
                                <Icon name="export" class={s.icon} />
                                <span>导出数据</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/notify" class={[s.action, s.icon_notify]}>
                                <Icon name="notify" class={s.icon} />
                                <span>记账提醒</span>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    }
})

export const OverlayIcon  = defineComponent({
    setup: (props, context) => {
        const refOverlayVisible = ref(false);
        const onClickMenu = () => {
            refOverlayVisible.value = !refOverlayVisible.value
        }

        return () => <>
          <Icon name="menu" class={s.nav_icon} onClick={onClickMenu}/>
            {refOverlayVisible.value
              && <Overlay onClose={() => {
                  refOverlayVisible.value = false
              }}/>
            }
        </>
    }
})
