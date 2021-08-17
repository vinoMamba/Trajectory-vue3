<script lang="tsx">
import {defineComponent} from "vue";
import NumberPad from "/@/components/NumberPad.vue";

export default defineComponent({
  name: 'Money',
  components: {NumberPad},
  setup() {
    return () => {
      return (
          <NumberPad/>
      );
    };
  }
});
</script>
