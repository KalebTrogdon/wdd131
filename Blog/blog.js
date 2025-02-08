const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '****'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description:
            'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc:
            'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.querySelector('.reviews');
    let articlesHTML = '';
    const threshold = 100;

    articles.forEach(article => {
        let descriptionHTML = '';

        if (article.description.length > threshold) {
            const truncatedText = article.description.slice(0, threshold);
            const remainingText = article.description.slice(threshold);
            descriptionHTML = `
        <span class="truncated">${truncatedText}</span>
        <span class="ellipsis">...</span>
        <span class="more" style="display: none;">${remainingText}</span>
        <a href="#" class="read-more"> Read more</a>
      `;
        } else {
            descriptionHTML = article.description;
        }

        articlesHTML += `
      <article class="review">
        <div class="review-details">
          <time datetime="${article.date}">${article.date}</time>
          <p><strong>Ages:</strong> ${article.ages}</p>
          <p><strong>Genre:</strong> ${article.genre}</p>
          <p><strong>Rating:</strong> ${article.stars}</p>
        </div>
        <div class="review-content">
          <h2>${article.title}</h2>
          <img src="${article.imgSrc}" alt="${article.imgAlt}">
          <p class="description">${descriptionHTML}</p>

        </div>
      </article>
    `;
    });

    reviewsContainer.innerHTML = articlesHTML;

    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const parentP = link.parentElement;
            const moreText = parentP.querySelector('.more');
            const ellipsis = parentP.querySelector('.ellipsis');

            if (moreText.style.display === "none") {
                moreText.style.display = "inline";
                ellipsis.style.display = "none";
                link.textContent = " Read less";
            } else {
                moreText.style.display = "none";
                ellipsis.style.display = "inline";
                link.textContent = " Read more";
            }
        });
    });
});