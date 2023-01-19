import "./style.css"
const getDog = document.querySelector('#random-dog');
const getCat = document.querySelector('#random-cat');
const surprise = document.querySelector('#surprise-me');
const petImage = document.querySelector('#random-pet-image');

getDog.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        const petURL = data.message;
        petImage.src = petURL;
    });
});

getCat.addEventListener('click', () => {
    fetch("https://aws.random.cat/meow")
    .then(res => res.json())
    .then(data => {
        const petURL = data.file;
        petImage.src = petURL;
    });
});

surprise.addEventListener('click', () => {
    Promise.any([
        fetch("https://aws.random.cat/meow"),
        fetch("https://dog.ceo/api/breeds/image/random"),
      ])
      .then((resp) => resp.json())
      .then((data) => {
        const petURL = data.file || data.message

        petImage.src = petURL
      });
});
