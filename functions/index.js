const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();
const db = admin.firestore();

exports.createGame = functions.firestore
    .document("games/{gameId}")
    .onCreate((snap, context) => {
      const newGame = snap.data();
      const gameId = context.params.gameId;
      db.doc("games/" + gameId + "/game_preview/" + gameId).set({
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

exports.createUser = functions.firestore
    .document("users/{userId}")
    .onCreate((snap, context) => {
      const newUser = snap.data();
      const userId = context.params.userId;
      db.doc("users/" + userId + "/public_profile/" + userId).set({
        name: newUser.name,
      });
    });
