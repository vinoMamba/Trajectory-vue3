<script lang="tsx">
import {defineComponent, FunctionalComponent} from "vue";

const NoDataPage: FunctionalComponent = () => {
  return (
      <div class="empty">
        <span>暂无账单，点击下方蓝色按钮进行添加</span>
      </div>
  );
};

export default defineComponent({
  name: 'Detail',
  setup() {
    return () => {
      return (
          <div class="wrapper">
            <NoDataPage/>
          </div>
      );
    };
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 85%;
  height: 70vh;

  > .empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ul {
    overflow: auto;
    width: 100%;
    margin: 8px;

    > li {
      margin: 8px 0;
      padding: 4px;
      font-size: 14px;
      background-color: white;
      border-radius: 8px;

      > .header {
        padding: 4px;
        display: flex;
        justify-content: space-between;
        color: #6b94e9;

        > .headerInput {
          color: #5bbb6d;;
        }

        > .headerOutput {
          color: #ed7c78;
        }
      }

      .detail {
        display: flex;
        align-items: center;
        border-bottom: 2px dotted #f0f0f0;
        padding: 4px;

        > .tagContent {
          display: flex;
          width: 60%;
          padding: 0 8px;
          color: #191919;

          ::v-deep .amountInput {
            fill: #5bbb6d;
            color: #5bbb6d;
          }

          ::v-deep .amountOutput {
            fill: #ed7c78;
            color: #ed7c78;
          }

          > .note {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 6em;
            font-size: 12px;
            margin: 0 4px;
            padding: 4px;
            border-radius: 4px;
            background-color: #ee5a55;
            color: white;
          }
        }

        > .amount {
          width: 30%;
          text-align: right;
          padding: 0 8px;
          color: #ee5a55;

          &.amountInput {
            color: #5bbb6d;
          }
        }
      }
    }
  }
}
</style>
