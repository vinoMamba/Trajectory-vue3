import {ref, provide, inject, Ref} from "vue";

type CategoryContext = {
    category: Ref<Category>
    setCategory: (value: Category) => void
}
const CategorySymbol = Symbol();
export const useCategoryProvide = () => {
    const category = ref<Category>("-");
    const setCategory = (value: Category) => {
        category.value = value;
    };
    provide(CategorySymbol, {
        category,
        setCategory
    });

};

export const useCategoryInject = () => {
    const categoryContext = inject<CategoryContext>(CategorySymbol);
    if (!categoryContext) {
        throw new Error("useCategoryInject must be used after useCategoryProvide");
    }
    return categoryContext;
};
