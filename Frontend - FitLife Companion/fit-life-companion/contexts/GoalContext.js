
import React, { createContext, useContext, useState } from 'react';

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goal, setGoal] = useState({
    type: '',
    target: '',
  });

  const updateGoal = (newGoal) => {
    setGoal(newGoal);
  };

  return (
    <GoalContext.Provider value={{ goal, updateGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoalContext = () => {
  return useContext(GoalContext);
};
