import { LitElement, html, css } from 'lit';

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
  }

  static get styles() {
    return css`
      :host {
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
          margin: 30px 0;
        }

        #cardlist .block.fancy {
          background-color: blue;
        }

        #cardlist .block {
          display: block;
          background-color: black;
          color: white;
          height: 500px;
          width: 400px;
          padding: 40px;
          margin: 20px auto;
          border-radius: 10px;
          h1 {
            text-align: center;
          }
          p {
            text-align: center;
          }
        }

        .image {
          text-align: center;
          margin: 30px 0;
        }

        .image img {
          width: 300px;
          max-width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .control-wrapper {
          background-color: blue;
          padding: 15px;
          border: 10px solid orange;
        }

        .card-title {
          background-color: var(--card-title-bg-color, black);
          color: var(--card-title-color, white);
        }
      }
    `;
  }

  render() {
    return html`
      <div id="cardlist">
      <section class="block">
        <div>
            <h1 class="card-title">${this.title}</h1>
            <p>${this.body}</p>
        </div>

        <div class="image">
          <img class = "card-image" alt="${this.alt}" src="${this.image}">
        </div>

        <div class="button-wrap">
          <a href="${this.link}">
            <button class="button">Details</button>
          </a>
        </div>
      </section>
      </div>
      
      `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      link: { type: String },
      body: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
