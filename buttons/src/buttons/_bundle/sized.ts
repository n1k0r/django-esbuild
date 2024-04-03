export class SizedButton {
    constructor(public element: HTMLButtonElement) {
        element.addEventListener("click", () => this.onClick());
    }

    onClick() {
        const size = Math.random() * 7 + 7;
        const sizePt = Math.ceil(size) + "pt";
        this.element.style.fontSize = sizePt;
    }
}
