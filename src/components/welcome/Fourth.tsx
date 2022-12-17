import s from './Welcome.module.scss';

export const Fourth = () => (
    <div class={s.card}>
      <svg>
        <use xlinkHref='#winter'></use>
      </svg>
      <h2>日暮苍山远，天寒白屋贫。<br />柴门闻犬吠，风雪夜归人。</h2>
    </div>
)

Fourth.displayName = 'Fourth';