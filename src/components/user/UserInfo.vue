<script lang="tsx">
import {defineComponent} from "vue";

export default defineComponent({
  name: "UserInfo",
  setup() {
    return () => {
      return (
          <div>
            <div class="user-img">未登录</div>
          </div>
      );
    };
  }
});
</script>

<style lang="scss" scoped>
.user-img {
  width: 64px;
  height: 64px;
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 50%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>