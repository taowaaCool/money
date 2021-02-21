<template>
    <layout class="layout-content">
        <Tags @update:value="record.tags=$event"/>
        <div class="notes">
            <FormItem field-name="备注" placeholder="请输入备注" :value.sync="record.notes"/>
        </div>
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';

  // const recordList = recordListModel.fetch();

  @Component({
    components: {Tabs, Tags, FormItem, Types, NumberPad},
  })
  export default class Money extends Vue {

    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    recordTypeList = recordTypeList;

    get recordList() {
      return this.$store.state.recordList;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      if (!this.record.tags || this.record.tags.length === 0) {
        return window.alert('请至少选择一个标签');
      }
      this.$store.commit('createRecord', this.record);
      if (this.$store.state.createRecordError === null) {
        window.alert('已保存');
        this.record.notes = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        padding: 12px 0;
    }
</style>