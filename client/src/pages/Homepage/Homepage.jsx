import React from 'react';
import s from './Homepage.module.scss';
import Head from '../../components/Head/Head';
import Field from '../../components/Head/Field/Field';

const Homepage = () => {
  return (
    <div className={s.homepage}>
      <Head />
      <Field />
    </div>
  );
};

export default Homepage;
