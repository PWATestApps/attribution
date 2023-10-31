import { sendEvent } from '@bing-ads/uet-pwa-sdk';
import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return [
      styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('firstUpdated');
  }

  async trackGoal() {
    await sendEvent({
      ea: 'goal',
      el: 'goal',
      evt: 'custom',
      msclkid: 123,
      muserid: 123,
      pagetype: 'goal',
      tagId: 123,
      ti: '123',
      uid: '123',
      ver: '123',
      vid: '123',
    })
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <p>Track initiation and launch events will happen automatically when you open this page.<p>

            <p>Track goal event by clicking on the button below.<p>
          </sl-card>

          <sl-button @click="${this.trackGoal}" variant="primary">Track goal</sl-button>
        </div>
      </main>
    `;
  }
}
