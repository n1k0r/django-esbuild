# Django + esbuild project example

The most notable part of this repository is the [build.mjs](build.mjs) script, which builds scripts and styles from `*/src/` into `*/static/`. Paths that contain parts prefixed with an underscore (e.g., `_bundle/` and `_module.js`) are ignored but can be used in imports. This script can be used in watch mode with the argument `--watch` (see scripts in `package.json`).

In this example there are two applications:
* `main` defines the basic layout;
* `buttons` serve form with bundled scripts.

These applications are being built like this:
```mermaid
flowchart LR
    subgraph src
        src_buttons_colored[buttons/src/_bundle/colored.ts]
        src_buttons_sized[buttons/src/_bundle/sized.ts]
        src_buttons_bundle[buttons/src/buttons/bundle.ts]
        src_main_script[main/src/main/script.js]
        src_main_style[main/src/main/style.scss]

        src_buttons_colored -.-> src_buttons_bundle
        src_buttons_sized -.-> src_buttons_bundle
    end

    subgraph dest[static]
        dest_buttons_bundle[buttons/static/buttons/bundle.js]
        dest_main_script[main/static/main/script.js]
        dest_main_style[main/static/main/style.css]
    end

    src_buttons_bundle --> dest_buttons_bundle
    src_main_script --> dest_main_script
    src_main_style --> dest_main_style
```
