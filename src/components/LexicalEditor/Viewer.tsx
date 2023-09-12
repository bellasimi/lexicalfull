import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateNodesFromDOM } from "@lexical/html";
import { $insertNodes, $getRoot } from "lexical";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

interface Props {
  initialValue?: string;
}

const Viewer = ({ initialValue }: Props) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!initialValue) {
      return;
    }

    editor.update(() => {
      const root = $getRoot();
      root.clear();

      const parser = new DOMParser();
      const dom = parser.parseFromString(initialValue, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      $insertNodes(nodes);
    });
  }, [initialValue, editor]);

  return (
    <div className="editor-container">
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<></>}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </div>
  );
};

export default Viewer;
