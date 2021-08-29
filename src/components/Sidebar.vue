<script lang="tsx">
import {defineComponent, FunctionalComponent} from "vue";
import {useToggleInject} from "../hooks/context";
import SvgIcon from "./SvgIcon.vue";
import UserInfo from "./user/UserInfo.vue";
import {useDark} from "../hooks/useDark";

export default defineComponent({
  name: "Sidebar",
  components: {SvgIcon, UserInfo},
  setup() {

    const SideList: FunctionalComponent = () => {
      const {setModeState, modeState} = useDark();
      return (
          <ul class="side-list-wrap">
            <li class="side-list-item">
              <span>夜间模式</span>
              <div onClick={() => setModeState()}>
                <SvgIcon name={modeState.value === "darkMode" ? "dark" : "light"}/>
              </div>
            </li>
          </ul>
      );
    };

    const {toggleState, setToggleState} = useToggleInject();
    const closeSidebar = (e: MouseEvent) => {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        setToggleState();
      }
    };
    return () => {

      return (
          <>
            <div class={{"sidebar": true, "open-sidebar": toggleState.value}}>
              <UserInfo/>
              <SideList/>
              <div onClick={() => setToggleState()}>
                <SvgIcon name="return"/>
              </div>
            </div>
            <div class={{"sidebar-wrap": true, "open-sidebar-wrap": toggleState.value}}
                 onClick={(e) => closeSidebar(e)}/>
          </>
      );
    };
  }
});

</script>

<style lang="scss">
.sidebar {
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 80vw;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: .3s ease-in-out;
  transform: translateX(-105%);

  .icon-return {
    position: absolute;
    top: 16px;
    right: 0;
    fill: var(--text-color);
  }

  &-wrap {
    display: none;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: black;
    opacity: 0;
    transition: all .3s ease-in-out;

  }

}

.open-sidebar {
  transform: translateX(0%);
  box-shadow: 2px 0 2px 0 rgba(156, 135, 135, 1);

  &-wrap {
    display: block;
    opacity: .5;
  }
}

.side-list {
  &-wrap {
  }

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
