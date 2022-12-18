import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './components/search';
import MainPage from './components/MainPage';

const App: FC = () => {
  const dispatch = useDispatch();
  const WeatherData = useSelector((state: RootState) => state.data);

  return (
    <div className="has-text-centered">
      <Search title="Enter city name and press search button" />
      { WeatherData && <MainPage data={WeatherData} />}

    </div>
  );
}

export default App;