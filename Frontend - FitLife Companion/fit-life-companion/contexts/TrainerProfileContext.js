

import React, { createContext, useContext, useState } from 'react';

const TrainerProfileContext = createContext();

export const TrainerProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    gender: 'male',
  });

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <TrainerProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </TrainerProfileContext.Provider>
  );
};

export const useTrainerProfile = () => {
  return useContext(TrainerProfileContext);
};
