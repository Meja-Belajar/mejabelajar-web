import React, { useEffect, useState } from "react";

import { ZodSchema } from "zod";

type useFormProps<T> = {
  initialValues: T;
  validationSchema: ZodSchema;
  onSubmit: () => void;
};

/**
 * @description useForm is a custom hook that handles form state, validation, and submission.
 *
 * @template T - The type of the form values
 *
 * @param {useFormProps<T>} props - The properties for the form
 *
 * @returns {values} - The form values
 * @returns {errorMessages} - The error messages for each form field
 * @returns {isError} - A boolean indicating whether an error occurred during form submission
 * @returns {onChangeHandler} - The function to handle form input changes
 * @returns {onSubmitHandler} - The function to handle form submission
 * @returns {setIsError} - The function to set the isError state
 * @returns {clearField} - The function to clear the form fields
 *
 * @example
 * const { values, errorMessages, isError, onChangeHandler, onSubmitHandler, setIsError, clearField } = useForm<LoginForm>({
 *   initialValues: {
 *     email: "",
 *     password: "",
 *   },
 *   validationSchema: LoginFormSchema,
 *   onSubmit: async () => {
 *     try {
 *       await AuthService.login(values);
 *       history.push("/dashboard");
 *     } catch (error) {
 *       setIsError(true);
 *     }
 *   },
 * });
 */
export const useForm = <T extends object>({
  initialValues,
  validationSchema,
  onSubmit,
}: useFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);

  const [errorMessages, setErrorMessages] = useState<T>({} as T);

  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (isError) {
      const timeoutId = setTimeout(() => {
        setIsError(false);
      }, 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [isError]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateField();

    if (!validation) onSubmit();
  };

  const validateField = (): boolean => {
    const parsedValues = validationSchema.safeParse(values);

    if (parsedValues.success) {
      for (const name in values) {
        if (errorMessages[name]) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
        }
      }

      return false;
    } else {
      const error = parsedValues.error;
      let newErrors = {};

      for (const issue of error.issues) {
        newErrors = {
          ...newErrors,
          [issue.path[0]]: issue.message,
        };
      }
      console.log(newErrors);

      setErrorMessages(newErrors as T);
      return true;
    }
  };

  const clearField = () => {
    for (const name in values) {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: "",
      }));
    }

    setErrorMessages({} as T);
  };

  return {
    values,
    errorMessages,
    isError,
    onChangeHandler,
    onSubmitHandler,
    setIsError,
    clearField,
  };
};
