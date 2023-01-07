import {defineComponent} from 'vue';
import {TimeTabsLayout} from "../../layouts/TimeTabsLayout";
import {ItemSummary} from "./ItemSummary";

export const ItemsList = defineComponent({

  setup: (props, context) => {
    return () => <TimeTabsLayout component={ItemSummary} />
  }
})
