import config from "../config";
import { IWriting } from "../interfaces";

export const Helpers = {
  fetchMediumPost() {
    return fetch(`${config.MediumEndpoint}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok
        ? res.json().then((err) => Promise.reject(err))
        : res.json().then((json: IWriting) => {
            const StructuredResponse = {
              Title: json.title,
              Images: [json.thumbnail],
              Tags: json.categories,
              Url: json.url,
            };

            return StructuredResponse;
          })
    );
  },
};
