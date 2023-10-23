import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperations';


const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
        <h2>Login</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string().required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
           dispatch(logIn(values))
            console.log(values);
            resetForm();
          }}
        >
            <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
    )
}
export default Login