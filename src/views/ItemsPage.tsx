import { defineComponent, PropType } from 'vue';
import s from './ItemsPage.module.scss';
import {RouterView} from "vue-router";
export const ItemsPage = defineComponent({
    setup: (props, context) => {
        return () => (
          <RouterView />
        )
    }
})
