window.onload = async () => {
  await getMusic();
};

const getMusic = async () => {
  await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=queens", {
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
      let artist = data.data;
      //   console.log(music);
      const artistdata = document.getElementById("artist-table");
      artistdata.innerHTML = "";

      artist.forEach((song) => {
        console.log(artist[0]);
        let newInnerHtml = `
          <table class="table table-borderless" id="artist-table">
          <tbody>
            <tr>
              <th scope="row">
                <div class="card mb-3">
                  <div class="row no-gutters alignedCards">
                    <div class="col-2 songImg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="rgb(64, 197, 64)" class="bi bi-reception-3" viewBox="0 0 16 16" style="display: -ms-inline-flexbox;">
                        <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                      <img
                        src=${song.album.cover}
                        alt="..."
                        style="
                          width: 35px;
                          height: 35px;
                          margin-left: 4px;
                        "
                      />
                    </div>
                    <div class="col-10">
                      <div class="card-body">
                        <p class="card-title" style="color: #1ed760">
                        ${song.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <td>${song.rank}</td>
              <td>${song.duration}</td>
            </tr>     
          </tbody>
        </table>`;
        artistdata.innerHTML += newInnerHtml;
      });
    });
};
