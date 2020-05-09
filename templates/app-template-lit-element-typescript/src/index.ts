import { customElement, LitElement, property, html, css } from "lit-element";

@customElement("my-app")
export class App extends LitElement {
    @property({ type: Number })
    counter = 0

    static get styles() {
        return css`
            .wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            
            button {
                font-size: x-large;
            }
            
            .even {
                background-color: rebeccapurple;
            }
        `
    }

    handleClick() {
        this.counter += 1
    }

    render() {
        return html`
            <div class="wrapper"><button @click="${this.handleClick}">${this.counter}</button></div>
        `
    }
}
