import { defineComponent } from 'vue';
import s from './First.module.scss';
import summer from '../../assets/icons/summer.svg';
import { RouterLink } from 'vue-router';

export const Second = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <div class={s.card}>
        <img src={summer} alt="" />
        <h2>暑雨初过爽气清，玉波荡漾画桥平。<br />穿帘小燕双双好，泛水闲鸥个个轻。</h2>
      </div>
      <div class={s.action}>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/welcome/3">下一页</RouterLink>
        <RouterLink class={s.skip} to="/start">跳过</RouterLink>
      </div>
    </div>
  }
});
