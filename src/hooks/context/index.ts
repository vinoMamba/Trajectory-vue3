import {useCategoryInject, useCategoryProvide} from "./useCategory";
import {useTagListInject, useTagListProvide} from "./useTags";

export {useCategoryInject, useTagListInject};

export const useProvider = () => {
    useCategoryProvide();
    useTagListProvide();
};