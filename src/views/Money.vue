<script lang="tsx">
import {defineComponent, ref, unref} from "vue";
import NumberPad from "/@/components/NumberPad.vue";
import InputItem from "/@/components/InputItem.vue";

export default defineComponent({
  name: 'Money',
  components: {InputItem, NumberPad},
  setup() {
    const placeholder = ref("写点什么吧(*^▽^*)");
    return () => {
      return (
          <>
            <InputItem placeholder={unref(placeholder)}/>
            <NumberPad/>
          </>
      );
    };
  }
});
</script>
