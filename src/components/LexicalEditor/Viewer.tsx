import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $getRoot } from "lexical";
import { $convertFromMarkdownString } from "@lexical/markdown";
import { $isCodeNode } from "@lexical/code";
import { PLAYGROUND_TRANSFORMERS } from "./plugins/MarkdownTransformers";

interface Props {
  editorState?: string;
}

const Viewer = ({ editorState }: Props) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editorState) {
      return;
    }

    const state = editor.parseEditorState(editorState);
    editor.setEditorState(state);

    editor.update(() => {
      const root = $getRoot();
      const firstChild = root.getFirstChild();
      if ($isCodeNode(firstChild) && firstChild.getLanguage() === "markdown") {
        $convertFromMarkdownString(
          firstChild.getTextContent(),
          PLAYGROUND_TRANSFORMERS
        );
      }
      root.selectEnd();
    });
  }, [editorState, editor]);

  return (
    <div className="editor-container p-10">
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<></>}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </div>
  );
};

export default Viewer;
