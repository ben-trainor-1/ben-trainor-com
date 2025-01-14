
const fade_out_length = 2000;
const fade_in_length = 1000;
const default_volume = .8;

function getHowl(folder_path, track_title, volume = default_volume, autoplay = false) {
    return new Howl({
        src: [folder_path + "/" + track_title + ".mp3", folder_path + "/" + track_title + ".ogg"],
        volume: volume,
        autoplay: autoplay
    });
}

function initAudioPlaylist(playlist_id) {
    let tracks = $("#" + playlist_id + " .audio-track");
    tracks.each((i, element) => {
        $(element).on("click", () => { playTrack(playlist_id, element) });
    });
}

function playTrack(playlist_id, track_element) {

    fadeCurrentSounds();
    let current_track_element = getCurrentPlaylistTrackElement(playlist_id);
    current_track_element.removeClass("playing");
    let current_track_title = $(current_track_element).data("track-title");

    let new_track_title = $(track_element).data("track-title");
    if (current_track_title != new_track_title) {
        let new_sound = getHowl("audio/music", new_track_title);
        new_sound.volume(0);
        new_sound.play();
        new_sound.fade(0, default_volume, fade_in_length);
        $(track_element).addClass("playing");
    }

}

function getCurrentPlaylistTrackElement(playlist_id) {
    return $("#" + playlist_id + " .playing");
}

function fadeCurrentSounds() {
    let sounds = Howler._howls;
    if (sounds.length > 0) {
        for (let i = 0; i < sounds.length; i++) {
            sounds[i].fade(sounds[i].volume(), 0, fade_out_length);
            // sounds[i].on("fade", () => { sounds[i].unload() });
        }
    }
}

function killCurrentSounds() {
    $(".playing").removeClass("playing");
    let sounds = Howler._howls;
    if (sounds.length > 0) {
        for (let i = 0; i < sounds.length; i++) {
            sounds[i].stop();
        }
    }
}
