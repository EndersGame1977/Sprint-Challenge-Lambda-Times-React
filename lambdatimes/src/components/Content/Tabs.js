import React from 'react';
import Tab from './Tab';
const Tabs = props => {

  const { tabs, selectedTab, selectTabHandler } = props;
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {tabs.map(tab => (
          <Tab
            tab={tab}
            selectedTab={selectedTab}
            selectTabHandler={selectTabHandler}
          />
        ))}

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
