import s from './WelcomeLayout.module.scss';
import summer from '../../assets/icons/summer.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={summer} alt="" />,
      title: () => <h2>暑雨初过爽气清，玉波荡漾画桥平。<br />穿帘小燕双双好，泛水闲鸥个个轻。</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/welcome/3">下一页</RouterLink>
        <RouterLink class={s.skip} to="/start">跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
)

Second.displayName = 'Second';