// Array of Objects containing all the US number 1 hits
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

//Event listeners for video changes
lovemeDoButton.addEventListener("click", function() {
  landingIframe.src = "https://www.youtube.com/embed/0JWl_wUOQc4";
  artistNameElement.textContent= songs[0].artist;
  songNameElement.textContent = songs[0].song;
  albumNameElement.textContent = songs [0].album;
  yearReleasedElement.textContent = songs[0].year;
});

iFeelFineButton.addEventListener("click", function() {
  landingIframe.src = "https://www.youtube.com/embed/QbwZUiO9gwk";
  artistNameElement.textContent= songs[0].artist;
  songNameElement.textContent = songs[1].song;
  albumNameElement.textContent = songs [1].album;
  yearReleasedElement.textContent = songs[1].year;
});

cantBuyMeLoveButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/rZBp-XSR_dc";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[2].song;
    albumNameElement.textContent = songs [2].album;
    yearReleasedElement.textContent = songs[2].year;
});

eightDaysAWeekButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/306672554?h=cbb9cb0938";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[3].song;
    albumNameElement.textContent = songs [3].album;
    yearReleasedElement.textContent = songs[3].year;
});

iwanttoHoldYourHandButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/386922775?h=38c4ba5941";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[4].song;
    albumNameElement.textContent = songs [4].album;
    yearReleasedElement.textContent = songs[4].year;
});

sheLovesYouButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/KkznaMv7hQo";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[5].song;
    albumNameElement.textContent = songs [5].album;
    yearReleasedElement.textContent = songs[5].year;
});

aHardDaysNightButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/vn0BUrrkr0A";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[6].song;
    albumNameElement.textContent = songs [6].album;
    yearReleasedElement.textContent = songs[6].year;
});

weCanWorkItOutButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/jCffDM6zDTY";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[7].song;
    albumNameElement.textContent = songs [7].album;
    yearReleasedElement.textContent = songs[7].year;
});

yesterdayButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/4j3uytP4aCg";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[8].song;
    albumNameElement.textContent = songs [8].album;
    yearReleasedElement.textContent = songs[8].year;
});

ticketToRideButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/ICwIt47toMc";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[9].song;
    albumNameElement.textContent = songs [9].album;
    yearReleasedElement.textContent = songs[9].year;
});

helpButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/NN__87QIyzY";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[10].song;
    albumNameElement.textContent = songs [10].album;
    yearReleasedElement.textContent = songs[10].year;
});

paperBackWriterButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/wltzHHYxWvI";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[11].song;
    albumNameElement.textContent = songs [11].album;
    yearReleasedElement.textContent = songs[11].year;
});

allYouNeedIsLoveButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/306906950?h=36463a7744";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[12].song;
    albumNameElement.textContent = songs [12].album;
    yearReleasedElement.textContent = songs[12].year;
});

helloGoobdyeButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/634800949?h=4b5444033e";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[13].song;
    albumNameElement.textContent = songs [13].album;
    yearReleasedElement.textContent = songs[13].year;
});

pennyLaneButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/x-53leNAh30";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[14].song;
    albumNameElement.textContent = songs [14].album;
    yearReleasedElement.textContent = songs[14].year;
});

heyJudeButton.addEventListener("click", function() {
    landingIframe.src = "https://player.vimeo.com/video/278549299?h=f7925f8612";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[15].song;
    albumNameElement.textContent = songs [15].album;
    yearReleasedElement.textContent = songs[15].year;
});

comeTogetherButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/36yMAhPV1-Y";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[16].song;
    albumNameElement.textContent = songs [16].album;
    yearReleasedElement.textContent = songs[16].year;
});

letItBeButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/_kvPZvX5J6c";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[17].song;
    albumNameElement.textContent = songs [17].album;
    yearReleasedElement.textContent = songs[17].year;
});

getBackButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/ncEKLLm3D5Y";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[18].song;
    albumNameElement.textContent = songs [18].album;
    yearReleasedElement.textContent = songs[18].year;
});

theLongandWindingRoadButton.addEventListener("click", function() {
    landingIframe.src = "https://www.youtube.com/embed/oz3JlMhgfq0";
    artistNameElement.textContent= songs[0].artist;
    songNameElement.textContent = songs[19].song;
    albumNameElement.textContent = songs [19].album;
    yearReleasedElement.textContent = songs[19].year;
});
