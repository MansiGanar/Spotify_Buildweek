window.onload = async () => {
  await getMusic();
};

const getMusic = async () => {
  await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "5b581091e7msh82654b4f54620ffp1fedf2jsn11be0533fe34",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let music = data.data;
      //   console.log(music);
      const musicdata = document.getElementById("music");

      music.forEach((song) => {
        console.log(music[0]);
        let newInnerHtml = `
          <div class="d-flex justify-content-between ml-4 ">
        <div class="card music-card2">
          <img
            class="img-fluid align-self-center mt-3 pl-3 pr-3"
            src=${song.album.cover}
            alt="Card image cap"
          />
          <div class="card-body">
            <h6>${song.title}</h6>
            <p class="card-text">400 songs</p>
          </div>
        </div>
      </div>`;
        musicdata.innerHTML += newInnerHtml;
      });
    });
};
