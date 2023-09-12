import { useEffect, useRef } from "react";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { $insertNodes } from "lexical";

interface Props {
  initialValue?: string;
  onValueChange: (value: string) => void;
}

const HtmlPlugin = ({ initialValue, onValueChange }: Props) => {
  const [editor] = useLexicalComposerContext();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!initialValue || !isFirstRender.current) {
      return;
    }
    isFirstRender.current = false;

    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(initialValue, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      $insertNodes(nodes);
    });
  }, [initialValue, editor]);

  return (
    <OnChangePlugin
      onChange={(editorState) => {
        editorState.read(() => {
          const html = $generateHtmlFromNodes(editor);
          onValueChange(html);
        });
      }}
    />
  );
};

export default HtmlPlugin;
