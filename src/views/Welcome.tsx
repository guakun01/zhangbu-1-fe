import { defineComponent, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import s from './Welcome.module.scss';

export const Welcome = defineComponent({
  setup: (props, context) => {
    type Y = { Component: VNode, route: RouteLocationNormalizedLoaded };
    return () => <div class={s.wrapper}>
      <header>
        <svg>
          <use xlinkHref='#dragon-fruit'></use>
        </svg>
        <h1>账簿</h1>
      </header>
      <main>
        <RouterView name="main">
          {({ Component: X, route }: Y) =>
            <Transition 
              enterFromClass={s.slide_fade_enter_from}
              enterActiveClass={s.slide_fade_enter_active}
              leaveToClass={s.slide_fade_leave_to}
              leaveActiveClass={s.slide_fade_leave_active}>
                {X}
            </Transition>
          }
        </RouterView>
      </main>
      <footer>
        <RouterView name="footer" />
      </footer>
    </div>

  }
})