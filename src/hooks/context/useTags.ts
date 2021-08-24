import {inject, provide, ref, Ref} from "vue";

type TagListContext = {
    tagList: Ref<Tag[]>,
    setTagList: (value: Tag[]) => void
    filterTagList: (value: Category) => void
}

const TagListSymbol = Symbol();

const initTagList: Tag[] = [
    {id: 1, name: "零食", iconName: "snacks", category: "-"},
    {id: 2, name: "衣服", iconName: "clothes", category: "-"},
    {id: 3, name: "差旅", iconName: "travel", category: "-"},
    {id: 4, name: "电话网费", iconName: "internetBill", category: "-"},
    {id: 5, name: "水电费", iconName: "utilityBill", category: "-"},
    {id: 6, name: "日用品", iconName: "dailyUse", category: "-"},
    {id: 7, name: "医药费", iconName: "medicalFees", category: "-"},
    {id: 8, name: "交通", iconName: "traffic", category: "-"},
    {id: 9, name: "住房", iconName: "home", category: "-"},
    {id: 10, name: "其他", iconName: "other", category: "-"},
    {id: 11, name: "工资", iconName: "wage", category: "+"},
    {id: 12, name: "股票基金", iconName: "fund", category: "+"},
    {id: 13, name: "奖金", iconName: "bonus", category: "+"},
    {id: 14, name: "外快", iconName: "extra", category: "+"},
    {id: 15, name: "红包", iconName: "red", category: "+"},
    {id: 16, name: "其他", iconName: "other", category: "+"},
];

export const useTagListProvide = () => {
    const tagListCache = ref([]) as Ref<Tag[]>;
    const tagList = ref([]) as Ref<Tag[]>;
    const setTagList = (value: Tag[]) => {
        tagListCache.value = value;
    };
    const filterTagList = (category: Category) => {
        tagList.value = tagListCache.value.filter(item => item.category === category);
    };
    setTagList(initTagList);
    filterTagList("-");
    provide(TagListSymbol, {
        tagList,
        setTagList,
        filterTagList
    });
};

export const useTagListInject = () => {
    const tagListContext = inject<TagListContext>(TagListSymbol);

    if (!tagListContext) {
        throw new Error("useTagListInject must be used after useTagListProvide");
    }
    return tagListContext;
};