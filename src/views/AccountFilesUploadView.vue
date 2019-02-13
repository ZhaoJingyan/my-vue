<template>
  <div>
    <Title title="Upload Account Files"></Title>
    <Upload
      multiple
      type="drag"
      action="/file"
      :before-upload="handleBeforeUpload"
      :on-success="handleSuccess"
    >
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
      </div>
    </Upload>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "AccountFilesUploadView",
  components: {
    Title
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log(response);
      console.log(file);
      console.log(fileList);
    },
    handleBeforeUpload() {
      return true;
    }
  }
};
</script>
