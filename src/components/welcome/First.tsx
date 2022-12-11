import s from './WelcomeLayout.module.scss';
import spring from '../../assets/icons/spring.svg';
import { WelcomeLayout } from './WelcomeLayout';
import { RouterLink } from 'vue-router';

export const First = () => (
  <WelcomeLayout >
    {{
      icon: () => <img src={spring} class={s.spring} alt="" />,
      title: () => <h2>燕草如碧丝，秦桑低绿枝。<br /> 当君怀归日，是妾断肠时。</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/welcome/2">下一页</RouterLink>
        <RouterLink class={s.skip} to="/start">跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
)

First.displayName = 'First';
