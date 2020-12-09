// initialize App
fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
const pokeListItems = document.querySelectorAll('.list-item');


// constants and variables
const TYPES = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
];
let prevUrl = null;
let nextUrl = null;

$('.list-item').click(function(e){
        if (!e.target) return;
        const listItem = e.target;
        if (!listItem.textContent) return;
        const id = listItem.textContent.split('.')[0];
        fetchPokeData(id);
});

// Functions
function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1);
}

function resetScreen(){
    $('.main-screen').removeClass('hide');
    for (const type of TYPES) {
        $('.main-screen').removeClass(type);
    }
};

function fetchPokeList(url){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const {results, previous, next} = data;
            prevUrl = previous;
            nextUrl = next;

            for (let i = 0; i < pokeListItems.length; i++) {
                const pokeListItem = pokeListItems[i];
                const resultData = results[i];

                if (resultData) {
                    const {name, url} = resultData;
                    const urlArray = url.split('/');
                    const id = urlArray[urlArray.length - 2];
                    pokeListItem.textContent = id + '. ' + capitalize(name);
                } else {
                    pokeListItem.textContent = '';
                }
            }
        });
};

function fetchPokeData(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            resetScreen();

            const dataTypes = data['types'];
            const dataFirstType = dataTypes[0];
            const dataSecondType = dataTypes[1];
            $('.poke-type-one').text(capitalize(dataFirstType['type']['name']));
            if (dataSecondType) {
                $('.poke-type-two').removeClass('hide');
                $('.poke-type-two').text(capitalize(dataSecondType['type']['name']));
            } else {
                $('.poke-type-two').addClass('hide')
                $('.poke-type-two').text('');
            }
            $('.main-screen').addClass(dataFirstType['type']['name']);

            $('.poke-name').text(capitalize(data['name']));
            $('.poke-id').text('#' + data['id'].toString().padStart(3, '0'));
            $('.poke-weight').text(data['weight']);
            $('.poke-height').text(data['height']);
            if (data['sprites']['front_default'] != null) {
                $('.poke-front-image').attr("src", data['sprites']['front_default']);
            }else{
                $('.poke-front-image').attr("src", 'https://lh3.googleusercontent.com/proxy/LiKXwa_6DxZMuhZFWo6TG6qH0lq_7WfOy4wGY2hmv6zlJVMHS1pyHSnYUAM2EJ0mg0RRVkEfPyXGuAiotVbkY7pQCTSlmIN-');
            }
            if(data['sprites']['back_default'] != null) {
                $('.poke-back-image').attr("src", data['sprites']['back_default']);
            }else{
                $('.poke-back-image').attr("src", 'https://lh3.googleusercontent.com/proxy/LiKXwa_6DxZMuhZFWo6TG6qH0lq_7WfOy4wGY2hmv6zlJVMHS1pyHSnYUAM2EJ0mg0RRVkEfPyXGuAiotVbkY7pQCTSlmIN-');
            }

        });
};

$('.prev-button').click(function () {
    if (prevUrl) {
        fetchPokeList(prevUrl);
    }
});

$('.next-button').click(function () {
    if (nextUrl) {
        fetchPokeList(nextUrl);
    }
});




