<script lang="tsx">
import {defineComponent, FunctionalComponent} from "vue";
import SvgIcon from "./SvgIcon.vue";
import Header from "./Header.vue";
import {useCategoryInject} from "../hooks/context";
import {useTagListInject} from "../hooks/context";

function undo() {
  window.history.back();
}

const TagBody: FunctionalComponent = () => {
  const {category, setCategory} = useCategoryInject();
  const {filterTagList} = useTagListInject();
  const toggleTag = (category: Category) => {
    setCategory(category);
    filterTagList(category);
  };
  return (
      <>
        <div onClick={undo}>
          <SvgIcon name="left"/>
        </div>
        <ul class="tag-wrap">
          <li class={{"tag-item": true, selectedOutput: category.value === "-"}} onClick={() => {
            toggleTag("-");
          }}>支出
          </li>
          <li class={{"tag-item": true, selectedInput: category.value === "+"}} onClick={() => {
            toggleTag("+");
          }}>收入
          </li>
        </ul>
        <div onClick={undo}>
          <SvgIcon name="xxx"/>
        </div>
      </>
  );
};

export default defineComponent({
  name: "TagBar",
  components: {
    Header,
    SvgIcon
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

<style lang="scss">
@import "src/assets/helper";

.tag-wrap {
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  .tag-item {
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
</style>
