import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <div id="list">
        <section className={styles.component}>
          <Hero titleText={this.props.title} />
          <div className={styles.description}>
            {this.props.children}
          </div>
          <img className={this.props.image} />
          <Column className={this.props.Column} />
          <div className={this.props.Column} />
          <div className={this.props.Column} />
        </section>
      </div>
    )
  }
}

export default List;
