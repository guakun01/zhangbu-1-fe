import {defineComponent, PropType, reactive, toRaw} from 'vue';
import s from './Tags.module.scss';
import {MainLayout} from "../../layouts/MainLayout";
import {Icon} from "../../shared/Icon";
import {Button} from "../../shared/Button";
import {EmojiSelect} from "../../shared/EmojiSelect";
import {FData, Rules, validate} from "../../shared/valadate";
import {TagsForm} from "./TagsForm";

export const TagsCreate = defineComponent({

  setup: (props, context) => {
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="left" class={s.nav_icon} onClick={() => {
        }}/>,
        default: () => <TagsForm />,
      }}</MainLayout>
    )
  }
})
