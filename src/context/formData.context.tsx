import { createContext, useContext, useState } from "react";

const formInitialData = {
  os: "",
  framework: "",
  sessions: "",
  analytics: [""],
  app_link: "",
  improvements: [""],
  contact: "",
};

export type FormDataType = {
  os: string;
  framework: string;
  sessions: string;
  analytics: string[];
  app_link: string;
  improvements: string[];
  contact: string;
};

const FormDataContext = createContext<{
  formData: FormDataType;
  setValues: (values: Partial<FormDataType>) => void;
}>({
  formData: formInitialData,
  setValues: null as unknown as (values: Partial<FormDataType>) => void,
});

export const FormDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formData, setFormData] = useState(formInitialData);

  const setValues = (values: Partial<FormDataType>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, setValues }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
