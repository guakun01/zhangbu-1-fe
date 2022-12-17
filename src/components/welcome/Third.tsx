import s from './Welcome.module.scss';

export const Third = () => (
    <div class={s.card}>
      <svg>
        <use xlinkHref='#autumn'></use>
      </svg>
      <h2>东篱把酒黄昏后，有暗香盈袖。<br />莫道不销魂，帘卷西风，人比黄花瘦。</h2>
    </div>
)

Third.displayName = 'Third';