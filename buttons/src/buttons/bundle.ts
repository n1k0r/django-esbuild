import { ColoredButton } from "./_bundle/colored.ts";
import { SizedButton } from "./_bundle/sized.ts";

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll<HTMLButtonElement>('button[data-function="random-colored"]')
        .forEach(button => new ColoredButton(button));

    document.querySelectorAll<HTMLButtonElement>('button[data-function="random-sized"]')
        .forEach(button => new SizedButton(button));
});
