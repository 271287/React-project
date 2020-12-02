import React from 'react';
import styles from './List.scss';


class List extends React.Component {
  render() {
    return (
      <div id="list">
        <section className={styles.component}>
          <Hero />
        </section>
      </div>
    )
  }
}

export default List;
