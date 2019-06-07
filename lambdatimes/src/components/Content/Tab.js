import React from 'react';
import PropTypes from 'prop-types';

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
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired
}


export default Tab;
