// Array of Objects containing all of The Beatles US number 1 hits
const songs = [
    {
        artist: "The Beatles",
        song: "Love Me Do",
        album: "Please Please Me",
        year: 1963,
    },
    {
        artist: "The Beatles",
        song: "I Feel Fine",
        album: "I Feel Fine",
        year: 1964,
    },
    {
        artist: "The Beatles",
        song: "Can't Buy Me Love",
        album: "A Hard Day's Night",
        year: 1964,
    },
    {
        artist: "The Beatles",
        song: "Eight Days a Week",
        album: "Beatles For Sale",
        year: 1964,
    },
    {
        artist: "The Beatles",
        song: "I Want to Hold your hand",
        album: "Meet the Beatles!",
        year: 1964,
    },
    {
        artist: "The Beatles",
        song: "She Loves You",
        album: "Twist and Shout",
        year: 1964,
    },
    {
        artist: "The Beatles",
        song: "A Hard Day's Night",
        album: "A Hard Day's Night",
        year: 1964,
    },
    {
        artist: "The Beatles",
        song: "We Can Work it Out",
        album: "Single",
        year: 1965,
    },
    {
        artist: "The Beatles",
        song: "Yesterday",
        album: "Help!",
        year: 1965,
    },
    {
        artist: "The Beatles",
        song: "Ticket to Ride",
        album: "Help!",
        year: 1965,
    },
    {
        artist: "The Beatles",
        song: "Help!",
        album: "Help!",
        year: 1965,
    },
    {
        artist: "The Beatles",
        song: "Paperback Writer",
        album: "Single",
        year: 1966,
    },
    {
        artist: "The Beatles",
        song: "All You Need is Love",
        album: "Magical Mystery Tour",
        year: 1967,
    },
    {
        artist: "The Beatles",
        song: "Hello Goodbye",
        album: "Magical Mystery Tour",
        year: 1967,
    },
    {
        artist: "The Beatles",
        song: "Penny Lane",
        album: "Magical Mystery Tour",
        year: 1967,
    },
    {
        artist: "The Beatles",
        song: "Hey Jude",
        album: "Single",
        year: 1968,
    },
    {
        artist: "The Beatles",
        song: "Come Together",
        album: "Abbey Road",
        year: 1969,
    },
    {
        artist: "The Beatles",
        song: "Let it Be",
        album: "Let it Be",
        year: 1970,
    },
    {
        artist: "The Beatles",
        song: "Get Back",
        album: "Let It Be",
        year: 1970,
    },
    {
        artist: "The Beatles",
        song: "The Long And Winding Road",
        album: "Let it Be",
        year: 1970,
    },


];

//Video variables
const landingIframe = document.getElementById("landingIframe");
const lovemeDoButton = document.getElementById("loveMeDo");
const iFeelFineButton = document.getElementById("iFeelFine");
const cantBuyMeLoveButton = document.getElementById("can'tBuyMeLove");
const eightDaysAWeekButton = document.getElementById("eightDaysAWeek");
const iwanttoHoldYourHandButton = document.getElementById("iWantToHoldYourHand");
const sheLovesYouButton = document.getElementById("sheLovesYou");
const aHardDaysNightButton = document.getElementById("aHardDay'snight");
const weCanWorkItOutButton = document.getElementById("weCanWorkItOut");
const yesterdayButton = document.getElementById("yesterday");
const ticketToRideButton = document.getElementById("ticketToRide");
const helpButton = document.getElementById("help!Button");
const paperBackWriterButton = document.getElementById("paperBackWriter");
const allYouNeedIsLoveButton = document.getElementById("allYouNeedIsLove");
const helloGoobdyeButton = document.getElementById("helloGoobdye");
const pennyLaneButton = document.getElementById("pennyLane");
const heyJudeButton = document.getElementById("heyJude");
const comeTogetherButton = document.getElementById("comeTogether");
const letItBeButton = document.getElementById("letItBe");
const getBackButton = document.getElementById("getBack");
const theLongandWindingRoadButton = document.getElementById("theLongandWindingRoad");


//Targeting for the info properties
const artistNameElement = document.getElementById("artistName");

const songNameElement = document.getElementById("songName");
const albumNameElement = document.getElementById("albumName");
const yearReleasedElement = document.getElementById("yearReleased");

//albumArt section targeting

const albumArtElement = document.getElementById('albumArt');

//Event listeners for video changes & Api Calls
lovemeDoButton.addEventListener("click", function() {
  landingIframe.src = "https://www.youtube.com/embed/0JWl_wUOQc4";
  artistNameElement.textContent= songs[0].artist;
  songNameElement.textContent = songs[0].song;
  albumNameElement.textContent = songs [0].album;
  yearReleasedElement.textContent = songs[0].year;
  
  fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2117303/')
  .then(response => response.json())
  .then(data => {
    const albumCoverArt = data.album[0].strAlbumThumb;
    albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Please Please Me album cover">`;
  })
  .catch(error => {
    console.error(error);
  });
});

iFeelFineButton.addEventListener("click", function() {
  landingIframe.src = "https://www.youtube.com/embed/QbwZUiO9gwk";
  artistNameElement.textContent= songs[0].artist;
  songNameElement.textContent = songs[1].song;
  albumNameElement.textContent = songs [1].album;
  yearReleasedElement.textContent = songs[1].year;

//There was no album art for this album on my chosen API
albumArtElement.innerHTML = '';
 
});

cantBuyMeLoveButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/rZBp-XSR_dc";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[2].song;
    albumNameElement.textContent = songs [2].album;
    yearReleasedElement.textContent = songs[2].year;


    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2118147/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="A Hard Day's Night album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

eightDaysAWeekButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/306672554?h=cbb9cb0938";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[3].song;
    albumNameElement.textContent = songs [3].album;
    yearReleasedElement.textContent = songs[3].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2146428/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Beatles For Sale album Cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

iwanttoHoldYourHandButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/386922775?h=38c4ba5941";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[4].song;
    albumNameElement.textContent = songs [4].album;
    yearReleasedElement.textContent = songs[4].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2176157/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Mee the Beatles album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

sheLovesYouButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/KkznaMv7hQo";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[5].song;
    albumNameElement.textContent = songs [5].album;
    yearReleasedElement.textContent = songs[5].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2330255/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Twist and Shout album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

aHardDaysNightButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/vn0BUrrkr0A";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[6].song;
    albumNameElement.textContent = songs [6].album;
    yearReleasedElement.textContent = songs[6].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2118147/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="A Hard day's Night album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

weCanWorkItOutButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/jCffDM6zDTY";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[7].song;
    albumNameElement.textContent = songs [7].album;
    yearReleasedElement.textContent = songs[7].year;

    albumArtElement.innerHTML = '';

});

yesterdayButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/4j3uytP4aCg";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[8].song;
    albumNameElement.textContent = songs [8].album;
    yearReleasedElement.textContent = songs[8].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2109681/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Help! album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

ticketToRideButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/ICwIt47toMc";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[9].song;
    albumNameElement.textContent = songs [9].album;
    yearReleasedElement.textContent = songs[9].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2109681/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Help! album cover">`;
    })
    .catch(error => {
      console.error(error);
    });

});

helpButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/NN__87QIyzY";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[10].song;
    albumNameElement.textContent = songs [10].album;
    yearReleasedElement.textContent = songs[10].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2109681/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Help! album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

paperBackWriterButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/wltzHHYxWvI";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[11].song;
    albumNameElement.textContent = songs [11].album;
    yearReleasedElement.textContent = songs[11].year;

    albumArtElement.innerHTML = "";
});

allYouNeedIsLoveButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/306906950?h=36463a7744";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[12].song;
    albumNameElement.textContent = songs [12].album;
    yearReleasedElement.textContent = songs[12].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2118148/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Magical Mystery Tour album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

helloGoobdyeButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/634800949?h=4b5444033e";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[13].song;
    albumNameElement.textContent = songs [13].album;
    yearReleasedElement.textContent = songs[13].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2118148/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Magical Mystery Tour album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

pennyLaneButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/x-53leNAh30";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[14].song;
    albumNameElement.textContent = songs [14].album;
    yearReleasedElement.textContent = songs[14].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2118148/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Magical Mystery Tour album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

heyJudeButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/278549299?h=f7925f8612";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[15].song;
    albumNameElement.textContent = songs [15].album;
    yearReleasedElement.textContent = songs[15].year;

    albumArtElement.innerHTML = "";
});

comeTogetherButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/36yMAhPV1-Y";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[16].song;
    albumNameElement.textContent = songs [16].album;
    yearReleasedElement.textContent = songs[16].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2109694/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Abbey Road album Cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

letItBeButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/_kvPZvX5J6c";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[17].song;
    albumNameElement.textContent = songs [17].album;
    yearReleasedElement.textContent = songs[17].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2118149/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Let it Be album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

getBackButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/ncEKLLm3D5Y";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[18].song;
    albumNameElement.textContent = songs [18].album;
    yearReleasedElement.textContent = songs[18].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2118149/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Let it Be album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});

theLongandWindingRoadButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/oz3JlMhgfq0";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[19].song;
    albumNameElement.textContent = songs [19].album;
    yearReleasedElement.textContent = songs[19].year;

    fetch('https://theaudiodb.com/api/v1/json/2/album.php?m=2118149/')
    .then(response => response.json())
    .then(data => {
      const albumCoverArt = data.album[0].strAlbumThumb;
      albumArtElement.innerHTML = `<img src="${albumCoverArt}" Title="Let it Be album cover">`;
    })
    .catch(error => {
      console.error(error);
    });
});




//Chart showing The Beatles album sales

const xValues = ["Sgt. Pepper's Lonley Hearts Club Band", "Abbey Road", "The White Album", "Rubber Soul", "Revolver", "Magical Mystery Tour", "Let it Be"
, "A Hard Day's Night", "Help!", "Please, Please Me", "Beatles For Sale", "Yellow Submarine", "With The Beatles"];
let yValues =[32000000, 19893949, 13782269, 8575843, 7174684, 7032199, 5957058 , 5352124, 4403956, 1674069, 1375610, 1250492, 1118954];
let pieColors =["#f9ffc9", "#acead4", "#b8d5ff", "#eacbff", "#ffd2ef", "#9d9196", "#37343a", "#ffe9dd", "#e39b99", "#7a504f", "#9ca5ee", "#8e7cc3", "#6fa8dc", "#0b5394"];

/*console.log(Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(yValues[0]));

function numberFix(yValues){
  return yValues.toLocaleString('en-US');
}

console.log(numberFix(yValues));

const formattedYValues = yValues.map(num => num.toLocaleString()); */

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
        // aspectRatio: 1,
        // resizeDelay: 150
      }
    }
});

Chart.defaults.global.defaultFontColor = "White";



/* window.addEventListener("resize", function () {
  myChart.options.aspectRatio = 0.1;
  myChart.update();
}); */


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