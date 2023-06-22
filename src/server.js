const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');

const app = express();
const nexmo = new Nexmo({
  apiKey: 'TU_API_KEY',
  apiSecret: 'TU_API_SECRET'
});

app.use(bodyParser.json());

app.post('/send-text-message', (req, res) => {
  const { message } = req.body;

  const nexmoFromNumber = 'TU_NUMERO_DE_TELEFONO';
  const nexmoToNumber = 'NUMERO_DEL_PADRE';

  nexmo.message.sendSms(nexmoFromNumber, nexmoToNumber, message, (err, responseData) => {
    if (err) {
      console.error('Error al enviar el mensaje:', err);
      res.status(500).send('Error al enviar el mensaje');
    } else {
      if (responseData.messages[0].status === '0') {
        console.log('Mensaje enviado correctamente.');
        res.status(200).send('Mensaje enviado correctamente');
      } else {
        console.error('Error al enviar el mensaje. Estado:', responseData.messages[0]['error-text']);
        res.status(500).send('Error al enviar el mensaje');
      }
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
