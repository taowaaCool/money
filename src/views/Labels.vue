<template>
    <layout>
        <ol class="tags">
            <li v-for="tag in tags" :key="tag">
                <span>{{tag}}</span>
                <Icon name="right"></Icon>
            </li>
        </ol>
        <div class="createTag-wrapper">
            <button class="createTag" @click="createTag">新建标签</button>
        </div>
    </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/model/tagListModel';

  tagListModel.fetch();
  @Component
  export default class Labels extends Vue {
    tags = tagListModel.data;

    createTag() {
      const name = window.prompt('请输入标签名');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复了');
        }else if(message === 'success') {
          window.alert('添加成功了')
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
    .tags {
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

    .createTag {
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