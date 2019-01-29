<template>
    <div>
        <Title title="Upload Account Files"></Title>
        <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>

    </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
    name: 'AccountFilesUploadView',
    components:{
        Title
    }
}
</script>



