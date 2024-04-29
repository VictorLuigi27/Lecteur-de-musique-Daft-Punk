
    const musiqueContenant = document.getElementById('musique-contenant');
    const btnPlay = document.getElementById('play');
    const btnPrecedent = document.getElementById('precedent');
    const btnSuivant = document.getElementById('suivant');
    const audio = document.getElementById('audio');
    const titre = document.getElementById('titre');
    const cover = document.getElementById('cover');

    // Titre chansons
    const chansonsArr = ['Superheroes', 'Technologic', 'One more time', 'Aerodynamic', 'Veridis Quo', 'Da funk'];

    // Ordre des chansons 
    let ordreChanson = 0;

    // Relier la chanson et les fichiers 

    function telechargerChanson(chanson) {
        titre.innerText = chanson;
        audio.src = `audio/${chanson}.mp3`;
        cover.src = `images/${chanson}.jpg`;
    }

    // Jouer la première chanson
    telechargerChanson(chansonsArr[ordreChanson]);

    // EVENT LISTENERS 

    // Play - Pause 
    btnPlay.addEventListener('click', () => {
        const enTrainDeJouer = musiqueContenant.classList.contains('play');

        if (enTrainDeJouer) {
            pauseChanson();
        } else {
            playChanson();
        }
    });

    // Changer de chanson

    btnPrecedent.addEventListener('click', chansonPrecedente);
    btnSuivant.addEventListener('click', chansonSuivante);

    // Play 
    function playChanson() {
        musiqueContenant.classList.add('play');
        btnPlay.querySelector('i.fa-solid').classList.remove('fa-play');
        btnPlay.querySelector('i.fa-solid').classList.add('fa-pause');
        audio.play();
    }

    // Pause
    function pauseChanson() {
        musiqueContenant.classList.remove('play');
        audio.pause();
        btnPlay.querySelector('i.fa-solid').classList.add('fa-play');
        btnPlay.querySelector('i.fa-solid').classList.remove('fa-pause');
    }


// Chanson précédente 


    function chansonPrecedente(){
    ordreChanson--;

        if(ordreChanson < 0) {
            ordreChanson = chansonsArr.length - 1;
        }   

        telechargerChanson(chansonsArr[ordreChanson]);

        playChanson();
    }


// Chanson suivante

function chansonSuivante(){
    ordreChanson++;

        if(ordreChanson > chansonsArr.length - 1) {
            ordreChanson = 0;
        }   

        telechargerChanson(chansonsArr[ordreChanson]);

        playChanson();
    }

// Update Event

audio.addEventListener('timeupdate', updateProgres)


function updateProgres(e){
    const duree = e.srcElement.duration;
    const tempsCourant = e.srcElement.currentTime;
    
    const pourcentageProgres = (tempsCourant / duree) * 100;

    // Mettre à jour le % dans le css

    progres.style.width = `${pourcentageProgres}%`;
}