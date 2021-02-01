<template>
    <layout class="layout-content">
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <div class="notes">
            <FormItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
        </div>
        <Types :value.sync="record.type"/>
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
  import store from '@/store/index2';

  // const recordList = recordListModel.fetch();

  @Component({
    components: {Tags, FormItem, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = store.tagList;

    // recordList: RecordItem[] = recordList;
    recordList = store.recordList;

    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      //   recordListModel.create(this.record);
      // }
      //
      // @Watch('recordList')
      // onRecordListChange() {
      //   recordListModel.save();
      store.createRecord(this.record);
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