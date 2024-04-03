import assert from "assert";
import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { glob } from "glob";
import path from "path";

const APP_SRC = "src";
const APP_DEST = "static";

function getOutput(input) {
    let parsed = path.parse(input);
    let parts = parsed.dir.split(path.sep);
    assert(parts[1] === APP_SRC);

    parts[1] = APP_DEST;
    parsed.dir = parts.join(path.sep);
    parsed.base = parsed.name;
    return path.format(parsed);
}

const inputs = await glob([`*/${APP_SRC}/**`], { nodir: true, ignore: "**/_*/**" });
const entries = inputs.map(input => ({ in: input, out: getOutput(input) }));

let ctx = await esbuild.context({
    entryPoints: entries,
    outdir: ".",
    outbase: "",
    bundle: true,
    minify: true,
    plugins: [sassPlugin()],
    logLevel: "info",
});

if (process.argv.includes("--watch")) {
    ctx.watch();
} else {
    await ctx.rebuild();
    ctx.dispose();
}
