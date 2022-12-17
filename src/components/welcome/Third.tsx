import s from './Welcome.module.scss';
import autumn from '../../assets/icons/autumn.svg';

export const Third = () => (
    <div class={s.card}>
      <img src={autumn} class={s.autumn} alt="" />
      <h2>东篱把酒黄昏后，有暗香盈袖。<br />莫道不销魂，帘卷西风，人比黄花瘦。</h2>
    </div>
)

Third.displayName = 'Third';