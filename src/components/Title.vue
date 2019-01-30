<template>
  <div>
    <h1>{{ title }} {{ message }}</h1>
    <div>{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["title", "message", "description"]
};
</script>
