import {defineComponent, PropType} from 'vue';
import s from './ItemSummary.module.scss';
import {Time} from "../../shared/time";
import {FloatButton} from "../../shared/FloatButton";

export const ItemSummary = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
    },
    endDate: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const t = new Time(new Date(2000, 0, 31, 0, 0, 0, 0));
    console.log(t.add(1, 'month'));
    return () => (
      <div class={s.wrapper}>
        <ul class={s.total}>
          <li><span>收入</span><span>{Number.MAX_VALUE}</span></li>
          <li><span>支出</span><span>150,000</span></li>
          <li><span>净收入</span><span>{Number.MAX_VALUE - 150000}</span></li>
        </ul>

        <ol class={s.list}>
          <li>
            <div class={s.sign}><span>🍢</span></div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥50,000 </span>
              </div>
              <div class={s.time}>
                2023-05-19 12:00
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}><span>🍢</span></div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥50,000 </span>
              </div>
              <div class={s.time}>
                2023-05-19 12:00
              </div>
            </div>
          </li><li>
            <div class={s.sign}><span>🍢</span></div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥50,000 </span>
              </div>
              <div class={s.time}>
                2023-05-19 12:00
              </div>
            </div>
          </li><li>
            <div class={s.sign}><span>🍢</span></div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥50,000 </span>
              </div>
              <div class={s.time}>
                2023-05-19 12:00
              </div>
            </div>
          </li>
        </ol>
        <div class={s.more}>向下滑动加载更多</div>
        <FloatButton iconName='add'/>
      </div>
    )
  }
})
