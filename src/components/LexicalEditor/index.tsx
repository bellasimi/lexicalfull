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
import PlaygroundNodes from "./nodes/TableCellNodes";
import PlaygroundEditorTheme from "./themes/PlaygroundEditorTheme";

interface Props {
  readonly?: boolean;
  initialValue?: string;
  onValueChange?: (value: any) => void;
  config?: any;
  nodes?: any;
}

const defaultConfig = {
  namespace: "default",
  nodes: [...PlaygroundNodes],
  onError: (error: Error) => {
    throw error;
  },
  theme: PlaygroundEditorTheme,
};

const LexicalEditor = ({
  readonly,
  initialValue,
  onValueChange = () => null,
  config = defaultConfig,
  nodes,
}: Props): JSX.Element => {
  return (
    <SettingsContext>
      <LexicalComposer initialConfig={{ ...config, editable: !readonly }}>
        <SharedHistoryContext>
          <TableContext>
            <SharedAutocompleteContext>
              <div className="editor-shell">
                <Editor
                  readonly={readonly}
                  initialValue={initialValue}
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
