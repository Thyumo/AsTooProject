class ColorfulText extends HTMLElement {
    constructor() {
        super();
    }

        const shadow = this.attachShadow({ mode: "open" });

        const text = this.getAttribute("data-text");
        const textColor = this.getAttribute("data-color");

        const paragraph = document.createElement("p");
        paragraph.setAttribute("class", "colorful-text");
        paragraph.textContent = text;

        const style = document.createElement("style");
        style.textContent = `
            .colorful-text {
                color: ${textColor};
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(paragraph);
    }
}

customElements.define("colorful-text", ColorfulText)

export { ColorfulText };