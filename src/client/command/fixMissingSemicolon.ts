// import * as vscode from "vscode";
// import * as client from "vscode-languageclient";
// import * as LSP from "vscode-languageserver-protocol";

// export function register(context: vscode.ExtensionContext, languageClient: client.LanguageClient): void {
//   context.subscriptions.push(
//     vscode.commands.registerTextEditorCommand(
//       "reason.codeAction.fixMissingSemicolon",
//       async (
//         editor: vscode.TextEditor,
//         _: any, // eslint-disable-line @typescript-eslint/no-explicit-any
//         [
//           {
//             range: { end: position },
//           },
//         ]: [LSP.Location],
//       ): Promise<void> => {
//         await editor.edit(editBuilder => {
//           const editPosition = languageClient.protocol2CodeConverter.asPosition(position);
//           editBuilder.insert(editPosition, ";");
//         });
//       },
//     ),
//   );
// }
