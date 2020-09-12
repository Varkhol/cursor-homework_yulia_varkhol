import axios from '../14-homework/node_modules/axios';
const BASE = 'https://swapi.dev/api/';
const bodyElement = document.querySelector('body');
const charactersBlockClassName = 'characters';

const getCharactersByFilm = (filmIndex = 5) => {
    const config = {
        method: 'GET',
        url: BASE + 'films/' + filmIndex +'/'
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
    const charactersTitle = document.createElement('div');
    charactersTitle.className = "characters-title";
    charactersTitle.innerHTML = `Homework#12:`;
    bodyElement.append(charactersTitle);
    
    const charactersBlock = document.createElement('div');
    charactersBlock.className = charactersBlockClassName;

    bodyElement.append(charactersBlock);

    const container = document.querySelector(`.${charactersBlockClassName}`);

    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'character';
        characterElement.innerHTML = `
    <h3>Name: ${character.name}</h3>
    <h4>Birth year: ${character.birth_year}</h4>
    <h4>Gender: ${character.gender}</h4>
    `;
        container.append(characterElement);
    });
};

export function getCharactersByFilmFunc(){
    getCharactersByFilm().then(renderCharacters);
}