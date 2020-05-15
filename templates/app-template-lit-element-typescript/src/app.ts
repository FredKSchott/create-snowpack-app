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
            
            h1 {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            }
        `
    }

    render() {
        return html`
            <div class="wrapper">
                <h1>Snowpack Lit Element + TypeScript Starter</h1>
            </div>
        `
    }
}
