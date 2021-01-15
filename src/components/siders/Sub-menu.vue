<template functional>
  <a-sub-menu :key="props.menuInfo.name" >
    <template v-slot:title>
        <span >
             <user-outlined />
            <span>{{ props.menuInfo.name +','+props.menuInfo.subs.length}}</span>
        </span>
    </template>
    <template v-for="item in props.menuInfo.subs">
      <a-menu-item
        v-if="!item.subs.length"
        :key="item.key">
        <span>{{ item.name }}</span>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 'SubMenu',
  props: ['menuInfo']
}
</script>