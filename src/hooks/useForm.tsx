import React, { useEffect, useState } from "react";

import { ZodSchema } from "zod";

type useFormProps<T> = {
  initialValues: T;
  validationSchema: ZodSchema;
  onSubmit: () => void;
};

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
    // console.log("submit");
    const validation = validateField();
    // console.log(validation);

    if (!validation) onSubmit();
  };

  const validateField = (): boolean => {
    const parsedValues = validationSchema.safeParse(values);

    // console.log(values);
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
