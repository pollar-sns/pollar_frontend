import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// api
import login from '../../services/api/AuthApi';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const LoginSchema = Yup.object().shape({
    userId: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      userId: '',
      password: '',
      // remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      // alert(JSON.stringify(values, null, 2));
      // await login(values);
      handleLogin(values);
      // navigate('/', { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = async (loginInfo) => {
    // e.preventDefault();

    try {
      const result = login(loginInfo);
      // 실패는 "fail"
      if (result.message == 'success') {
        // navigate로 보내기 전에 atom에 userId 저장
        // setUserIdState(userId);
        navigate('/');
      } else {
        console.log('sldkfj');
        // setMessage('로그인에 실패하였습니다.');
      }
    } catch (error) {
      // setMessage('로그인에 실패하였습니다.');
    }
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="userId"
            label="Username"
            {...getFieldProps('userId')}
            error={Boolean(touched.userId && errors.userId)}
            helperText={touched.userId && errors.userId}
            value={formik.values.userId}
            onChange={formik.handleChange}
            // onChange={(userId) => {
            //   setUserId(userId.target.value);
            // }}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}

            // onChange={(password) => {
            //   setPassword(password.target.value);
            // }}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
