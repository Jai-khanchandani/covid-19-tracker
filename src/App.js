import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api';
 
import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component { 
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();

  }


  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
 