import { defineComponent, FunctionalComponent as FC } from 'vue';
import s from './WelcomeLayout.module.scss';
import spring from '../../assets/icons/spring.svg';
import { RouterLink } from 'vue-router';

export const WelcomeLayout: FC = (props, context) => {
  const { slots: { icon, title, buttons } } = context;
  return <div class={s.wrapper}>
    <div class={s.card}>
      {icon?.()}
      {title?.()}
    </div>
    <div class={s.action}>
      {buttons?.()}
    </div>
  </div>
}

WelcomeLayout.displayName = 'WelcomeLayout';