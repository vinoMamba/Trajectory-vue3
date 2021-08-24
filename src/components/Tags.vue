<script lang="tsx">
import {defineComponent, ref} from "vue";
import SvgIcon from "./SvgIcon.vue";
import {useTagListInject} from "../hooks/context";

export default defineComponent({
  name: "Tags",
  components: {SvgIcon},
  setup() {
    const currentTagId = ref(1);
    const {tagList} = useTagListInject();
    const toggleTag = (id: number) => {
      console.log(id);
      currentTagId.value = id;
    };
    return () => {
      return (
          <ul class="tags-wrap">
            {tagList.value.map((item) => {
              return (
                  <li class={{"tags-item": true, "checked": currentTagId.value === item.id}}
                      onClick={() => toggleTag(item.id)}
                      key={item.id}>
                    <SvgIcon name={item.iconName}/>
                    <span>{item.name}</span>
                  </li>
              );
            })}
          </ul>
      );
    };
  }
});
</script>

<style lang="scss" scoped>
.tags-wrap {
  display: flex;
  flex-wrap: wrap;
  box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25), inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);

  .checked {
    color: red;
  }
}

.tags-item {
  width: 20%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 4px;
    font-size: 12px;
  }
}
</style>
