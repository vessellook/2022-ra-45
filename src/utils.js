export function dispatchState(newState, oldState) {
  if (typeof newState === 'function') {
    return newState(oldState);
  }
  return newState;
}
