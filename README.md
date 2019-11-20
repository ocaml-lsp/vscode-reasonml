<div align="center">
  <h1>vscode-reasonml</h1>
  <p style="margin-bottom: 0.5ex;">
    <a href="https://github.com/ocaml-lsp/vscode-reasonml/actions"><img
        src="https://github.com/ocaml-lsp/vscode-reasonml/workflows/ci/badge.svg" /></a>
    <img
        src="https://img.shields.io/npm/types/ocaml-language-server?logo=typescript" />
    <img
        src="https://img.shields.io/badge/eslint-checked-informational?logo=eslint" />
    <img
        src="https://img.shields.io/badge/prettier-formatted-informational?logo=prettier" />
  </p>
  <p style="margin-bottom: 0.5ex;">
    <a href="https://marketplace.visualstudio.com/items?itemName=freebroccolo.reasonml"><img
        src="https://img.shields.io/badge/code->=1.40.1-success?logo=visual-studio-code" /></a>
    <a href="https://marketplace.visualstudio.com/items?itemName=freebroccolo.reasonml"><img
        src="https://img.shields.io/visual-studio-marketplace/d/freebroccolo.reasonml" /></a>
    <a href="https://marketplace.visualstudio.com/items?itemName=freebroccolo.reasonml"><img
        src="https://img.shields.io/visual-studio-marketplace/i/freebroccolo.reasonml" /></a>
  </p>
  <strong>Visual Studio Code language support for <a href="http://ocaml.org"><img height="16" width="16" src="https://unpkg.com/simple-icons@latest/icons/ocaml.svg" /> OCaml</a> and <a href="https://reasonml.github.io"><img height="16" width="16" src="https://unpkg.com/simple-icons@latest/icons/reason.svg" /> Reason</a>.</strong>
</div>

## Features

- highlighting

  - ☑ advanced syntax highlighting for reason
  - ☑ basic highlighting for merlin, ocamlbuild, and opam files

- editing

  - ☑ document formatting (enable on save with `editor.formatOnSave`)
  - ☑ completion and snippets
  - ☑ [rename symbol](https://code.visualstudio.com/docs/editor/editingevolved#_rename-symbol) (F2 or right click)
  - ☑ [case splitting](#case-splitting)

- navigation

  - ☑ [symbol outline for buffers](https://code.visualstudio.com/docs/editor/editingevolved#_goto-symbol) (⇧⌘O) (type `:` in list to sort items)
  - ☑ [symbol outline for project](https://code.visualstudio.com/docs/editor/editingevolved#_open-symbol-by-name) (⌘T) (supports regular expressions)
  - ☑ [jump-to-definition](https://code.visualstudio.com/docs/editor/editingevolved#_go-to-definition) (⌃+click) and [code preview](https://code.visualstudio.com/docs/editor/editingevolved#_peek) (⌘+hover)
  - ☑ find references (⇧F12 or right click)

- static analysis
  - ☑ merlin integration with incremental edit synchronization
  - ☑ display types over definitions (disable with `editor.codeLens` setting)
  - ☑ display types and markdown-rendered docs on hover
  - ☑ [online linting and compiler diagnostics with suggested fixes](https://code.visualstudio.com/docs/editor/editingevolved#_errors-warnings)
    - ⇧⌘M to toggle diagnostics panel
    - F8 to loop through diagnostics for current file
    - Click on lightbulb icon for suggested fixes
  - ☑ built-in support for showing BuckleScript's [bsb](https://bucklescript.github.io/bucklescript/Manual.html#_bucklescript_build_system_code_bsb_code) errors inline, as a companion to merlin's diagnosis.

## Getting Started

### Configurations

#### Reason

- [Reason](https://reasonml.github.io/docs/en/installation)

The Reason installation steps also installs Merlin for you, so you can skip the Merlin installation in the next section.

#### Merlin

**Configured for you already if you've installed Reason above & plan to use it for JS compilation. Skip this step.**

This extension relies heavily on [merlin](https://github.com/the-lambda-church/merlin) so you will
need to have your project set up for that in order to enable completion and hover info. See the
Merlin [wiki](https://github.com/the-lambda-church/merlin/wiki/project-configuration) for details on
how to do that. Basically you need to have a `.merlin` file in your project root which lists the
source directories, libraries, and extensions used.

#### Bsb

You can optionally start [bsb](https://bucklescript.github.io/bucklescript/Manual.html#_bucklescript_build_system_code_bsb_code) from the editor itself, and have the command-line errors appear inside the editor. Add the following to `Code > Preferences > Settings`:

```reason
"reason.diagnostics.tools": [
  "merlin",
  "bsb"
]
```

Merlin's diagnosis is best-effort and can sometimes be wrong; bsb's diagnosis is 100% correct. **bsb diagnosis also works on Windows**.

### Installation

**Note**: due to an existing problem, make sure that you're opening vscode from the [command-line](https://code.visualstudio.com/docs/setup/mac), at the root of your project!

Install this Visual Studio Code extension [just like any other extension](https://code.visualstudio.com/docs/editor/extension-gallery).

Search for `reason` and install `OCaml and Reason IDE` by `Darin Morrison`.

To enable formatting on save, add the following to `Code > Preferences > Settings`:

```
{
  "editor.formatOnSave": true
}
```

If you want to enable [codelens](https://code.visualstudio.com/blogs/2017/02/12/code-lens-roundup), add the following to `Code > Preferences > Settings`:

```
"reason.codelens.enabled": true
```
