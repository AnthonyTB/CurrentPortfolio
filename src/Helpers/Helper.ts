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
        : res.json().then((json) => {
            const StructuredResponse: any[] = [];
            json.items.map((Writing: IWriting) =>
              StructuredResponse.push({
                Title: Writing.title,
                Images: [Writing.thumbnail],
                Tags: Writing.categories,
                Url: Writing.url,
              })
            );

            return StructuredResponse;
          })
    );
  },
};
