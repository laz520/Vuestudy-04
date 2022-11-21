<template>

  <div class="tab-bar-item">
<!--    判断isactive是不是true  ， 不是就显示黑色的样式-->
    <div v-if="!IsActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :class="{ active:IsActive}">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      IsActive: true
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  /*  去除图片底下多余的三个像素*/
  margin-bottom: 2px;
}

.active {
  color: red;
}
</style>