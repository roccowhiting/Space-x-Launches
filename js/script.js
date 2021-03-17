// constant variables - data that doesnt change ever!
const BASE_URL = 'https://api.spacexdata.com/v3/launches';

// State variables- Data that does change!
let launches;
// cached element references - parts of the DOM that we need to touch 

const $launches = $('#launches');

// event listeners - capture and respond to events i.e iser clicks on something

// functions code that represents actions taken/carried out 

init();

function init() {
    getData();
}

function getData() {
    $.ajax(BASE_URL + "?limit=12")
        .then(function(data) {
                launches = data;
                render();
            }, function(error) {
                console.log(error);
            });
}

function render() {
    const html = launches.map(function(launch) {
        return `
        <article class="card">
           <h1>${launch.mission_name}</h1>
           <p>${launch.launch_year}</p>
           <p></p>
        </article>
    `;
    })
    $launches.append(html);
}