import { useMemo, useCallback } from "react";
import { dispatchState } from "../utils";

const useJsonStateProxy = (state, setState, skip) => {
  const parsedState = useMemo(() => {
    if (skip || typeof state !== 'string') {
      return state;
    }
    return JSON.parse(state);
  }, [state, skip]);

  const stringifyAndSetState = useCallback((newState) => {
    setState((oldState) => {
      newState = dispatchState(newState, oldState);
      if (skip || typeof state !== 'string') {
        setState(newState);
      }
      return JSON.stringify(newState);
    }, [setState, skip]);
  });

  return [parsedState, stringifyAndSetState];
};

export default useJsonStateProxy;
