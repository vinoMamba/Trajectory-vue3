<script lang="tsx">
import {defineComponent, ref, watchEffect} from "vue";
import SvgIcon from "./SvgIcon.vue";
import {useCategoryInject, useTagListInject} from "../hooks/context";

export default defineComponent({
  name: "Tags",
  components: {SvgIcon},
  setup() {
    const {tagList} = useTagListInject();
    const {category} = useCategoryInject();
    const selectTagId = ref(0);
    watchEffect(() => {
      selectTagId.value = tagList.value[0].id;
    });
    const toggleTag = (id: number) => {
      selectTagId.value = id;
    };
    return () => {
      return (
          <ul class="tags-wrap">
            {tagList.value.map((item) => {
              return (
                  <li class={{
                    "tags-item": true,
                    selectedInput: selectTagId.value === item.id && category.value === "+",
                    selectedOutput: selectTagId.value === item.id && category.value === "-",
                  }}
                      onClick={() => toggleTag(item.id)}
                      key={item.id}>
                    <SvgIcon name={item.iconName}/>
                    <span>{item.name}</span>
                  </li>
              );
            })}
            <li>
              <router-link class="tags-item tags-item-setting" to="/tagList">
                <SvgIcon name="tagSetting" class/>
                <span>管理</span>
              </router-link>
            </li>
          </ul>
      );
    };
  }
});
</script>

<style lang="scss" scoped>
.tags-wrap {
  height: 100%;
  box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25), inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(auto-fill, 20vw);
  grid-template-rows: repeat(auto-fill, 20vw);

  svg {
    padding: 4px;
    border-radius: 50%;
    background-color: white;
  }

  .selectedInput {
    color: #5bbb6d;
  }

  .selectedOutput {
    color: #ed7c78;

    svg {
      fill: #ed7c78 !important;
    }
  }
}

.tags-item {
  width: 20vw;
  height: 20vw;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 4px;
    font-size: 15px;
  }
}

.tags-item-setting {
  > span {
    color: #0078d7;
  }

  svg {
    fill: #0078d7 !important;
  }

}
</style>
