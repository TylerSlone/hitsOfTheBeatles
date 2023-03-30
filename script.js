//Targeting for the info properties
const artistNameElement = document.getElementById("artistName");
const songNameElement = document.getElementById("songName");
const albumNameElement = document.getElementById("albumName");
const yearReleasedElement = document.getElementById("yearReleased");
const albumArtElement = document.getElementById('albumArt');
const landingIframe = document.getElementById("landingIframe");

// Array of Objects containing all of The Beatles US number 1 hits
const songs = [
    {
        artist: "The Beatles",
        song: "Love Me Do",
        album: "Please Please Me",
        year: 1963,
        videoSource: "https://www.youtube.com/embed/0JWl_wUOQc4",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2117303/",
    },
    {
        artist: "The Beatles",
        song: "I Feel Fine",
        album: "I Feel Fine",
        year: 1964,
        videoSource: "https://www.youtube.com/embed/QbwZUiO9gwk",

        coverArtData: albumArtElement
    },
    {
        artist: "The Beatles",
        song: "Can't Buy Me Love",
        album: "A Hard Day's Night",
        year: 1964,
        videoSource: "https://www.youtube.com/embed/rZBp-XSR_dc",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2118147/"
    },
    {
        artist: "The Beatles",
        song: "Eight Days a Week",
        album: "Beatles For Sale",
        year: 1964,
        videoSource: "https://player.vimeo.com/video/306672554?h=cbb9cb0938",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2146428/"
    },
    {
        artist: "The Beatles",
        song: "I Want to Hold your hand",
        album: "Meet the Beatles!",
        year: 1964,
        videoSource: "https://player.vimeo.com/video/386922775?h=38c4ba5941",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2176157/"
        
    },
    {
        artist: "The Beatles",
        song: "She Loves You",
        album: "Twist and Shout",
        year: 1964,
        videoSource: "https://www.youtube.com/embed/KkznaMv7hQo",

        coverArtData:  "https://theaudiodb.com/api/v1/json/2/album.php?m=2330255/"
    },
    {
        artist: "The Beatles",
        song: "A Hard Day's Night",
        album: "A Hard Day's Night",
        year: 1964,
        videoSource: "https://www.youtube.com/embed/vn0BUrrkr0A", 

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2118147/"
    },
    {
        artist: "The Beatles",
        song: "We Can Work it Out",
        album: "Single",
        year: 1965,
        videoSource: "https://www.youtube.com/embed/jCffDM6zDTY", 

        coverArtData:  albumArtElement
    },
    {
        artist: "The Beatles",
        song: "Yesterday",
        album: "Help!",
        year: 1965,
        videoSource: "https://www.youtube.com/embed/4j3uytP4aCg",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2109681/"
    },
    {
        artist: "The Beatles",
        song: "Ticket to Ride",
        album: "Help!",
        year: 1965,
        videoSource: "https://www.youtube.com/embed/ICwIt47toMc",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2109681/"
    },
    {
        artist: "The Beatles",
        song: "Help!",
        album: "Help!",
        year: 1965,
        videoSource: "https://www.youtube.com/embed/NN__87QIyzY",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2109681/"
    },
    {
        artist: "The Beatles",
        song: "Paperback Writer",
        album: "Single",
        year: 1966,
        videoSource: "https://www.youtube.com/embed/wltzHHYxWvI",

        coverArtData: albumArtElement
    },
    {
        artist: "The Beatles",
        song: "All You Need is Love",
        album: "Magical Mystery Tour",
        year: 1967,
        videoSource: "https://player.vimeo.com/video/306906950?h=36463a7744",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2118148/"
    },
    {
        artist: "The Beatles",
        song: "Hello Goodbye",
        album: "Magical Mystery Tour",
        year: 1967,
        videoSource: "https://player.vimeo.com/video/634800949?h=4b5444033e",

        coverArtData:  "https://theaudiodb.com/api/v1/json/2/album.php?m=2118148/"
    },
    {
        artist: "The Beatles",
        song: "Penny Lane",
        album: "Magical Mystery Tour",
        year: 1967,
        videoSource: "https://www.youtube.com/embed/x-53leNAh30",

        coverArtData:  "https://theaudiodb.com/api/v1/json/2/album.php?m=2118148/"
    },
    {
        artist: "The Beatles",
        song: "Hey Jude",
        album: "Single",
        year: 1968,
        videoSource: "https://player.vimeo.com/video/278549299?h=f7925f8612",

        coverArtData: albumArtElement
    },
    {
        artist: "The Beatles",
        song: "Come Together",
        album: "Abbey Road",
        year: 1969,
        videoSource: "https://www.youtube.com/embed/36yMAhPV1-Y",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2109694/"
    },
    {
        artist: "The Beatles",
        song: "Let it Be",
        album: "Let it Be",
        year: 1970,
        videoSource: "https://www.youtube.com/embed/_kvPZvX5J6c",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2118149/"
    },
    {
        artist: "The Beatles",
        song: "Get Back",
        album: "Let It Be",
        year: 1970,
        videoSource: "https://www.youtube.com/embed/ncEKLLm3D5Y",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2118149/"
    },
    {
        artist: "The Beatles",
        song: "The Long And Winding Road",
        album: "Let it Be",
        year: 1970,
        videoSource: "https://www.youtube.com/embed/oz3JlMhgfq0",

        coverArtData: "https://theaudiodb.com/api/v1/json/2/album.php?m=2118149/",
    },


];

