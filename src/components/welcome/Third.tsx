import { defineComponent } from 'vue';
import s from './First.module.scss';
import autumn from '../../assets/icons/autumn.svg';
import { RouterLink } from 'vue-router';

export const Third = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <div class={s.card}>
        <img src={autumn} alt="" />
        <h2>东篱把酒黄昏后，有暗香盈袖。<br/>莫道不销魂，帘卷西风，人比黄花瘦。</h2>
      </div>
      <div class={s.action}>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/welcome/4">下一页</RouterLink>
        <RouterLink class={s.skip} to="/start">跳过</RouterLink>
      </div>
    </div>
  }
});