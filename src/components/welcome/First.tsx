import s from './Welcome.module.scss';

export const First = () => (
    <div class={s.card}>
      <svg><use xlinkHref='#spring'></use></svg>
      <h2>燕草如碧丝，秦桑低绿枝。<br /> 当君怀归日，是妾断肠时。</h2>
    </div>
)

First.displayName = 'First';
