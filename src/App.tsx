import { defineComponent, Fragment, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {

    const refCount = ref(0);

    const addOne = () => {
      refCount.value += 1;
    }

    return () => (
      <Fragment>
        <header>
          领航
          <ul>
            <li><router-link to="/">foo</router-link></li>
            <li><router-link to="/bar">bar</router-link></li>
          </ul>
        </header>
        <div>
          { refCount.value }
          <RouterView></RouterView>
        </div>
        <div>
          <button onClick={addOne}>+1</button>
        </div>
        <footer>
          thanks
        </footer>
      </Fragment>
    )
  }
})