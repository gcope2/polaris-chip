import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My Strawberry";
    this.image = "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg";
    this.alt = "Red Strawberry";
    this.link = "https://hax.psu.edu/";
    this.body = "This is a red strawberry";
    this.fancy = false;
    this.button = "Details";
  }

  static get styles() {
    return css`

        .button {
          background-color: navy;
          color: white;
          font-size: 20px;
          border-radius: 15px;
          padding: 16px 32px;
          border: none;
        }

        .button-wrap {
          text-align: center;
          margin: 20px 0;
        }

        .block.fancy {
          background-color: blue;
        }

        .block {
          display: block;
          background-color: black;
          color: white;
          height: 450px;
          width: 300px;
          padding: 40px;
          margin: 20px auto;
          border-radius: 10px;
          text-align: center;
        }

        meme-maker .media {
          width: 300px;
          max-width: 100%;
          height: auto;
          max-height: 200px;
          border-radius: 10px;
        }

        .card-title {
          background-color: var(--card-title-bg-color, black);
          color: var(--card-title-color, white);
          margin: 10px;
        }

        details[open] summary {
          font-weight: bold;
        }

        details div {
          border: 2px solid blue;
          text-align: left;
          overflow: auto;
        }

        details summary {
          text-align: left;
          font-size: 20px;
        }

        .flowing {
          max-height: 50px;
          max-width: 350px;
          overflow-y: auto;
        }
      
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
    `;
  }

  render() {
    return html`
      <div>
      <section class="block">
        <div>
          <h1 class="card-title">${this.title}</h1>
        </div>

        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div class="flowing">
            <slot>${this.body}</slot>
          </div>
        </details>

          <div class="media">
            <meme-maker class="meme"
            alt="${this.alt}"
            image-url="${this.image}"
            bottom-text="is awesome"
            top-text="${this.title}">
            </meme-maker>
          </div>

        <div class="button-wrap">
          <a href="${this.link}">
            <button class="button">${this.button}</button>
          </a>
        </div>
      </section>
      </div>
      
      `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
    openChanged(e) {
      console.log(e);
      if (e.target.getAttribute('open') !== null) {
        this.fancy = true;
      }
      else {
        this.fancy = false;
      }
    }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      image: { type: String },
      alt: { type: String },
      link: { type: String },
      body: { type: String },
      fancy: {type: Boolean, reflect: true },
      button: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
