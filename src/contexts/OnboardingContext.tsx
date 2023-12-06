import React from "react";

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// comment for push
interface OnboardingContextProps {
  formState: FormState;
  updateFormState: (field: keyof FormState, value: string) => void;
  resetFormState: () => void;
}

const OnboardingContext = React.createContext<OnboardingContextProps>({
  formState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  updateFormState: () => {},
  resetFormState: () => {},
});

export default OnboardingContext;
