import Vue from 'vue'
import {
  Button,
  Input,
  Switch,
  Progress,
  Form,
  FormItem,
  Icon,
  Upload,
  Col,
  Row,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Message
} from 'iview'
import 'iview/dist/styles/iview.css'

Vue.component('Button', Button)
Vue.component('i-input', Input)
Vue.component('i-switch', Switch)
Vue.component('Progress', Progress)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Icon', Icon)
Vue.component('Upload', Upload)
Vue.component('Row', Row)
Vue.component('i-col', Col)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('DropdownItem', DropdownItem)

Vue.prototype.$Message = Message

export default Vue
