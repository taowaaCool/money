<template>
    <layout>
        <ol class="tags">
            <li>
                <span>衣</span>
                <Icon name="right"></Icon>
            </li>
            <li>
                <span>食</span>
                <Icon name="right"></Icon>
            </li>
            <li>
                <span>住</span>
                <Icon name="right"></Icon>
            </li>
            <li>
                <span>行</span>
                <Icon name="right"></Icon>
            </li>
        </ol>
        <div>
            <button>新建标签</button>
        </div>
    </layout>
</template>

<script lang="ts">
  import Icon from '@/components/Icon.vue';

  export default {
    name: 'Labels',
    components: {Icon},
  };
</script>

<style lang="scss" scoped>

</style>