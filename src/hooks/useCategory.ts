import {ref} from "vue";

type Category = '+' | '-'

export function useCategory() {
    const getCategory = ref<Category>(window.localStorage.getItem('category') || '-');
    const setCategory = (value: Category) => {
        window.localStorage.setItem('category', value);
    };
    return {getCategory, setCategory};
}
