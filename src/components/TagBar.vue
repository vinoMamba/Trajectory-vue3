<script lang="tsx">
import {defineComponent, FunctionalComponent} from "vue";
import Header from "./Header.vue";

function undo() {
  window.history.back();
}

function selectCategory(type: string) {
  console.log(type);
}

const TagBody: FunctionalComponent = () => {
  return (
      <>
        <div onClick={undo}>返回</div>
        <ul>
          <li onClick={() => {
            selectCategory('-');
          }}>支出
          </li>
          <li onClick={() => {
            selectCategory('+');
          }}>收入
          </li>
        </ul>
      </>
  );
};

export default defineComponent({
  name: "TagBar",
  components: {
    Header
  },
  setup() {
    const slots = {
      link: () => (<TagBody/>)
    };
    return () => {
      return (
          <Header v-slots={slots}/>
      );
    };
  }

});
</script>

<style lang="scss" scoped>
@import "src/assets/helper";

header {
  > ul {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    > li {
      position: relative;
      padding: 8px;

      &.selectedOutput {
        color: $output-color;
      }

      &.selectedOutput::after {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        display: block;
        border-bottom: 2px solid $output-color;
      }

      &.selectedInput {
        color: $input-color;
      }

      &.selectedInput::after {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        display: block;
        border-bottom: 2px solid $input-color;
      }
    }
  }
}
</style>
