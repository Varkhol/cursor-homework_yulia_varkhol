const BASE = 'https://swapi.dev/api/';
const FEMALE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.632 3.501 8.443 8 8.941v2.059h-3v2h3v2h2v-2h3v-2h-3v-2.059c4.499-.498 8-4.309 8-8.941zm-16 0c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"/></svg>';
const MALE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2v2h3.586l-3.972 3.972c-1.54-1.231-3.489-1.972-5.614-1.972-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.125-.741-4.074-1.972-5.614l3.972-3.972v3.586h2v-7h-7zm-6 20c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>';
const charactersBlockClassName = 'characters';
const planetsBlockClassName = 'planets';
const dispCharactersBtn = document.querySelector('#displayCharacters');
const dispPlanetsBtn = document.querySelector('#displayPlanets');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const bodyElement = document.querySelector('body');

let page = 1;

const getCharactersByFilm = (filmIndex = 5) => {
    const config = {
        maxRedirects: 0,
        method: 'GET',
        url: BASE + 'films/' + filmIndex
    };
    try {
        return axios(config).then((res) => {
            return res.data.characters;
        }).then((charactersUrlList) => {
            let formatedCharactersUrlList = [];

            charactersUrlList.forEach(url =>
                formatedCharactersUrlList.push(url.replace('http:', 'https:'))
            );

            return Promise.all(formatedCharactersUrlList.map((character) =>
                axios.get(character).then((res) => res.data)))
        })
    } catch (error) {
        console.log('Error message:' + error);
    };
};

const renderCharacters = (characters = []) => {
    removeBlocks();

    const charactersBlock = document.createElement('div');
    charactersBlock.className = charactersBlockClassName;

    bodyElement.append(charactersBlock);

    const container = document.querySelector(`.${charactersBlockClassName}`);
    let genderIcon = '';

    characters.forEach(character => {
        if (character.gender === 'female') {
            genderIcon = FEMALE_ICON;
        } else {
            genderIcon = MALE_ICON;
        }
        const characterElement = document.createElement('div');
        characterElement.className = 'character';
        characterElement.innerHTML = `
    <h3>Name: ${character.name}</h3>
    <h4>Birth year: ${character.birth_year}</h4>
    <h4>Gender: ${genderIcon}</h4>
    `;
        container.append(characterElement);
    });
};

dispCharactersBtn.addEventListener('click', () => {
    getCharactersByFilm().then(renderCharacters);
});

const getPlanets = (page = 1) => {
    const config = {
        method: 'GET',
        url: BASE + 'planets/',
        params: {
            page: page
        }
    };

    try {
        return axios(config).then(res => {
            return res.data.results
        });
    } catch (error) {
        console.log('Error message:' + error);
    };
};

const renderPlanets = (planets = []) => {
    removeBlocks();

    const planetsBlock = document.createElement('div');
    planetsBlock.className = planetsBlockClassName;

    bodyElement.append(planetsBlock);

    const container = document.querySelector(`.${planetsBlockClassName}`);
    container.innerHTML = '';

    planets.forEach(planet => {
        const planetElement = document.createElement('div');
        planetElement.className = 'planet';
        planetElement.innerHTML = `
        <h3>${planet.name}</h3>
      `;
        container.append(planetElement);
    });
};

dispPlanetsBtn.addEventListener('click', () => {
    getPlanets().then(renderPlanets);
});

const paginationInit = () => {
    prev.addEventListener('click', () => {
        if (page <= 1) {
            return;
        } else {
            getPlanets(--page).then(renderPlanets);
        }
    });
    next.addEventListener('click', () => {
        if (page >= 6) {
            return;
        } else {
            getPlanets(++page).then(renderPlanets);
        }

    });
};

const removeBlocks = () => {
    let characters = document.querySelector(`.${charactersBlockClassName}`);
    let planets = document.querySelector(`.${planetsBlockClassName}`);

    if (characters != null) {
        characters.remove();
    }

    if (planets != null) {
        planets.remove();
    }
};

const play = () => {
    const audio = document.querySelector('#audio');
    audio.play();
};

paginationInit();

document.addEventListener("click", play);