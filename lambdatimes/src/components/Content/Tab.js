import React from 'react';

const Tab = props => {

  const { tab, selectedTab, selectTabHandler } = props;
  return (
    <div
      className={tab === selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => {
        selectTabHandler(tab)
        selectedTab(tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
