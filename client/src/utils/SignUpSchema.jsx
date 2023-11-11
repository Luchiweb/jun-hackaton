import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Слишком короткий логин')
    .max(50, 'Слишком длинный логин')
    .required('Введите логин!'),
  password: Yup.string()
    .min(2, 'Слишком короткий пароль')
    .max(50, 'Слишком длинный пароль')
    .required('Введите пароль!'),
});

export default SignUpSchema;
