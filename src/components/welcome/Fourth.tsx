import { defineComponent } from 'vue';
import s from './First.module.scss';
import winter from '../../assets/icons/winter.svg';
import { RouterLink } from 'vue-router';

export const Fourth = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <div class={s.card}>
        <img src={winter} alt="" />
        <h2>日暮苍山远，天寒白屋贫。<br />柴门闻犬吠，风雪夜归人。</h2>
      </div>
      <div class={s.action}>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/start">完成</RouterLink>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
      </div>
    </div>
  }
});