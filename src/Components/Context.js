import React, { createContext, useEffect, useReducer } from 'react';
import { Helpers } from '../Helpers/Helper';

export const Context = createContext();

export function ContextProvider(props) {
  const Reducer = (prevState, { type, payload }) => {
    switch (type) {
      case 'mediumData':
        return {
          ...prevState,
          mediumData: payload.mediumData,
        };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    mediumData: null,
  });

  const dataSetter = (section, data) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  useEffect(() => {
    const fetchMediumPost = async () => {
      const mediumResponse = await Helpers.fetchMediumPost();
      dataSetter('mediumData', mediumResponse);
    };

    fetchMediumPost();
  }, []);

  const value = {
    dispatch,
    mediumData: state.mediumData,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
