// makes the request
$.ajax("https://dummydata.netlify.app/mariones.json")
// what happens when the request finished
.then((data) => {
console.log(data.nes_games)
data.nes_games.forEach(game => {
    const $div = $('<div>')
    $div.html(`<img src=${game.img} alt=${game.name}/>`)
    $('.mariogames').append($div)
})
})
// what happens if the request fails
.catch((error) => {
    console.log(error)
})
//grabbing DOM elements I will be using
const $input = $('input')
const $button = $('button')
const $aside = $('aside')

//put click event on button
 $button.on('click', () => {
    //get text from input (from what user typed)
    const searchTerm = $input.val()
    //make API call
    $.ajax(`https://www.omdbapi.com/?apikey=241e4cd1&t=${searchTerm}`)
    .then((data) => {
        //set html with aside tag with movies data
        $('aside').html(`
        <h1>${data.Title}</h1>
        <img src=${data.Poster}/>`)
    })

})