class MenuItem extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const template = document.getElementById("menuitem-v2-template");
        const templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));

        const href = this.getAttribute("data-href");
        const anchor = shadowRoot.querySelector("a");
        console.log(anchor)
        anchor.href = href;
    }
}

customElements.define("menuitem-v2", MenuItem);

export { MenuItem };