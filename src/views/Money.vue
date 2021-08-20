<script lang="tsx">
import {defineComponent, ref, unref} from "vue";
import NumberPad from "/@/components/NumberPad.vue";
import InputItem from "/@/components/InputItem.vue";
import TagBar from "../components/TagBar.vue";

export default defineComponent({
  name: 'Money',
  components: {TagBar, InputItem, NumberPad},
  setup() {
    const placeholder = ref("写点什么吧(*^▽^*)");
    return () => {
      return (
          <>
            <TagBar/>
            <InputItem placeholder={unref(placeholder)}/>
            <NumberPad/>
          </>
      );
    };
  }
});
</script>
