<script lang="tsx">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "NumberPad",
  setup: function () {
    const amount = ref("0");
    const buttonContent = ["1", "2", "3", "删除", "4", "5", "6", "清空", "7", "8", "9", "保存", "0", ".", "00", "再记"];

    const saveLedgerRecord = () => {
      amount.value = "0";
    };

    const saveAmount = () => {
      if (amount.value === "0") {
        window.alert("请输入有效的金额");
      } else {
        saveLedgerRecord();
        window.history.back();
      }
    };

    const saveAgain = () => {
      if (amount.value === "0") {
        window.alert("请输入有效的金额");
      } else {
        saveLedgerRecord();
      }
    };

    const deleteAmount = () => {
      amount.value = amount.value.length === 1 ? "0" : amount.value.substr(0, amount.value.length - 1);
    };

    const emptyAmount = () => {
      amount.value = "0";
    };

    function updateAmount(text: string) {
      if (amount.value.length > 11) {
        amount.value = amount.value.slice(0, 12);
        return;
      }
      switch (text) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          if (amount.value === "0") {
            amount.value = text;
            break;
          } else {
            amount.value += text;
            break;
          }
        case "00":
          if (amount.value === "0") {
            amount.value = "0";
            break;
          } else {
            amount.value += text;
            break;
          }
        case ".":
          if (amount.value.indexOf(".") >= 0) {
            return amount.value;
          } else {
            amount.value += text;
            break;
          }
        default:
          amount.value = "0";
          break;
      }
    }

    function onClickPad(e: MouseEvent) {
      const text = (e.target as HTMLButtonElement).textContent?.trim();
      if (text === undefined) return;
      if (text === "保存") saveAmount();
      if (text === "再记") saveAgain();
      if (text === "删除") deleteAmount();
      if (text === "清空") emptyAmount();
      if ("0123456789.".split("").concat(["00"]).indexOf(text) >= 0) updateAmount(text);
    }

    return () => {
      return (
          <div class="number-pad-wrap">
            <div class="output">{amount.value}</div>
            <div class="pad">
              {buttonContent.map(item => <button onclick={onClickPad}>{item}</button>)}
            </div>
          </div>
      );
    };
  }
});
</script>

<style lang="scss" scoped>

div {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  color: var(--text-color);

  > .output {
    padding: 0 16px;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25), inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > button {
      width: 25%;
      height: 48px;
      outline: none;
      border: none;
      background-color: var(--background-color);
      color: var(--text-color);

      &:nth-child(12) {
        color: #0078d7;
        font-weight: 700;
      }

      &:nth-child(4), &:nth-child(8) {
        color: #ed7c78;
      }

      &:last-child {
        color: #5bbb6d;
      }
    }
  }
}
</style>
