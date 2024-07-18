class ChooseColorText extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallBack() {
        const shadow = this.attachShadow({ mode: "open" });

        const text = this.getAttribute("data-text");
        const wantedColor = this.getAttribute("color");

        const paragraph = document.createElement("p");
        paragraph.setAttribute("class", "choose-color-text");
        paragraph.textContent = text;

        const style = document.createElement("style");
        style.textContent = `.choose-color-text {color: ${wantedColor};}`;

        shadow.appendChild(style);
        shadow.appendChild(paragraph);
    }
}

customElements.define("choose-color-text", ChooseColorText)

export { ChooseColorText };