const buttons = document.querySelectorAll(".songSelectors");


// The magical loop
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const songIndex = this.dataset.songIndex;
    const song = songs[songIndex];
    artistNameElement.textContent=song["artist"];
    songNameElement.textContent = song["song"];
    albumNameElement.textContent = song["album"];
    yearReleasedElement.textContent =song["year"];
    landingIframe.src = (song.videoSource);

     fetch(song.coverArtData)
      .then(response => response.json())
      .then(data => {
        const albumArt = data.album[0].strAlbumThumb;
        albumArtElement.innerHTML = `<img src="${albumArt}" Title="${song.album} album art">`;
      })
      
      .catch(error => console.log(error));
      albumArtElement.textContent = "Album art not available";
    
  });
  
  
}); 

//Chart showing The Beatles album sales

const xValues = ["Sgt. Pepper's Lonley Hearts Club Band", "Abbey Road", "The White Album", "Rubber Soul", "Revolver", "Magical Mystery Tour", "Let it Be"
, "A Hard Day's Night", "Help!", "Please, Please Me", "Beatles For Sale", "Yellow Submarine", "With The Beatles"];
let yValues =[32000000, 19893949, 13782269, 8575843, 7174684, 7032199, 5957058 , 5352124, 4403956, 1674069, 1375610, 1250492, 1118954];
let pieColors =["#f9ffc9", "#acead4", "#b8d5ff", "#eacbff", "#ffd2ef", "#9d9196", "#37343a", "#ffe9dd", "#e39b99", "#7a504f", "#9ca5ee", "#8e7cc3", "#6fa8dc", "#0b5394"];


new Chart("albumSalesVisulazation", {
  type: "doughnut",
  data:  {
    labels: xValues,
    datasets: [{
      backgroundColor: pieColors,
      data: yValues
    }]
  },
    options: {
      title : {
        display: true,
        text: "The Beatles WorldWide Albums Sales",
        fontColor: "Teal",
        responsive: false,
        maintainAspectRatio: false
      }
    }
});

Chart.defaults.global.defaultFontColor = "White";

//Hide & Show Chart click event

const showHideChartButton = document.getElementById("showHideChartButton");
const chartContainer = document.getElementById("chartEncapsulation")


showHideChartButton.addEventListener("click", function(){
  if (chartContainer.style.display === "none" || chartContainer.style.display === "") {
    chartContainer.style.display = "flex";
  } else {
    chartContainer.style.display = "none";
  }
});