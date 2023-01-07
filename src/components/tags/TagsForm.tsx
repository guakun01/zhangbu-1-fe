import {defineComponent, PropType, reactive, toRaw} from 'vue';
import s from './Tags.module.scss';
import {Button} from "../../shared/Button";
import {FData, Rules, validate} from "../../shared/valadate";
import {Form, FormItem} from "../../shared/Form";

export const TagsForm = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })

    const errors = reactive<{ [k in keyof FData]?: string[] }>({});

    const onSubmit = (e: Event) => {
      console.log(toRaw(formData));

      const rules: Rules<typeof formData> = [
        {key: 'name', type: 'required', message: '请输入标签名'},
        {key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '标签名长度为1-4个字符'},
        {key: 'sign', type: 'required', message: '请选择标签图标'},
      ]
      Object.assign(errors, {
        name: undefined,
        sign: undefined,
      })

      Object.assign(errors, validate(formData, rules));
      console.error(toRaw(errors));

      e.preventDefault();
    }

    return () => <Form onSubmit={onSubmit}>
      <FormItem
        label="标签名"
        type="text"
        v-model={formData.name}
        error={errors['name']?.[0]}/>

      <FormItem
        label={'符号' + formData.sign}
        type="emojiSelect"
        v-model={formData.sign}
        error={errors['sign']?.[0]}/>

      <FormItem>
        <p class={s.tips}>记帐时长按标签即可进行编辑</p>
      </FormItem>

      <FormItem>
        <Button class={[s.formItem, s.button]}>确定</Button>
      </FormItem>
    </Form>
  }
})
