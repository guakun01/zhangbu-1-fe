import {defineComponent, PropType, ref} from 'vue';
import s from './InputPad.module.scss';
import {Icon} from "../shared/Icon";
import { Time } from "../shared/time";
import {DatetimePicker, Popup} from "vant";

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const now = new Date();
    const refDate = ref<Date>(now);
    const refDatePickerVisible = ref(false);

    const showDatePicker = () => {
      refDatePickerVisible.value = true;
    }
    const hideDatePicker = () => {
      refDatePickerVisible.value = false;
    }

    const setDate = (date: Date) => {
      refDate.value = date;
      hideDatePicker();
    }

    const refAmount = ref('0');
    const appendText = (n: number | string) => {
      const nString = n.toString();
      const dotIndex = refAmount.value.indexOf('.');
      if (refAmount.value.length >= 13) return; // 金额不可以超过13位
      if (dotIndex >= 0 && refAmount.value.length - dotIndex > 2) return; // 小数点后保留两位
      if (nString === '.') {
        if (dotIndex >= 0) return // 小数点只可以输入一次
      } else if (nString === '0') {
        if (dotIndex === -1) { // 不可以输入 00
          if (refAmount.value === '0') return;
        }
      } else {
        if (refAmount.value === '0') {
          refAmount.value = ''
        }
      }

      refAmount.value += nString;
    }

    const buttons = [
      {
        text: '1', onClick: () => {
          appendText(1)
        }
      },
      {
        text: '2', onClick: () => {
          appendText(2)
        }
      },
      {
        text: '3', onClick: () => {
          appendText(3)
        }
      },
      {
        text: '4', onClick: () => {
          appendText(4)
        }
      },
      {
        text: '5', onClick: () => {
          appendText(5)
        }
      },
      {
        text: '6', onClick: () => {
          appendText(6)
        }
      },
      {
        text: '7', onClick: () => {
          appendText(7)
        }
      },
      {
        text: '8', onClick: () => {
          appendText(8)
        }
      },
      {
        text: '9', onClick: () => {
          appendText(9)
        }
      },
      {
        text: '.', onClick: () => {
          appendText('.')
        }
      },
      {
        text: '0', onClick: () => {
          appendText(0)
        }
      },
      {
        text: '清空', onClick: () => {
          refAmount.value = '0'
        }
      },
      {
        text: '提交', onClick: () => {
        }
      },
    ]

    return () => <>
      <div class={s.dateAndAmount}>
        <span class={s.date}>
          <Icon name="date" class={s.icon}/>
          <span>
            <span onClick={showDatePicker}>{new Time(refDate.value).format()}</span>
            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
              <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                              onCancel={hideDatePicker}
                              onConfirm={setDate}/>
            </Popup>
          </span>
          {/*<span><input type="date" value={time().format()} /></span>*/}
        </span>
        <span class={s.amount}>{refAmount.value}</span>
      </div>
      <div class={s.buttons}>{buttons.map(button => <button onClick={button.onClick}>{button.text}</button>)}</div>
    </>
  }
})
