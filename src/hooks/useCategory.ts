import {ref} from "vue";


function getDefaultValue(): Category {
    const value = window.localStorage.getItem('category') as Category;
    if (value) {
        try {
            return value;
        } catch {
            throw new Error('no Value');
        }
    }
    return '-';
}

export function useCategory() {
    const value = getDefaultValue();
    const category = ref<Category>('-');
    const setCategory = (val: Category) => {
        window.localStorage.setItem('category', val);
        category.value = val;
    };
    setCategory(value);
    return {category, setCategory};
}
