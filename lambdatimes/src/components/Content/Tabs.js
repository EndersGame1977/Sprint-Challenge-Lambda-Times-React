import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

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

Tabs.propTypes = {
  tabs: PropTypes.string.isRequired
}

export default Tabs;
