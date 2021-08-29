import {ref} from "vue";

export const useDark = () => {
    const modeState = ref(window.localStorage.getItem("theme"));
    const setModeState = () => {
        modeState.value = modeState.value === "darkMode" ? "" : "darkMode";
        document.documentElement.setAttribute("data-theme", modeState.value);
        localStorage.setItem("theme", modeState.value);
    };
    return {modeState, setModeState};
};