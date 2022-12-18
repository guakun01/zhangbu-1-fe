import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRouter, useRoute } from 'vue-router';
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';
import s from './Welcome.module.scss';

const pushMapper: Record<string, string> = {
  'Welcome1': '/welcome/2',
  'Welcome2': '/welcome/3',
  'Welcome3': '/welcome/4',
  'Welcome4': '/start',
}

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLDivElement>();
    const route = useRoute();
    const router = useRouter();
    const { swiping, distance, direction } = useSwipe(main, {
      beforeStart: e => e.preventDefault()
    });

    const push = throttle(() => {
      const routeName = (route.name || 'Welcome1').toString();
      router.push(pushMapper[routeName]);
    }, 300)

    watchEffect(() => {
      if (swiping && direction.value == 'left') {
        push();
      }
    })


    type Y = { Component: VNode, route: RouteLocationNormalizedLoaded };
    return () => <div class={s.wrapper}>
      <header>
        <svg>
          <use xlinkHref='#dragon-fruit'></use>
        </svg>
        <h1>账簿</h1>
      </header>
      <main ref={main}>
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