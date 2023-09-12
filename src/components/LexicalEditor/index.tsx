/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { SettingsContext } from "./context/SettingsContext";
import { SharedAutocompleteContext } from "./context/SharedAutocompleteContext";
import { SharedHistoryContext } from "./context/SharedHistoryContext";
import Editor from "./Editor";
import { TableContext } from "./plugins/TablePlugin";
import PlaygroundNodes from "./nodes/PlaygroundNodes";
import PlaygroundEditorTheme from "./themes/PlaygroundEditorTheme";

interface Props {
  readonly?: boolean;
  initialValue?: string;
  editorState?: string;
  onValueChange?: (value: any) => void;
  config?: any;
  nodes?: any;
}

const LexicalEditor = ({
  readonly,
  initialValue,
  editorState,
  onValueChange = () => null,
  config,
  nodes,
}: Props): JSX.Element => {
  const initialConfig = {
    namespace: "default",
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
    ...config,
    editable: !readonly,
  };

  console.log("state", initialConfig.editorState);

  return (
    <SettingsContext>
      <LexicalComposer initialConfig={initialConfig}>
        <SharedHistoryContext>
          <TableContext>
            <SharedAutocompleteContext>
              <div className="editor-shell">
                <Editor
                  readonly={readonly}
                  initialValue={initialValue}
                  editorState={editorState}
                  onValueChange={onValueChange}
                  nodes={nodes}
                />
              </div>
            </SharedAutocompleteContext>
          </TableContext>
        </SharedHistoryContext>
      </LexicalComposer>
    </SettingsContext>
  );
};

export default LexicalEditor;
