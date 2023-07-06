const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<style>
    .footer{
        text-align: center;
    }
    h1{
        color: blue;
    }
</style>

<div>
    <footer class="footer">
        <h1> Footer - My First Blog on Web Component </h1>
    </footer>
</div>
`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}
customElements.define('footer-component', Footer);