import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({ tabs: tabData, cards: cardData });
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  }


  filterCards = () => {
    const { cards, selected } = this.state;

    const filtered = cards.filter(card => card.tab === selected);

    if (selected === 'all') {
      return cards;
    } else {
      return filtered;
    }

    // Could not get this ternary to work
    // selected === 'all' ? cards : filtered

  };

  render() {
    const { tabs } = this.state;
    const { changeSelected, filterCards } = this;

    return (
      <div className="content-container">
        <Tabs
          tabs={tabs}
          selectedTab={changeSelected}
          selectTabHandler={filterCards}
        />
        {/* I thought invoking a function when passing it as a prop would trigger a feedback loop */}
        <Cards cards={filterCards()} />
      </div>
    );
  }
}
