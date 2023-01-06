import {defineComponent, PropType, ref} from 'vue';
import {MainLayout} from "../../layouts/MainLayout";
import {Icon} from "../../shared/Icon";
import {Tab, Tabs} from "../../shared/Tabs";
import {ItemSummary} from "./ItemSummary";

export const ItemsList = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refSelected = ref('本月');

    return () => (
      <MainLayout>{
        {
          title: () => '火龙果记账',
          icon: () => <Icon name='menu' />,
          default: () => (
            <Tabs v-model:selected={refSelected.value} classPrefix='customerTags'>
              <Tab name='本月'>
                <ItemSummary startDate="2019-12-31" endDate="2022-12-7" />
              </Tab>
              <Tab name='上月'>
                <ItemSummary />
              </Tab>
              <Tab name='今年'>
                <ItemSummary />
              </Tab>
              <Tab name='自定起始时间'>
                <ItemSummary />
              </Tab>
            </Tabs>
          )
        }
      }</MainLayout>
    )
  }
})
