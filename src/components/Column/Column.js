import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

const Column = () => (
    <section className={styles.component}>
        <div className={styles.columns}>
            <div className={styles.Column}>
                <h3 className={styles.title}>Animals</h3>
            </div>
            <div className={styles.Column}>
                <h3 className={styles.title}>Plants</h3>
            </div>
            <div className={styles.Column}>
                <h3 className={styles.title}>Minerals</h3>
            </div>
        </div>
    </section>
);

Column.propTypes = {
    titleText: PropTypes.node,
};

export default Column;