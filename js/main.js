// -----------------------------------------------------------------------------
// This file includes deliberate formatting errors in order for you to verify
// that ESLint and EditorConfig are working properly. If both tools are, indeed,
// working correctly, then you’d see errors in your editor about indentation and
// improper use of footmarks instead of back ticks. When you save this file,
// your editor should strip all excess newlines and whitespace characters from
// the file. If both of these events occur, then ESLint and EditorConfig are
// working correctly.
//
// DON’T PROCEED UNTIL YOU’RE SURE ESLINT AND EDITORCONFIG ARE WORKING CORRECTLY
// -----------------------------------------------------------------------------
window.onload = () => {
    const script = document.createElement(`script`);
    script.src = `json/data.json`;
    document.body.appendChild(script);
};

// The JSONP callback from data.json
window.albumData = (albums) => {
    const slidesContainer = document.querySelector(`.carousel-slides`);
    const navLinks = document.querySelectorAll(`.carousel-navigation a`);
    const prevLink = navLinks[0];
    const nextLink = navLinks[1];

    let currentIndex = 0;
    const total = albums.length;
    const slideWidth = 640;

    // Make the slides
    albums.forEach((album) => {
        const slide = document.createElement(`div`);
        slide.classList.add(`slide`);

        // Create Album Title section
        const albumTitle = document.createElement(`h2`);
        albumTitle.classList.add(`album-title`);
        albumTitle.textContent = album.album;
        slide.appendChild(albumTitle);

        // Create Band Name section w/link
        const artistElement = document.createElement(`p`);
        artistElement.classList.add(`artist`);
        artistElement.innerHTML = `<a href="${album.url}" target="_blank">${album.artist}</a>`;
        slide.appendChild(artistElement);

        // Image
        const cover = document.createElement(`img`);
        cover.src = album.cover_image.path;
        cover.alt = album.cover_image.alt_content;
        cover.width = album.cover_image.width;
        cover.height = album.cover_image.height;
        slide.appendChild(cover);

        // Create Credit section
        const credit = document.createElement(`p`);
        credit.classList.add(`credit`);
        credit.innerHTML = `Credit: <a href="${album.cover_image.url}" target="_blank">
        ${album.cover_image.credit}</a>`;
        slide.appendChild(credit);

        // Review section
        const reviewContainer = document.createElement(`div`);
        reviewContainer.classList.add(`review`);

        // Main review section
        const reviewText = document.createElement(`p`);
        reviewText.classList.add(`review-text`);
        reviewText.textContent = album.review.content;
        reviewContainer.appendChild(reviewText);

        // Source section
        const reviewSource = document.createElement(`p`);
        reviewSource.classList.add(`review-source`);
        reviewSource.innerHTML = `&mdash; <a href="${album.review.url}" target="_blank">
        ${album.review.source}</a>`;
        reviewContainer.appendChild(reviewSource);

        slide.appendChild(reviewContainer);

        slidesContainer.appendChild(slide);
    });

    // Shift slides horizontally
    const updateSlide = () => {
        slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Left arrow click
    prevLink.addEventListener(`click`, (event) => {
        event.preventDefault();
        currentIndex = (currentIndex - 1 + total) % total;
        updateSlide();
    });

    // Right arrow click
    nextLink.addEventListener(`click`, (event) => {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % total;
        updateSlide();
    });

    // Arrow keys for navigation
    document.addEventListener(`keydown`, (event) => {
        if (event.key === `ArrowLeft`) {
            currentIndex = (currentIndex - 1 + total) % total;
            updateSlide();
        } else if (event.key === `ArrowRight`) {
            currentIndex = (currentIndex + 1) % total;
            updateSlide();
        }
    });
};
