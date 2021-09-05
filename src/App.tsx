import React from 'react';
import logo from './logo.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TrimmerTab, AboutTab } from './Tabs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Trimmer</Tab>
          <Tab>About</Tab>
        </TabList>
        <TabPanel>
          <TrimmerTab />
        </TabPanel>
        <TabPanel>
          <AboutTab />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
