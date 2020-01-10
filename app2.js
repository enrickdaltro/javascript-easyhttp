// UI EVENT LISTENERS
document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getExternal);
// FUCTION GET TEXT TO FETCH LOCAL TEXT FILE DATA
function getText() {
    fetch('test.txt')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            document.querySelector('#output').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
        });
}

// FUNCTION GET JSON TO FETCH LOCAL JSON FILE DATA
function getJson() {
    fetch('post.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            // SINCE JSON RETURNS AN ARRAY, TO DISPLAY IT WE NEED TO LOOP THROUGHT IT
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>
                <li>${post.body}</li>`;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}

function getExternal() {
    fetch('https://api.github.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // SINCE JSON RETURNS AN ARRAY, TO DISPLAY IT WE NEED TO LOOP THROUGHT IT
            let output = '';
            data.forEach(function(user) {
                output += `<li>${user.login}</li>`;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}
