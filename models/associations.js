const User = require("../users/user.model");
const Song = require("../songs/song.model");
const Album =require("../albums/album.model")
const Artist = require("../artists/artist.model");
const Playlist = require("../playlists/playlist.model");
const Genre = require("../genres/genre.model");
const SongGenre = require("../songgenres/songgenre.model");
const PlaylistSong = require("../playlistsong/playlistsong.model");
const PlayHistory = require("../playhistory/playhistory.model");

// ========================
// USER RELATIONSHIPS
// ========================
User.hasMany(Playlist, { foreignKey: "user_id" });
Playlist.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(PlayHistory, { foreignKey: "user_id" });
PlayHistory.belongsTo(User, { foreignKey: "user_id" });

// ========================
// ARTIST RELATIONSHIPS
// ========================
Artist.hasMany(Album, { foreignKey: "artist_id" });
Album.belongsTo(Artist, { foreignKey: "artist_id" });

Artist.hasMany(Song, { foreignKey: "artist_id" });
Song.belongsTo(Artist, { foreignKey: "artist_id" });

// ========================
// ALBUM RELATIONSHIPS
// ========================
Album.hasMany(Song, { foreignKey: "album_id" });
Song.belongsTo(Album, { foreignKey: "album_id" });

// ========================
// SONG ↔ GENRE (MANY TO MANY)
// ========================
Song.belongsToMany(Genre, {
    through: SongGenre,
    foreignKey: "song_id",
    otherKey: "genre_id"
});

Genre.belongsToMany(Song, {
    through: SongGenre,
    foreignKey: "genre_id",
    otherKey: "song_id"
});

// ========================
// PLAYLIST ↔ SONG (MANY TO MANY)
// ========================
Song.belongsToMany(Playlist, {
    through: PlaylistSong,
    foreignKey: "song_id",
    otherKey: "playlist_id"
});

Playlist.belongsToMany(Song, {
    through: PlaylistSong,
    foreignKey: "playlist_id",
    otherKey: "song_id"
});

// ========================
// PLAY HISTORY RELATIONSHIP
// ========================
Song.hasMany(PlayHistory, { foreignKey: "song_id" });
PlayHistory.belongsTo(Song, { foreignKey: "song_id" });

module.exports = {
    User,
    Song,
    Album,
    Artist,
    Playlist,
    Genre,
    SongGenre,
    PlaylistSong,
    PlayHistory
};