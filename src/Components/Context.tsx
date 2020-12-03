import React, { createContext, useEffect, useReducer } from "react";
import { Helpers } from "../Helpers/Helper";

export const Context = createContext<null | IContext>(null);

interface IReducer {
  type: string;
  payload: any;
}

export interface IContext {
  dataSetter: (section: string, data: any) => void;
  mediumData: null | any;
}

export function ContextProvider(props: any) {
  const Reducer = (prevState: any, { type, payload }: IReducer) => {
    switch (type) {
      case "mediumData":
        return {
          ...prevState,
          mediumData: payload.mediumData,
        };
      default:
        return "";
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    mediumData: null,
  });

  const dataSetter = (section: string, data: any) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  useEffect(() => {
    (async () => {
      const mediumResponse = await Helpers.fetchMediumPost();
      dataSetter("mediumData", mediumResponse);
    })();
  }, []);

  const { mediumData } = state;
  const value: IContext = {
    dataSetter,
    mediumData,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
