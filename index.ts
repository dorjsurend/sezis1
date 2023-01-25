import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://infosys.ufe.edu.mn:9999",
  headers: {
    accept: "application/json",
    "accept-language": "en-US,en;q=0.9",
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzQ0NDk2NDEsImV4cCI6MTcxMDQ0OTY0MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiRkExNkI0ODYifQ.PjcAWFdQmVP9ug24qBA7UHwWPZA2zZbqm9Te8AMDoKmF6cR800vQN0ScUZDjz95OTfKtuhOoZnJpnmijht4__iai66_aYUaKdTdffjHJ6coGGYMdIJYFFSy6s35EmZ0j5rTE7AO-F5eYaF19FfObBp18MXK_4cu5muZy7IjSPZxNGeK-lE6M8o7Z_wWNhPf_SuhB1mk0CmF8m_Z1gMPQQiJ6W08AHYRfy3r-7UtQQTJ9eGZRP0_-2rUyPY2u-vQOZnsciSGiiTJX3VAzC3tgDSihefQzPmcm1T76tSYFmYH4GkHo41KYBKff4bUXeTKnJGrsrp21d3C-x6tPHFpJdw",
    "content-type": "application/json",
    "sec-ch-ua":
      '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": '"Android"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    Referer: "https://infosys.ufe.edu.mn/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
});

const lessonGroups: string[] = ["63844", "63845", "66716"];
const pheGroups = ["64164", "64091", "64097"];

let interval: any;

const fin226 = () =>
  Promise.all(
    lessonGroups.map(async (id) => {
      try {
        const res = await instance.post("lesson-choice", {
          lessonGroup: id,
        });
        clearInterval(interval);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("fin226" + id + "---> " + err.response?.data.message);
        }
      }
    })
  );

const PHE149 = () => {
  Promise.all(
    pheGroups.map(async (id) => {
      try {
        const res = await instance.post("lesson-choice", {
          lessonGroup: id,
        });
        clearInterval(interval);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("PHE" + id + "---> " + err.response?.data.message);
        }
      }
    })
  );
};

interval = setInterval(() => {
  fin226();
  PHE149();
}, 400);
