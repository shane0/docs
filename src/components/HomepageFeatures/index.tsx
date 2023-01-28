import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="./markdown-page">this is a markdown page</a>
          </div>
        </div>
      </div>
    </section>
  );
}
