import {defineComponent, PropType, reactive, toRaw} from 'vue';
import s from './Tags.module.scss';
import {MainLayout} from "../../layouts/MainLayout";
import {Icon} from "../../shared/Icon";
import {Button} from "../../shared/Button";
import {EmojiSelect} from "../../shared/EmojiSelect";
import {FData, Rules, validate} from "../../shared/valadate";

export const TagsCreate = defineComponent({

  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })

    const errors = reactive<{ [k in keyof FData]?: string[] }>({});

    const onSubmit = (e: Event) => {
      console.log(toRaw(formData));

      const rules: Rules<typeof formData> = [
        {key: 'name', type: 'required', message: '请输入标签名' },
        {key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '标签名长度为1-4个字符' },
        {key: 'sign', type: 'required', message: '请选择标签图标' },
      ]
      Object.assign(errors, {
        name: undefined,
        sign: undefined,
      })

      Object.assign(errors, validate(formData, rules));
      console.error(toRaw(errors));

      e.preventDefault();
    }

    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="left" class={s.nav_icon} onClick={() => {
        }}/>,
        default: () => <>
          <form class={s.form} onSubmit={onSubmit}>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input v-model={formData.name} class={[s.formItem, s.input, s.error]} type="text"
                         placeholder="2到4个汉字"/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>{errors['name']? errors['name'][0] : <span>&nbsp;</span>}</span>
                </div>
              </label>
            </div>

            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号 {formData.sign}</span>
                <div class={s.formItem_value}>
                  <EmojiSelect class={[s.formItem, s.error]}
                               v-model={formData.sign}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>{errors['sign']? errors['sign'][0] : <span>&nbsp;</span>}</span>
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
