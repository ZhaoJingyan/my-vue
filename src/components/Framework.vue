<template>
  <Layout>
    <DynamicHeader></DynamicHeader>
    <Layout :style="{ padding: '0 50px' }">
      <Breadcrumb :style="{ margin: '16px 0' }">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb>
      <Content
        :style="{ padding: '24px 0', minHeight: '280px', background: '#fff' }"
      >
        <Layout>
          <Sider hide-trigger :style="{ background: '#fff' }">
            <AsyncMenu></AsyncMenu>
          </Sider>
          <Content
            :style="{ padding: '24px', minHeight: '280px', background: '#fff' }"
          >
            <router-view></router-view>
          </Content>
        </Layout>
      </Content>
    </Layout>
    <AsyncFooter></AsyncFooter>
  </Layout>
</template>

<script>
import AsyncMenu from "@/components/AsyncMenu.vue";
import AsyncFooter from "@/components/AsyncFooter.vue";
import DynamicHeader from "@/components/DynamicHeader.vue";
/*
 框架控件，负责总体布局
*/
export default {
  name: "Framework",
  components: {
    AsyncMenu,
    AsyncFooter,
    DynamicHeader
  }
};
</script>
