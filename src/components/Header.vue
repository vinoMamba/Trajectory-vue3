<script lang="tsx">
import {defineComponent, renderSlot} from "vue";

export default defineComponent({
  name: "Header",
  setup(props, {slots}) {
    return () => (<header>{renderSlot(slots, "link")}</header>);
  }
});
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #d4cfbf;
  width: 100%;
  height: 8vh;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  background-color: var(--background-color);
}
</style>
