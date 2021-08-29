<script lang="tsx">
import {defineComponent} from "vue";
import {useToggleInject} from "../hooks/context";

export default defineComponent({
  name: "Sidebar",
  setup() {
    const {toggleState} = useToggleInject();
    return () => {
      return (
          <div class={{"sidebar-wrap": true, "open-sidebar": toggleState.value}}>Sidebar</div>
      );
    };
  }
});

</script>

<style lang="scss" scoped>
.sidebar-wrap {
  position: absolute;
  top: 0;
  left: -80vw;
  border: 1px solid red;
  width: 80vw;
  height: 100vh;
  background-color: var(--background-color);
  transition: all .3s ease-in-out;
}

.open-sidebar {
  left: 0;
}
</style>
