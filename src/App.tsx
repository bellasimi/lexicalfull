import LexicalEditor from "@components/LexicalEditor";
import PlaygroundEditorTheme from "@components/LexicalEditor/themes/PlaygroundEditorTheme";
import PlaygroundNodes from "@components/LexicalEditor/nodes/PlaygroundNodes";
import { useState } from "react";

const App = () => {
  const [html, setHtml] = useState("");
  const dummyGuideLine =
    '<p><img src="https://github.com/bellasimi/bellasimi/assets/79133602/d439ba79-3eb9-4df7-ba72-4c01d9f7fd94"><br></p><p>1. 인터뷰는 응시자가 제출한 깃 레포지토리의 코드에 대한 리뷰와 코딩 문제로 이루어집니다.</p><p>2. 인터뷰 중 브라우저가 종료되거나 탭이 닫혀도 코드는 유실되지 않으며, 다시 접속하여 이어서 진행할 수 있습니다.</p><p>3. 코드 문제를 푸는 중 다른 문제로 이동하더라도,작성했던 코드는 그대로 유지됩니다.</p><p>4. 평가자의 허락없이 복사 및 붙여넣기는 부정행위로 간주될 수 있습니다.</p><p>5. 반드시 네트워크 연결이 원활한 장소에서 진행하여야 하며, 공용 네트워크를 사용하는 장소는 권장하지 않습니다.</p>';

  return (
    <div>
      <LexicalEditor
        initialValue={dummyGuideLine}
        onValueChange={(value: string) => {
          setHtml(value);
        }}
        config={{
          namespace: "Playground",
          nodes: [...PlaygroundNodes],
          onError: (error: Error) => {
            throw error;
          },
          theme: PlaygroundEditorTheme,
        }}
      />
      <LexicalEditor readonly initialValue={html} />
    </div>
  );
};

export default App;
