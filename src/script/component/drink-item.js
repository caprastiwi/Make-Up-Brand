class DrinkItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            .brand-item {
                padding: 0 10%;
                display: flex;
            }      
            .brand-img {
                width: 45%;
                max-height: 200px;
                object-fit: cover;
                object-position: center;
            }
            .brand-info {
                width: 55%;
                padding: 10px 20px;
            }
            .brand-title {
                padding: 10px 0;
            }
            .brand-body {
                line-height: 20px;
                height: 120px;
                overflow: hidden;
                position: relative;
            }
            brand-info>p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
                /* number of lines to show */
            }
        </style>
        <div class="brand-item">
            <img class="brand-img" src="${this._meal.strMealThumb}" alt="Photo of cocktail">
            <div class="brand-info">
                <h3>${this._meal.strMeal}</h3>
                <h4 class="brand-title">${this._meal.strCategory}</h4>
                <p class="brand-body">${this._meal.strInstructions}</p>
            </div>
        </div>
        `;
    }
}

customElements.define("drink-item", DrinkItem);