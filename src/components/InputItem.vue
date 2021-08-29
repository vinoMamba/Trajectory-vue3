<script lang="tsx">
import {defineComponent} from "vue";

const inputItemProps = {
  itemName: {
    type: String,
    default: "备注"
  },
  placeholder: {
    type: String,
    default: "备注内容"
  },
  typeName: {
    type: String,
    default: "text"
  }
};

export default defineComponent({
  name: "InputItem",
  props: inputItemProps,
  setup(props) {
    return () => {
      return (
          <label>
            <span>{props.itemName}</span>
            <input
                type={props.typeName}
                placeholder={props.placeholder}/>
          </label>
      );
    };
  }
});

</script>


<style lang="scss" scoped>
label {
  padding: 8px 4px;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  border-bottom: 1px solid #ffffff;

  > span {
    border-right: 2px dotted var(--background--text-color);
    padding: 16px;
    font-size: 14px;
  }

  > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    padding: 16px 8px;
    flex-grow: 1;
    outline: none;
    border: none;
    background-color: var(--background-color);
    color: var(--text-color);
  }
}
</style>
