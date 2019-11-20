import * as vscode from "vscode";
import * as client from "./client";

const reasonConfiguration = {
  indentationRules: {
    decreaseIndentPattern: /^(.*\*\/)?\s*\}.*$/,
    increaseIndentPattern: /^.*\{[^}"']*$/,
  },
  onEnterRules: [
    {
      beforeText: /^.*\b(switch|try)\b[^{]*{\s*$/,
      action: {
        indentAction: vscode.IndentAction.IndentOutdent,
        appendText: "| ",
      },
    },
    {
      beforeText: /^\s*\/\*\*(?!\/)([^*]|\*(?!\/))*$/,
      afterText: /^\s*\*\/$/,
      action: {
        indentAction: vscode.IndentAction.IndentOutdent,
        appendText: " * ",
      },
    },
    {
      beforeText: /^\s*\/\*\*(?!\/)([^*]|\*(?!\/))*$/,
      action: {
        indentAction: vscode.IndentAction.None,
        appendText: " * ",
      },
    },
    {
      beforeText: /^(\t|(\s{2}))*\s\*(\s([^*]|\*(?!\/))*)?$/,
      action: {
        indentAction: vscode.IndentAction.None,
        appendText: "* ",
      },
    },
    {
      beforeText: /^(\t|(\s{2}))*\s\*\/\s*$/,
      action: {
        indentAction: vscode.IndentAction.None,
        removeText: 1,
      },
    },
    {
      beforeText: /^(\t|(\s{2}))*\s\*[^/]*\*\/\s*$/,
      action: {
        indentAction: vscode.IndentAction.None,
        removeText: 1,
      },
    },
    {
      beforeText: /^.*\bfun\b\s*$/,
      action: {
        indentAction: vscode.IndentAction.None,
        appendText: "| ",
      },
    },
    {
      beforeText: /^\s*\btype\b.*=(.*[^;\\{<]\s*)?$/,
      afterText: /^\s*$/,
      action: {
        indentAction: vscode.IndentAction.None,
        appendText: "  | ",
      },
    },
    {
      beforeText: /^(\t|[ ]{2})*[|]([^!$%&*+-/<=>?@^~;}])*(?:$|=>.*[^\s{]\s*$)/m,
      action: {
        indentAction: vscode.IndentAction.None,
        appendText: "| ",
      },
    },
    {
      beforeText: /^(\t|(\s{2}))*\|(.*[;])$/,
      action: {
        indentAction: vscode.IndentAction.Outdent,
      },
    },
    {
      beforeText: /^(\t|(\s{2}))*;\s*$/,
      action: {
        indentAction: vscode.IndentAction.Outdent,
      },
    },
  ],
  wordPattern: /(-?\d*\.\d\w*)|([^`~!@#%^&*()\-=+[{\]}\\|;:",.<>/?\s]+)/g,
};

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  context.subscriptions.push(vscode.languages.setLanguageConfiguration("reason", reasonConfiguration));
  await client.launch(context);
}

export function deactivate(): void {
  return;
}
