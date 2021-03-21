// import { FC } from "react";
import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};


// export const Text = (props: Props) => {
// export const Text: FC<Props> = (props) => {  // FCという型だと、propsで（childrenと書いていなくても）childrenの指定も可能。今後この指定はできないようになる方向であるが、今は暫定的にVFCを使用して、childrenの指定をできなくする。
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;  // 書いていないが、childrenの指定も可能。
  return <p style={{ color, fontSize }}>テキストです</p>;
};