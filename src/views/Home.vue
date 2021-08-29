<script lang="tsx">
import SvgIcon from "../components/SvgIcon.vue";
import {defineComponent, FunctionalComponent} from "vue";
import TopBar from "/@/components/TopBar.vue";
import Detail from "/@/components/Detail.vue";

export default defineComponent({
  name: "Home",
  components: {TopBar, SvgIcon, Detail},
  setup() {
    const LinkToMoney: FunctionalComponent = () => {
      return (
          <router-link to="/money">
            <SvgIcon name="add" class="icon-add"/>
          </router-link>
      );
    };
    return () => {
      return (
          <div class="home-wrapper">
            <TopBar/>
            <Detail/>
            <LinkToMoney/>
          </div>
      );
    };
  }
});
</script>

<style lang="scss">
.home-wrapper {
  background-color: var(--background-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-add {
  fill: white;
  padding: 4px;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  background-color: #6b94e9;
  box-shadow: 2px 0 2px 1px rgba(0, 0, 0, .25);
}
</style>
