<script lang="tsx">
import {defineComponent, reactive} from "vue";
import {createTagId} from "../lib/createTagId";
import SvgIcon from "./SvgIcon.vue";

export default defineComponent({
  name: "Tags",
  components: {SvgIcon},
  setup() {
    const tagList = reactive([
      {id: createTagId(), name: "零食", iconName: "snacks", category: "-"},
      {id: createTagId(), name: "衣服", iconName: "clothes", category: "-"},
      {id: createTagId(), name: "差旅", iconName: "travel", category: "-"},
      {id: createTagId(), name: "电话网费", iconName: "internetBill", category: "-"},
      {id: createTagId(), name: "水电费", iconName: "utilityBill", category: "-"},
      {id: createTagId(), name: "日用品", iconName: "dailyUse", category: "-"},
      {id: createTagId(), name: "医药费", iconName: "medicalFees", category: "-"},
      {id: createTagId(), name: "交通", iconName: "traffic", category: "-"},
      {id: createTagId(), name: "住房", iconName: "home", category: "-"},
      {id: createTagId(), name: "其他", iconName: "other", category: "-"},
      {id: createTagId(), name: "工资", iconName: "wage", category: "+"},
      {id: createTagId(), name: "股票基金", iconName: "fund", category: "+"},
      {id: createTagId(), name: "奖金", iconName: "bonus", category: "+"},
      {id: createTagId(), name: "外快", iconName: "extra", category: "+"},
      {id: createTagId(), name: "红包", iconName: "red", category: "+"},
      {id: createTagId(), name: "其他", iconName: "other", category: "+"},
    ]);
    return () => {
      return (
          <ul class="tags-wrap">
            {tagList.map(item => {
              return (
                  <li class="tags-item">
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