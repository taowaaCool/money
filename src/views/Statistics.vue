<template>
    <layout>
        <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
        <div>
            type:{{type}}
            <br>
            interval: {{interval}}
        </div>
    </layout>
</template>

<style lang='scss' scoped>
    ::v-deep .type-tabs-item {
        background-color: white;

        &.selected {
            background-color: #c4c4c4;

            &::after {
                display: none;
            }
        }
    }
</style>

<script lang='ts'>
  import Types from '@/components/Money/Types.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';

  @Component({
    components: {Tabs, Types},
  })
  export default class Statistics extends Vue {
    type = '+';
    interval = 'day';
    typeList = [
      {text: '支出', value: '-'},
      {text: '收入', value: '+'}
    ];
    intervalList = [
      {text: '按月', value: 'month'},
      {text: '按周', value: 'week'},
      {text: '按天', value: 'day'},
    ];
  }
</script>