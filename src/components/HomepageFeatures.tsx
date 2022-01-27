import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Understand',
    image: '/img/undraw_product_teardown_re_m1pc.svg',
    description: (
      <>
        I'm a student who don't like the complex and I like to make them simple and easy to understand.
      </>
    ),
  },
  {
    title: 'Focused on the stuff that matters!',
    image: '/img/undraw_programming_re_kg9v.svg',
    description: (
      <>
        I don't like learning the stuff that I won't use in future. Yeah I know I'm not a fortune teller or something. 
        But after juggeling through docs and job requirements, I have a decent idea, what are the things that actually matters.  
      </>
    ),
  },
  {
    title: 'Powered by Gulshan Yadav',
    image: '/img/undraw_product_iteration_kjok.svg',
    description: (
      <>
        I'm a student developer who is looking for a job so that I can learn and grow.
        Are you interested???
        Please check out my <a href="https://gulshan.cf" target="_blank" rel="noopener noreferrer">website.</a>
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
