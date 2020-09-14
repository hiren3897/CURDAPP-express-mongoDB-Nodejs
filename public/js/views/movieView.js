import { elements } from './base';


export const clearMovie = () => {
    elements.recipe.innerHTML = '';
};

export const renderMovie = (movie, isLiked) => {
    const markUp = `
    <figure class="recipe__fig">
        <img src="http://image.tmdb.org/t/p/w500${movie.image}" alt="${movie.title}" class="recipe__img">
            <h1 class="recipe__title">
                <span>${movie.title}</span>
            </h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${movie.release_date}</span>
            <span class="recipe__info-text"> Release Date</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${movie.genres}</span>
            <span class="recipe__info-text"> servings</span>

        <div class="recipe__info-buttons">
            <button class="btn-tiny btn-decrease" >
                <svg>
                    <use href="img/icons.svg#icon-circle-with-minus"></use>
                </svg>
            </button>
            <button class="btn-tiny btn-increase">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-plus"></use>
                </svg>
            </button>
        </div>

    </div>
    <button class="recipe__love">
        <svg class="header__likes">
            <use href="img/icons.svg#icon-heart${isLiked ? '' : '-outlined'}"></use>
        </svg>
    </button>
</div>



<div class="recipe__ingredients">

    <ul class="recipe__ingredient-list">

        ${movie.desc}

    </ul>

    <button class="btn-small recipe__btn recipe__btn--add">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-shopping-cart"></use>
        </svg>
        <span>Add to shopping list</span>
    </button>
</div>

<div class="recipe__directions">
    <h2 class="heading-2">How to cook it</h2>
    <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__by">${movie.company}</span>. Please check out directions at their website.
    </p>
    <a class="btn-small recipe__btn" href="${movie.url}" target="_blank">
        <span>Directions</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>

    </a>
</div>
    `;

    elements.recipe.insertAdjacentHTML('afterBegin', markUp);
};
