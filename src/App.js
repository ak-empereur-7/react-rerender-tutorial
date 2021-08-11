import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // useCallbackを使用しないと、アロー関数で毎回新しく生成されたと判断されてしまう
  // [setOpen]は変更対象の変数。setOpen変数が変わったらsetOpenを新しく生成しますよということ
  // []からの場合は、最初に生成したものをずっと使う
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
