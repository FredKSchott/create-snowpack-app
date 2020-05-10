import { customElement, LitElement, property, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";

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
            <h1>Snowpack Lit Element + TypeScript Starter</h1>
            <div class="${classMap({ wrapper: true, even: this.counter % 2 === 0 })}"><button @click="${this.handleClick}">${this.counter}</button></div>
        `
    }
}
