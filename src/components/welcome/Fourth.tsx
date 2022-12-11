import s from './WelcomeLayout.module.scss';
import winter from '../../assets/icons/winter.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Fourth = () => (
  <WelcomeLayout >
    {{
      icon: () => <img src={winter} alt="" />,
      title: () => <h2>日暮苍山远，天寒白屋贫。<br />柴门闻犬吠，风雪夜归人。</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        <RouterLink class={s.next} to="/start">完成</RouterLink>
        <RouterLink class={s.fake} to="/start">跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
)

Fourth.displayName = 'Fourth';