<script lang="tsx">
import {defineComponent, FunctionalComponent} from "vue";
import TopBar from "/@/components/TopBar.vue";

export default defineComponent({
  name: "Home",
  components: {TopBar},
  setup() {
    const LinkToMoney: FunctionalComponent = () => {
      return (
          <router-link to="/money">
            添加
          </router-link>
      );
    };
    return () => {
      return (
          <div class="wrapper">
            <TopBar/>
            <LinkToMoney/>
          </div>
      );
    };
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .add {
    padding: 4px;
    height: 2.5em;
    width: 2.5em;
    fill: white;
    border-radius: 50%;
    background-color: #6b94e9;
    box-shadow: 2px 0 2px 1px rgba(0, 0, 0, .25);
  }
}
</style>
