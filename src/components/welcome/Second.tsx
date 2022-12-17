import s from './Welcome.module.scss';

export const Second = () => (
    <div class={s.card}>
      <svg>
        <use xlinkHref='#summer'></use>
      </svg>
      <h2>暑雨初过爽气清，玉波荡漾画桥平。<br />穿帘小燕双双好，泛水闲鸥个个轻。</h2>
    </div>
)

Second.displayName = 'Second';