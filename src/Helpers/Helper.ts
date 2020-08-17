import config from '../config';

export const Helpers = {
  fetchMediumPost() {
    return fetch(`${config.MediumEndpoint}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },
};
