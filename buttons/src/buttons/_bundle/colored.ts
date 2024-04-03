export class ColoredButton {
    constructor(public element: HTMLButtonElement) {
        element.addEventListener("click", () => this.onClick());
    }

    onClick() {
        const color = Math.random() * 0xFFFFFF;
        const hex = "#" + Math.round(color).toString(16);
        this.element.style.backgroundColor = hex;
        this.element.style.borderColor = hex;
    }
}
