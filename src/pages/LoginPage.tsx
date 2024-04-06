import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, useSelect } from '@nextui-org/react';
import { motion }from 'framer-motion';

import { exit, animate, initial } from '@assets/PageTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from '@src/apis/services/userService';

import { UserContext } from '@contexts/UserContext';
import Logo from '@src/components/Logo';
import '@assets/global.css';

import { LoginUserSchema } from '@src/models/zod/user_zod';
import { LoginUserErrorValidation, LoginUserRequest } from '@src/models/requests/user_request';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'zod';
import { useAppDispath } from '@src/redux/store';
import { userSlice } from '@src/redux/user/userSlice';
import { setCurrentUser, setUserError, setUserLoading } from '@src/redux/user/userSelectors';
import { error } from 'console';

const FormReducer = (state: LoginUserRequest, action: { type: string, name: string; value: string; }) => {
  return {  
    ...state,
    [action.name]: action.value
  };
};

const Login = () => {

  const [formData, setFormData] = useReducer(FormReducer, {} as LoginUserRequest);
  const [formDataError, setFormDataError] = useState<LoginUserErrorValidation>({} as LoginUserErrorValidation);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [isError, setIsError] = useState<boolean>(false);

  const dispath = useDispatch();
  const userErrorMessage = useSelector((state: any) => state.user.userError);  
  const isUserLoading = useSelector((state: any) => state.user.isUserLoading);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if(isError) {
      setTimeout(() => {
        setIsError(false)
      }, 1500);
    }
  }, [isError]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const handleLogin = async () => {

      try {
        dispath(setUserLoading(true)); 

        const loginResponse = await loginService({ email: formData.email, password: formData.password });
        
        // error validation already handled by loginResponse
        dispath(setCurrentUser(loginResponse));
        console.log(loginResponse);
        navigate('/');

      } catch (error) {
        if(error instanceof Error){
          dispath(setUserError(error.toString()));
          setIsError(true);
        }
      } finally {
        dispath(setUserLoading(false));
      }
    }

    const parsedUser = LoginUserSchema.safeParse(formData);

    if (!parsedUser.success) {
      const error = parsedUser.error;
      let newErrors = {};
      for (const issue of error.issues) {
        newErrors = {
          ...newErrors,
          [issue.path[0]]: issue.message,
        };
      }
      setFormDataError(newErrors as LoginUserErrorValidation);
    } else {

      setFormDataError({} as LoginUserErrorValidation);
      handleLogin();

    }

  }
  
  return (  
    <>
      <motion.div
        className='w-full h-[100vh] flex items-center justify-center flex-col'
        initial={ initial }
        animate={ animate }
        exit={ exit }
      > 
        <nav className='w-full h-16 mt-2 absolute top-0 flex justify-between items-center p-3 sm:p-7'>
          <Logo />
          <div>
            <Link className='p-3 transition ease-soft-spring hover:text-blue-accent-300' to='/'>HOME</Link>
            <Link className='p-3 transition ease-soft-spring hover:text-blue-accent-300' to='/register'>REGISTER</Link>
          </div>
        </nav>

        <form 
          className='w-[90%] lg:w-1/3 bg-white rounded-lg p-5 drop-shadow-2xl'
          onSubmit={ handleSubmit }
        >
          <div className='m-3'>
            <h1 className='open-sans-600 text-xl'>Welcome back!</h1>
            <p className='text-sm'>create your next courses with our best perform mentor</p>
          </div>
          <div className='m-3 mt-8'>
            <Input 
              name='email'
              type='email' 
              variant='bordered'
              label='Email / Username'
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({type: 'change', value: e.target.value, name: 'email'})}
              required
            />
            {formDataError.email && <p className='text-red-600 text-xs m-3'>{formDataError.email}</p>}
            <Input 
              name='password'
              type={ isVisible ? "text" : "password"}
              variant='bordered' 
              label='Password'
              className='mt-3'
              required
              value={formData.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({type: 'change', value: e.target.value, name: 'password' })}
              endContent={
                <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                  { 
                    isVisible ? (
                      <FontAwesomeIcon icon={faEyeSlash} className='opacity-60'/>  
                    ) : (
                      <FontAwesomeIcon icon={faEye} className='opacity-60'/>  
                    ) 
                  }
                </button>
              }      
            />
            {formDataError.password && <p className='text-red-600 text-xs m-3'>{formDataError.password}</p>}

          </div>

          <div className='m-3 pt-2 pb-2 flex items-end justify-end'>
            <Link to="/" className='text-xs underline-offset-2 underline decoration-transparent hover:decoration-black'>
              Forget Password ?
            </Link>
          </div>
          <div className='m-3 flex items-center justify-center flex-col'>
            <Button type='submit' color='default' variant='solid' className='bg-blue-accent-300 text-black w-full' isLoading={isUserLoading}>
              Login
            </Button>
          </div>
        </form>

        {/* if error not empty show modal */}
        <Modal isOpen={isError} backdrop={"blur"}  hideCloseButton className='py-14'>
          <ModalContent>
            <ModalBody className='flex items-center text-red-500'>
              <FontAwesomeIcon icon={faCircleExclamation} className='text-5xl'/>

              {userErrorMessage && <h2 className='text-sm mt-6'>{userErrorMessage}</h2>}

            </ModalBody>
          </ModalContent>
        </Modal>
      </motion.div>
    </>
  )
}

export default Login