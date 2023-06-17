const { request, response } = require('express');
const nodeMailer = require('nodemailer');
var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKeys.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const obtenerVideo = async (req = request, resp = response) => {
    const db = admin.firestore();

    let customerRef = db.collection("videos");

    const querySnapshot = await customerRef.get();
    const numTrailers = querySnapshot.size;
    const rando = Math.floor(Math.random()*numTrailers);
    const trailer = querySnapshot.docs[rando].data().url;

    querySnapshot.forEach(document => {
        console.log(document.data().url);
    })

    return resp.json({
        ok: true,
        msg: '',
        trailer
    });
}


module.exports = {
    obtenerVideo
}
