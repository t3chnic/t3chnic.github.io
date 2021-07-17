class NavHeader extends HTMLElement {
    constructor() {
        super();
        const headerTemplate = document.createElement('template');
        headerTemplate.innerHTML = `
            <style>
                nav-header {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    width: 100vw;
                }

                nav-header li {
                    float: left
                }

                nav-header li a {
                    display: block;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                }
            </style>
            <nav-header>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
            </nav-header>
        `;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    }
}

class AppDrawer extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', evnt => {
            if(this.disabled) return;
            this.toggleDrawer();
        });
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }
    
    static get observerdAttributes() {
        return ['disabeld', 'open'];
    }

    attributeChangeCallback(attrName, oldVal, newVal) {
        if(this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
        }
    }

    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        // Reflect the value of the open property as an HTML attribute
        if(val)
            this.setAttribute('open', '');
        else
            this.removeAttribute('open');
        this.toggleDrawer();
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        if(val)
            this.setAttribute('disabled', '');
        else
            this.removeAttribute('disabled');
    }

    toggleDrawer() {

    }
}

customElements.define('app-drawer', AppDrawer);
customElements.define('nav-header', NavHeader);