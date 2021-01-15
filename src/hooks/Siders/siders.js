import { reactive, toRefs } from 'vue'

export const menuList = () => {
  let state = reactive({
    menuLists: [],

  });
  const getList = (callBack) => {
    let timmer = setTimeout(() => {
      state.menuLists = [
        {
          name: "图表",
          url: "/echarts",
          iconType: "iconfont icon-layers"
        },
        {
          name: "基础功能",
          url: "2url",
          iconType: "iconfont icon-user",
          subs: [
            {
              name: "表格2",
              url: "2-1url",
              iconType: "iconfont icon-user",
              subs: [
                {
                  name: "表格",
                  url: "/table",
                  iconType: "iconfont icon-user",
                },

              ],
            },
            {
              name: "todoList",
              url: "/list",
              iconType: "iconfont icon-user",
            },
            {
              name: "Hook",
              url: "/hook",
              iconType: "iconfont icon-user",

            },
          ],
        },
        {
          name: "设置中心",
          url: "3url",
          iconType: "iconfont icon-setting",
          subs: [
            {
              name: "换肤中心",
              url: "/theme",
              iconType: "iconfont icon-user",
            },
            {
              name: "测试",
              url: "/test",
              iconType: "iconfont icon-user",
            },
            {
              name: "404",
              url: "/404",
              iconType: "iconfont icon-user",
            },
            {
              name: "403",
              url: "/403",
              iconType: "iconfont icon-user",
            },
          ],
        },

      ];
      if (callBack) {
        callBack(state.menuLists)
      }
      clearTimeout(timmer);
    }, 500);

  }
  return {
    ...toRefs(state),
    getList
  }
}