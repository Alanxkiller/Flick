const { request, response } = require('express');
const nodeMailer = require('nodemailer');


const envioCorreo = (req = request, resp = response) => {
    let body = req.body;
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;


    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        auth: {
            user: 'flickcorreos@gmail.com',
            pass: 'zshlxcorpftkqegj'
        }
    });


    const opciones = {
        from: 'flickcorreos@gmail.com',
        to: 'semamaanal5@gmail.com', // Replace with recipient email address
        subject: 'Sistema de envio de correos',
        text: `
        Nombre: ${name}
        Correo: ${email}
        El mensaje recibido es: ${message}
      `
    };



    config.sendMail(opciones, function (error, result) {
        console.log(opciones);
        if (error) return resp.json({ ok: false, msg: error });

        return resp.json({
            ok: true,
            msg: result
        });
    })

}


module.exports = {
    envioCorreo
}