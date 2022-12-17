import s from './Welcome.module.scss';
import spring from '../../assets/icons/spring.svg';

export const First = () => (
    <div class={s.card}>
      <img src={spring} class={s.spring} alt="" />
      <h2>燕草如碧丝，秦桑低绿枝。<br /> 当君怀归日，是妾断肠时。</h2>
    </div>
)

First.displayName = 'First';
