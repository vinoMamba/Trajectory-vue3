<script lang="tsx">
import {defineComponent} from "vue";
import SvgIcon from "./SvgIcon.vue";
import Header from '/@/components/Header.vue';

export default defineComponent({
  name: 'TopBar',
  components: {Header, SvgIcon},
  setup() {
    const slots = {
      link: () => (
          <>
            <router-link to="/tagList">
              <SvgIcon name="tag"/>
            </router-link>
            <router-link to="/statistics">
              <SvgIcon name="statistics"/>
            </router-link>
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
