import s from './Welcome.module.scss';
import summer from '../../assets/icons/summer.svg';

export const Second = () => (
    <div class={s.card}>
      <img src={summer} class={s.summer} alt="" />
      <h2>暑雨初过爽气清，玉波荡漾画桥平。<br />穿帘小燕双双好，泛水闲鸥个个轻。</h2>
    </div>
)

Second.displayName = 'Second';