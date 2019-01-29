<template>
  <Menu
    :active-name="activeName"
    theme="light"
    width="auto"
    :open-names="['1']"
    @on-select="navigateTo"
  >
    <MenuItem name="home"> <Icon type="md-home" />首页 </MenuItem>
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>会计部人行对账
      </template>
      <MenuItem name="accountBalance-filesUpload">
        <Icon type="md-cloud-upload" />文件导入
      </MenuItem>
      <MenuItem name="accountBalance">
        <Icon type="ios-clipboard" />对账查询
      </MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-keypad"></Icon>个人部理财报表
      </template>
      <MenuItem name="2-1"> <Icon type="md-cloud-upload" />文件导入</MenuItem>
      <MenuItem name="2-2"> <Icon type="ios-clipboard" />数据查询</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: "AsyncMenu",
  computed: {
    activeName() {
      return this.$route.name;
    }
  },
  methods: {
    navigateTo(name) {
      //console.log(name)
      //console.log(this.$route);
      this.$router.push({ name });
    }
  }
};
</script>
