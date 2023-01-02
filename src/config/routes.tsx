import {RouteRecordRaw} from "vue-router";
import {First} from "../components/welcome/First";
import {FirstAction} from "../components/welcome/FirstAction";
import {Fourth} from "../components/welcome/Fourth";
import {FourthAction} from "../components/welcome/FourthAction";
import {Second} from "../components/welcome/Second";
import {SecondAction} from "../components/welcome/SecondAction";
import {Third} from "../components/welcome/Third";
import {ThirdAction} from "../components/welcome/ThirdAction";
import {StartPage} from "../views/StartPage";
import {Welcome} from "../views/Welcome";
import {ItemsPage} from "../views/ItemsPage";
import {ItemsCreate} from "../components/item/ItemsCreate";
import {ItemsList} from "../components/item/ItemsList";

export const routes: RouteRecordRaw[] = [
  {path: '/', redirect: '/welcome'},
  {
    path: '/welcome', component: Welcome, children: [
      {path: '', redirect: '/welcome/1'},
      {path: '1', name: 'Welcome1', components: {main: First, footer: FirstAction}},
      {path: '2', name: 'Welcome2', components: {main: Second, footer: SecondAction}},
      {path: '3', name: 'Welcome3', components: {main: Third, footer: ThirdAction}},
      {path: '4', name: 'Welcome4', components: {main: Fourth, footer: FourthAction}},
    ]
  },
  {path: '/start', component: StartPage},
  {
    path: '/item', component: ItemsPage,
    children: [
      {path: '', component: ItemsList},
      {path: 'create', component: ItemsCreate},
    ]
  },
  //tags page routes
  // { path: '/tags', component: TagsPage },
]