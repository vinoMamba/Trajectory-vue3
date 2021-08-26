<script lang="tsx">
import {defineComponent, ref, unref} from "vue";
import NumberPad from "/@/components/NumberPad.vue";
import InputItem from "/@/components/InputItem.vue";
import TagBar from "../components/TagBar.vue";
import Tags from "../components/Tags.vue";

export default defineComponent({
  name: "Money",
  components: {Tags, TagBar, InputItem, NumberPad},
  setup() {
    const placeholder = ref("写点什么吧(*^▽^*)");
    return () => {
      return (
          <div class="money-wrap">
            <TagBar/>
            <div class="tags">
              <Tags/>
            </div>
            <InputItem placeholder={unref(placeholder)}/>
            <NumberPad/>
          </div>
      );
    };
  }
});
</script>

<style lang="scss" scoped>
.money-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .tags {
    overflow: auto;
    flex-grow: 1;
  }
}
</style>
