<script lang="tsx">
import {defineComponent} from "vue";
import Header from '/@/components/Header.vue';

export default defineComponent({
  name: 'TopBar',
  components: {Header},
  setup() {
    const slots = {
      link: () => (
          <>
            <router-link to="/tagList">标签</router-link>
            <router-link to="/statistics">统计</router-link>
          </>
      )
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
header {
  > a {
    padding: 16px;
  }
}
</style>
