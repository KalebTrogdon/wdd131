const themeSelector = document.querySelector('#theme-selector');
const logo = document.querySelector('.logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    const body = document.body;

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.setAttribute('src', 'pic/byui-logo_white.png');
        logo.setAttribute('alt', 'BYU Idaho white logo');
    } else {
        body.classList.remove('dark');
        logo.setAttribute('src', 'pic/byui-logo.webp');
        logo.setAttribute('alt', 'BYU Idaho logo');
    }
}

themeSelector.addEventListener('change', changeTheme);
