type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number
  createdAt?: string
}

type Tag = {
  id: string
  name: string
}

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // success表示成功， duplicated 表示name重复
  save: () => void
  update: (id: string, name: string) => 'success' | 'not find' | 'duplicated'
  remove: (id: string) => boolean
}

interface Window {
  tagList: tag[];
  createTag: (name: string) => void;
  findTag: (id: string) => Tag | undefined;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not find' | 'duplicated';
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}