import { headers } from "./headers.js";
import axios from "axios";

const config = {
  baseURL: "https://kaspi.kz/yml"
}

// const client = new Axios(config);

const client = axios.create(config)

const postData = {
  "cityId": "352835100",
  "id": "100984093",
  "merchantUID": "",
  "limit": 5,
  "page": 0,
  "sort": true,
  "product": {
      "brand": "Apple",
      "categoryCodes": ["Wireless chargers", "Phone accessories", "Smartphones and gadgets", "Categories"],
      "baseProductCodes": null,
      "groups": null
  },
  "installationId": "-1"
}


client.post("/offer-view/offers/100984093", postData, {headers})
  .then((response) => {
    // console.log('Ответ от сервера:', response.data);
    console.dir(response)
  })
  .catch((error) => {
    console.error('Произошла ошибка при отправке POST-запроса:', error);
  });