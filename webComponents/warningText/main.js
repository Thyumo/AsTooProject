class WarningText extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });

        // Create paragraph
        const text = this.getAttribute("data-text");
        const paragraph = document.createElement("p");
        paragraph.setAttribute("class", "warning-text");
        paragraph.textContent = text;

        // Create style
        const style = document.createElement("style");
        style.textContent = `
            .warning-text {
                color: red;
            }
        `;

        // Attach created elements
        shadow.appendChild(style);
        shadow.appendChild(paragraph);
    }
}

// Define the new element
customElements.define("warning-text", WarningText)

export { WarningText };
