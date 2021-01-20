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
        <div class="createTag-wrapper">
            <button class="createTag">新建标签</button>
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
    .tags{
        background: white;
        padding-left: 16px;
        > li {
            font-size: 16px;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #e6e6e6;
            border-left: hidden;
            border-top: hidden;
            svg {
                height: 20px;
                width: 20px;
                margin-right: 16px;
                color: #333;
            }
        }
    }
    .createTag{
        background-color: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;
        &-wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 44-16px;
        }
    }
</style>