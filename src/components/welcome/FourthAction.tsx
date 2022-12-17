import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';

export const FourthAction = () => (
    <div class={s.action}>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/start">完成</RouterLink>
        <RouterLink class={s.skip} to="/start">跳过</RouterLink>
    </div>
)

FourthAction.displayName = 'SecondAction';
