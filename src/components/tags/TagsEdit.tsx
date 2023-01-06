import {defineComponent} from 'vue';
import s from './Tags.module.scss';
import {MainLayout} from "../../layouts/MainLayout";
import {Icon} from "../../shared/Icon";
import {Button} from "../../shared/Button";
import {TagsForm} from "./TagsForm";

export const TagsEdit = defineComponent({

  setup: (props, context) => {

    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="left" class={s.nav_icon} onClick={() => {
        }}/>,
        default: () => <>
          <TagsForm/>
          <div class={s.actions}>
            <Button level='danger' class={s.removeTags}>删除标签</Button>
            <Button level='danger' class={s.removeTagsAndItems}>删除标签和记账</Button>
          </div>
        </>,
      }}</MainLayout>
    )
  }

})
