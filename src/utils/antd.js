
import {
    message, Button, Layout, Menu, Breadcrumb, Input, List, Avatar, Spin, Alert, Table, Tag, Space, ConfigProvider, Row, Col, Slider, Select, Dropdown, Tabs,
    Divider,Progress,Card,PageHeader ,BackTop
} from 'ant-design-vue';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { TextArea } = Input;
export const useAntd = (app) => {
    app.config.globalProperties.$message = message;
    app.use(Button).use(Layout).use(Menu).use(Breadcrumb).use(Input).use(List).use(Avatar)
        .use(Spin).use(Alert).use(Table).use(Tag).use(Space).use(ConfigProvider).use(Row).use(Col).use(Slider).use(Select).use(Dropdown)
        .use(Tabs).use(Divider).use(Progress).use(Card).use(PageHeader).use(BackTop)
    // .use(SubMenu).use(Header).use(Content).use(Sider).use(TextArea)
}
