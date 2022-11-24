// declaration de variable
let numberOfSeasons = 6;
let numberOfEpisodes = 12;
// #######################
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime = (numberOfEpisodes*numberOfSeasons)*(episodeTime+commercialTime);

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season
Total viewing time: ${totalShowTime} minutes`
//patie episode
class Episode {
    constructor(title,duration,hasBeenWatched){
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
    
}

let firstEpisode = new Episode ('prémier episode',45,true);
let secondEpisode = new Episode ('deuxième episode',38,false);
let thirdEpisode = new Episode ('troisième episode',40, false);

document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;