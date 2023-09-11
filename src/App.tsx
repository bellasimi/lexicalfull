import LexicalEditor from "@components/LexicalEditor";
import { useEffect } from "react";

interface Props {}

const App = ({}: Props) => {
  useEffect(() => {}, []);
  return (
    <div className="flex">
      <LexicalEditor />
      <LexicalEditor />
    </div>
  );
};

export default App;
