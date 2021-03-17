alert('js is loaded');
// constant variables - data that doesnt change ever!

// State variables- Data that does change!

// cached element references - parts of the DOM that we need to touch 

// event listeners - capture and respond to events i.e iser clicks on something

// functions code that represents actions taken/carried out 

function getData() {
    $.ajax('https://api.spacexdata.com/v3/launches')
        .then(function(data) {
                console.log(data);
            },
            function(error) {
                console.log(error);
            });
}