import axios from "axios";
import express from 'express';
import moment from "moment";
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    const apikey = req.headers['x-api-key'];
    if (!apikey) {
        res.status(401).send('No se proporcionó la clave API');
        return;
      }
    
    
    const fecha = moment().subtract(10, 'minutes').toISOString();
  
    axios.get(`https://api.rootnet.cloud/v1/transfers/0x9c4CfCFE31B642fEED84E82013250F859EBceB0D?sort=desc&startDate=${fecha}`)

 
    .then((response) => {
        const json=response.data;
        const result = json.data.map(item => ({
            from: item.from,
            amount: item.amount,
            blockHeight: item.blockHeight 
          }));
        res.send(result);
    })
    .catch((error) => {
    console.error(error);
    })

});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`) 
});
