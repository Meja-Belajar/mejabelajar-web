import React, { useEffect, useReducer, useState } from "react";
import { ZodSchema } from "zod";

type useFormProps<T> = {
  initialValues: T;
  validationSchema: ZodSchema;
  onSubmit: () => void;
}

type ReducerActionProps = {
  type: string;
  name: string;
  value: string;
}

const valuesReducer = <T>(state: T, action: ReducerActionProps): T => {
  switch (action.type) {
    case 'change':
      return {  
        ...state,
        [action.name]: action.value
      };
    case 'reset':
      return {
        ...state,
        [action.name]: ''
      };
    default:
      return state;
  }
};

export const useForm = <T>({
  initialValues,
  validationSchema,
  onSubmit,
} : useFormProps<T>) => {

  const [values, setValues] = useReducer(
    (state: T, action: ReducerActionProps) => valuesReducer(state, action), initialValues
  );

  const [errorMessages, setErrorMessages] = useState<T>(initialValues);
  
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if(isError) {
      setTimeout(() => {
        setIsError(false)
      }, 1500);
    }
  }, [isError]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ type: 'change', name, value });
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateField();
    console.log(validation);

    if(!validation) onSubmit();
  
  }

  const validateField = () : boolean => {
    const parsedValues = validationSchema.safeParse(values);
    
    if (parsedValues.success) {
      setErrorMessages({} as T);

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

      setErrorMessages(newErrors as T);
      return true;
    }
  }

  const clearField = () => {
    for (const name in values) {
      setValues({ type: 'reset', name, value: '' });
    }
  }

  return {
    values,
    errorMessages,
    isError,
    onChangeHandler,
    onSubmitHandler,
    setIsError,
    clearField
  }
}