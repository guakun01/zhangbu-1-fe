import {computed, defineComponent, PropType, ref} from 'vue';
import s from './Form.module.scss';
import {EmojiSelect} from "./EmojiSelect";
import {DatetimePicker, Popup} from "vant";
import {Time} from "./time";
import {Button} from "./Button";

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    }
  },
  setup: (props, context) => {
    return () => (
      <form class={s.form} onSubmit={props.onSubmit}>
        {context.slots.default?.()}
      </form>
    )
  }
})

export const FormItem = defineComponent({
  props: {
    label: {
      type: String as PropType<string>
    },
    modelValue: {
      type: [String, Number,]
    },
    type: {
      type: String as PropType<'text' | 'emojiSelect' | 'date' | 'validationCode' | 'select'>
    },
    placeholder: String,
    error: {
      type: String,
    },
    options: {
      type: Array as PropType<{ text: string, value: string }[]>,
    }
  },
  setup: (props, context) => {

    const refDateVisible = ref(false)

    const content = computed(() => {
      switch (props.type) {
        case 'text':
          return <input
            value={props.modelValue}
            onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
            placeholder={props.placeholder}
            class={[s.formItem, s.input, s.error]}/>
        case 'emojiSelect':
          return <EmojiSelect
            modelValue={props.modelValue?.toString()}
            onUpdateModelValue={(value) => context.emit('update:modelValue', value)}
            class={[s.formItem, s.input, s.error]}/>
        case 'select':
          return <select
            value={props.modelValue}
            onChange={(e: any) => context.emit('update:modelValue', e.target.value)}
            class={[s.formItem, s.select, s.error]}>
            {props.options?.map(option =>
              <option value={option.value}>{option.text}</option>
            )}
          </select>
        case 'validationCode':
          return <>
            <input
              value={props.modelValue}
              onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
              placeholder={props.placeholder}
              class={[s.formItem, s.input, s.validationCodeInput]}/>
            <Button class={[s.formItem, s.button, s.validationCodeButton]}>获取验证码</Button>
          </>
        case 'date':
          return <>
            <input
              placeholder={props.placeholder}
              readonly={true} value={props.modelValue}
              onClick={(e: any) => refDateVisible.value = true}
              class={[s.formItem, s.input, s.error]}/>
            <Popup position='bottom' v-model:show={refDateVisible.value}>
              <DatetimePicker
                value={props.modelValue} type='date' title='选择年月日'
                onConfirm={(date: Date) => {
                  context.emit('update:modelValue', new Time(date).format())
                  refDateVisible.value = false
                }}
                onCancel={() => {
                  refDateVisible.value = false
                }}
              />
            </Popup>
          </>
        case undefined:
          return context.slots.default?.()
      }
    })

    return () => <div class={s.formRow}>
      <label class={s.formLabel}>
        {props.label &&
					<span class={s.formItem_name}> {props.label} </span>
        }
        <div class={s.formItem_value}>
          {content.value}
        </div>
        <div class={s.formItem_errorHint}>
          <span>{props.error ?? (<>&nbsp;</>)}</span>
        </div>
      </label>
    </div>

  }
})
