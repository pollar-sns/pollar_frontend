import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  getTouchRippleUtilityClass,
} from '@mui/material';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState(getTouchRippleUtilityClass);

  const RegisterSchema = Yup.object().shape({
    userId: Yup.string()
      .min(6, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Username(ID) required'),
    userNickname: Yup.string()
      .min(2, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Nickname required'),
    userEmail: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(4, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Password is required (4-16)'),
  });

  const formik = useFormik({
    initialValues: {
      userId: '',
      userNickname: '',
      userEmail: '',
      password: '',
      userBirthday: '',
      userSex: '',
      categories: [],
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      // todo API 요청
      console.log('sdkj');
      navigate('/', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              required
              label="Username"
              {...getFieldProps('userId')}
              error={Boolean(touched.userId && errors.userId)}
              helperText={touched.userId && errors.userId}
            />

            <TextField
              fullWidth
              required
              label="Nickname"
              {...getFieldProps('userNickname')}
              error={Boolean(touched.userNickname && errors.userNickname)}
              helperText={touched.userNickname && errors.userNickname}
            />
          </Stack>

          <TextField
            fullWidth
            required
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('userEmail')}
            error={Boolean(touched.userEmail && errors.userEmail)}
            helperText={touched.userEmail && errors.userEmail}
          />

          <TextField
            fullWidth
            required
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              sx={{ width: 200 }}
              // defaultValue="2022-01-01"
              {...getFieldProps('userBirthday')}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(date) => {
                setBirthday(date.target.value);
              }}
            />
            <FormLabel id="gender-radio-group">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-radio-group"
              name="row-radio-buttons-group"
              // defaultValue=
              {...getFieldProps('userSex')}
              value={gender}
              onChange={(gender) => {
                setGender(gender.target.value);
              }}
            >
              <FormControlLabel value={true} control={<Radio />} label="Female" />
              <FormControlLabel value={false} control={<Radio />} label="Male" />
            </RadioGroup>
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Next (Register)
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
