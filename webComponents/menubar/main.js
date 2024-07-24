class Menubar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const itemNumber = Number(this.getAttribute("data-item-number"));
        console.log("🚀 ~ Menubar ~ connectedCallback ~ itemNumber:", itemNumber);
        const items = this.parseItems(itemNumber);

        const menu = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.setAttribute("role", "menubar");
        menu.appendChild(ul);

        items.forEach(item => {
            const li = document.createElement("li");
            li.setAttribute("role", "menuitem");
            const a = document.createElement("a");
            a.setAttribute("href", `#${item}`);
            a.textContent = item;
            li.appendChild(a);
            ul.appendChild(li);
        });

        const style = document.createElement("style");
        style.textContent = `
            nav {
                display: flex;
                justify-content: center;
                border-top: 2px solid #233043;
                border-bottom: 2px solid #233043;
            }

            ul {
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 0;
                list-style: none;
            }

            li {
                flex: 1;
                display: flex;
                text-align: center;
            }

            a {
                flex: 1;
                min-width: max-content;
                padding: 6px 24px;
                text-decoration: none;
                color: inherit;
            }

            a:hover {
                background-color: #233043;
                color: #F0E5E4;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(menu);
    }

    parseItems(itemNumber) {
        const items = [];

        for (let i = 1; i < itemNumber - 1; i++) {
            console.log(i);
            const rawItem = this.getAttribute(`data-item-${i}`);
            items.push(this.parseItem(rawItem));
        }

        return items;
    }

    parseItem(item) {
        console.log(item);
        const parsedItem = JSON.parse(item);
        console.log(parsedItem);
        return this.capitalize(parsedItem.name);
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

customElements.define("custom-menubar", Menubar)

export { Menubar };