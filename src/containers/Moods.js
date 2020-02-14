import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getEmoji } from '../selectors/selector';
import reducer from '../reducers/moodReducer';
import { drinkCoffee, takeNap, eatSnack, study } from '../actions/moodActions';

export default function Moods() {
  const [state, dispatch] = useReducer(reducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });

  const face = getEmoji(state);
  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {state.coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {state.snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {state.naps}</button>
        <button onClick={() => dispatch(study())}>studies - {state.studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
}

