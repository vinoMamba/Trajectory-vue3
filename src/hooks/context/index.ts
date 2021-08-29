import {useCategoryInject, useCategoryProvide} from "./useCategory";
import {useTagListInject, useTagListProvide} from "./useTags";
import {useToggleInject, useToggleProvide} from "./useToggle";

export {useCategoryInject, useTagListInject, useToggleInject};

export const useProvider = () => {
    useCategoryProvide();
    useTagListProvide();
    useToggleProvide();
};