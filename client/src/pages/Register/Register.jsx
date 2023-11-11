import React, { useState } from 'react';
import s from './Register.module.scss';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import SignUpSchema from '../../utils/SignUpSchema';
import Button from '../../components/Button/Button';

const Register = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  return (
    <div className={s.register}>
      <h2>Добро пожаловать!</h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validateOnMount
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values));
          // try {
          //   setIsFetching(true);
          //   const res = await fetch(`/api/auth/signup`, {
          //     method: 'POST',
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //     body: JSON.stringify({
          //       username: values.username,
          //       password: values.password,
          //     }),
          //   });
          //   const data = await res.json();

          //   if (data.success === false) {
          //     setError(data.message);
          //     setIsFetching(false);
          //     return;
          //   }
          //   setIsFetching(false);
          //   setError(null);
          //   navigate('/login');
          // } catch (err) {
          //   setIsFetching(false);
          //   setError(err.message);
          // }
        }}
      >
        {(formikProps) => (
          <Form className={s.form}>
            <div className={s.body}>
              <div className={s.userInfo}>
                <div className={`${s.inputField} ${s.username}`}>
                  <label htmlFor="username">Логин</label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Введите логин"
                    id="username"
                    className={s.textInput}
                  />
                  {formikProps.errors.username &&
                  formikProps.touched.username ? (
                    <div className={s.formikError}>
                      {formikProps.errors.username}
                    </div>
                  ) : null}
                </div>

                <div className={`${s.inputField} ${s.password}`}>
                  <label htmlFor="password">Пароль</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Введите пароль"
                    id="password"
                    className={s.textInput}
                  />
                  {formikProps.errors.password &&
                  formikProps.touched.password ? (
                    <div className={s.formikError}>
                      {formikProps.errors.password}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <Button
              type="submit"
              disabled={
                (formikProps.touched.username && formikProps.errors.username) ||
                (formikProps.touched.password && formikProps.errors.password) ||
                isFetching
              }
              label={isFetching ? 'Загрузка...' : 'Зарегистрироваться'}
              height="45px"
              width="100%"
            />
            {error && <div className={s.serverError}>{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
