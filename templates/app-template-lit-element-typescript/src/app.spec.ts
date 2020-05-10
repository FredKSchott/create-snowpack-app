import { html, fixture, expect } from "@open-wc/testing";
import { App } from "./app";

describe('App', () => {
    it('should have a title', async () => {
        const element: App = await fixture(html`<my-app></my-app>`);
        const h1 = element.shadowRoot!.querySelector('h1')!;
        expect(h1.textContent).to.equal('Snowpack Lit Element + TypeScript Starter');
    });
});
