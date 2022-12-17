import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';

export const FirstAction = () => (
    <div class={s.action}>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/welcome/2">下一页</RouterLink>
        <RouterLink class={s.skip} to="/start">跳过</RouterLink>
    </div>
)

FirstAction.displayName = 'FirstAction';
