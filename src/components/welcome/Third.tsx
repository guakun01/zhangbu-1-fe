import s from './WelcomeLayout.module.scss';
import autumn from '../../assets/icons/autumn.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Third = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={autumn} alt="" />,
      title: () => <h2>东篱把酒黄昏后，有暗香盈袖。<br />莫道不销魂，帘卷西风，人比黄花瘦。</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/welcome/4">下一页</RouterLink>
        <RouterLink class={s.skip} to="/start">跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
)

Third.displayName = 'Third';