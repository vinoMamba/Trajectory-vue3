<script lang="tsx">
import {defineComponent} from "vue";
import SvgIcon from "./SvgIcon.vue";
import Header from "/@/components/Header.vue";
import {useToggleInject} from "../hooks/context";

export default defineComponent({
  name: "TopBar",
  components: {Header, SvgIcon},
  setup() {
    const {setToggleState} = useToggleInject();
    const toggle = () => {
      setToggleState();
    };
    const slots = {
      link: () => (
          <>
            <div onClick={() => toggle()}>
              <SvgIcon name="tag"/>
            </div>
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
