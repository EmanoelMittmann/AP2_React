import { CSSProperties, useMemo, useState } from "react";
import { Localization } from "./components/Localization";
import { Template } from "./templates";
import { Form } from "./components/Form";

export const DEFAULT = {
  name: "",
  phone: "",
  convidado: false,
  pay: false,
  foto: "",
};

export type Default = typeof DEFAULT;

function App() {
  const [convidados, setConvidados] = useState<Default[]>([])
  const [values, setValues] = useState<Default>(DEFAULT);

  const lastUser = useMemo(() => {
    if(convidados.length === 0) return ''
    return convidados[convidados.length - 1].name
  },[convidados])

  function handleSubmit(v: Default){
    setConvidados([...convidados, v])
    return setValues({
      name: "",
      phone: "",
      convidado: false,
      pay: false,
      foto: "",
    })
  }


  const css: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "4em",
  };

  return (
    <Template>
      <div style={css}>
        <Localization name={lastUser}/>
        <Form {...{setValues,values,handleSubmit,convidados}}/>
      </div>
    </Template>
  );
}

export default App;
