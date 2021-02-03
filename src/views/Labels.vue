<template>
    <layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon name="right"></Icon>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" @click="createTag">新建标签</Button>
        </div>
    </layout>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import TagHelper from '@/mixins/TagHelper';
  import {mixins} from 'vue-class-component';

  @Component({
    components: {Button},
    mixins: [TagHelper],
  })
  export default class Labels extends mixins(TagHelper) {
    get tags() {
      return this.$store.state.tagList;
    }

    beforeCreate() {
      this.$store.commit('fetchTags');
    }
  };
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        padding-left: 16px;

        > .tag {
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