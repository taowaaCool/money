import {recordListModel} from '@/model/recordListModel';
import {tagListModel} from '@/model/tagListModel';

const store = {
  // record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),

// tag store
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复了');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  },
  findTag: (id: string) => {
    return window.tagList.filter(t => t.id === id)[0];
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },
};

export default store;