import {defineComponent, PropType, reactive} from 'vue';
import s from './TagsCreate.module.scss';
import {MainLayout} from "../../layouts/MainLayout";
import {Icon} from "../../shared/Icon";
import {Button} from "../../shared/Button";

export const TagsCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: 'x',
    })

    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="left" class={s.nav_icon} onClick={() => {
        }}/>,
        default: () => <>
          <form class={s.form}>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input v-model={formData.name} class={[s.formItem, s.input, s.error]} type="text"
                         placeholder="2到4个汉字"/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>

            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号</span>
                <div class={s.formItem_value}>
                  <div class={[s.formItem, s.emojiList, s.error]}>
                    <nav>
                      <span class={s.selected}>表情</span>
                      <span>手势</span>
                      <span>职业</span>
                      <span>衣服</span>
                      <span>动物</span>
                      <span>自然</span>
                      <span>食物</span>
                      <span>运动</span>
                      <span>表情</span>
                      <span>手势</span>
                      <span>职业</span>
                      <span>衣服</span>
                      <span>动物</span>
                      <span>自然</span>
                      <span>食物</span>
                      <span>运动</span>
                    </nav>

                    <ol>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                      <li>😊</li>
                    </ol>
                  </div>


                </div>
              </label>
            </div>

            <p class={s.tips}>记帐时长按标签即可进行编辑</p>

            <div class={s.formRow}>
              <div class={s.formItem_value}>
                <Button class={[s.formItem, s.button]}>确定</Button>
              </div>
            </div>
          </form>
        </>,
      }}</MainLayout>
    )
  }
})
