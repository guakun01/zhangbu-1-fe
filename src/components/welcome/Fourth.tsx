import s from './Welcome.module.scss';
import winter from '../../assets/icons/winter.svg';

export const Fourth = () => (
    <div class={s.card}>
      <img src={winter} class={s.winter} alt="" />
      <h2>日暮苍山远，天寒白屋贫。<br />柴门闻犬吠，风雪夜归人。</h2>
    </div>
)

Fourth.displayName = 'Fourth';