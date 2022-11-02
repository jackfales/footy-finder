const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();
const db = admin.firestore();

exports.createGame = functions.firestore
    .document("games/{gameId}")
    .onCreate((snap, context) => {
      const newGame = snap.data();
      db.doc("games/{snap.id}/game_preview").set({
        title: newGame.title,
        description: newGame.description,
        date_time: newGame.date_time,
        players_per_team: newGame.players_per_team,
        location: {
          city: newGame.location.city,
          state: newGame.location.state,
        },
      });
    });
