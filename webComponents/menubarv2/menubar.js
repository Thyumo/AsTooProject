class MenubarV2 extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const template = document.getElementById("menubar-v2-template");
        const templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}

customElements.define("menubar-v2", MenubarV2);

export { MenubarV2 };
