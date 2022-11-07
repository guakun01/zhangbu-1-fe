import { defineComponent } from 'vue';
import s from './First.module.scss';
import spring from '../../assets/icons/spring.svg';
import { RouterLink } from 'vue-router';

export const First = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <div class={s.card}>
        <img src={spring} class={s.spring} alt="" />
        <h2>燕草如碧丝，秦桑低绿枝。<br /> 当君怀归日，是妾断肠时。</h2>
      </div>
      <div class={s.action}>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/welcome/2">下一页</RouterLink>
        <RouterLink class={s.skip} to="/start">跳过</RouterLink>
      </div>
    </div>
  }
})