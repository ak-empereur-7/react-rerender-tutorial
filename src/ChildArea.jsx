import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

const data = [...Array(100).keys()];
data.forEach(() => {
  console.log("...");
});

export const ChildArea = (props) => {
  console.log("ChildAreaが再レンダリングされた");
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
