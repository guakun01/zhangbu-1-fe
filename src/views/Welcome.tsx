import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss';
import logo from '../assets/icons/dragon-fruit.svg';

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <header>
        <img src={logo} class={s.dragonFriut} alt="" />
        <h1>账簿</h1>
      </header>
      <main><RouterView></RouterView></main>
    </div>
      
  }
})