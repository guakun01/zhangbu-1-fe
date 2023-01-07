import {defineComponent, PropType, reactive} from 'vue';
import s from './SignInPage.module.scss';
import {MainLayout} from "../layouts/MainLayout";
import {Icon} from "../shared/Icon";
import {Form, FormItem} from "../shared/Form";
import {Button} from "../shared/Button";
import {validate} from "../shared/valadate";

export const SignInPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive({
      email: '',
      code: '',
    });

    const errors = reactive({
      email: [],
      code: [],
    })

    const onSubmit = (e: Event) => {
      e.preventDefault();
      Object.assign(errors, { email: [], code: [], })
      Object.assign(errors, validate(formData, [
        {key: 'email', type: 'required', message: '请输入邮箱'},
        {key: 'email', type: 'pattern', regex: /.+@.+/, message: '请输入正确的邮箱'},
        {key: 'code', type: 'required', message: '请输入正确的验证码'},
      ]));
    }

    return () => <MainLayout>{{
      title: () => '登录',
      icon: () => <Icon name="left" class={s.nav_icon} onClick={() => {
      }}/>,
      default: () => <>
        <div class={s.wrapper}>
          <div class={s.logo} >
            <Icon name="dragon-fruit" class={s.icon}/>
            <h1 class={s.appName}>火龙果记账</h1>
          </div>
          <Form onSubmit={onSubmit}>
            <FormItem
              v-model={formData.email} error={errors.email?.[0]} label='邮箱地址' type='text'
              placeholder='请输入邮箱地址, 然后发送验证码'/>
            <FormItem
              v-model={formData.code} error={errors.code?.[0]} label='验证码' type='validationCode'
              placeholder='请输入六位数'
            />
            <FormItem style={{paddingTop: '46px'}}>
              <Button> 登录 </Button>
            </FormItem>
          </Form>
        </div>

      </>,
    }}</MainLayout>
  }
})
