import { CSSProperties, ChangeEvent, Dispatch, SetStateAction } from "react";
import { Input } from "../atoms/input";
import { Radio } from "../atoms/radio";
import { Default } from "../../App";
import { Button } from "../atoms/button";
import { Cards } from "../Cards";
import IMG from "../../assets/Emanoel.jpg";

interface IFormProps {
  values: Default;
  setValues: Dispatch<SetStateAction<Default>>;
  handleSubmit(v: Default): void;
  convidados: Default[];
}

export const Form = ({
  setValues,
  values,
  handleSubmit,
  convidados,
}: IFormProps) => {
  const CONTAINERCSS: CSSProperties = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  };

  const CARDSCONTAINERCSS: CSSProperties = {
    width: '90%',
    height: '30em',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '.2em',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  const FORMCSS: CSSProperties = {
    width: "auto",
    backgroundColor: "#D9D9D9",
    padding: "2em",
    borderRadius: "8px",
    gap: ".5em",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const MatrizOptions = [
    {
      text: "Sim",
      input: (
        <input
          value={1}
          checked={values.convidado === true}
          onClick={() => setValues({ ...values, convidado: true })}
          type="radio"
        />
      ),
    },
    {
      text: "Não",
      input: (
        <input
          value={0}
          checked={values.convidado === false}
          onClick={() => setValues({ ...values, convidado: false })}
          type="radio"
          defaultChecked
        />
      ),
    },
  ];

  const PayOptions = [
    {
      text: "Sim",
      input: (
        <input
          value={1}
          checked={values.pay === true}
          onClick={() => setValues({ ...values, pay: true })}
          type="radio"
        />
      ),
    },
    {
      text: "Não",
      input: (
        <input
          value={0}
          checked={values.pay === false}
          onClick={() => setValues({ ...values, pay: false })}
          type="radio"
          defaultChecked
        />
      ),
    },
  ];

  return (
    <div style={CONTAINERCSS}>
      <form style={FORMCSS}>
        <Input
          label="Nome"
          placeholder="Digite o nome"
          value={values.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValues({ ...values, name: e.target.value })
          }
          required
        />
        <Input
          label="Telefone"
          placeholder="Digite o telefone"
          value={values.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, phone: e.target.value })
          }}
          required
        />
        <Radio label="Egresso/Convidado" options={MatrizOptions} />
        <Radio label="Pago" options={PayOptions} />
        <Input
          label="Foto"
          placeholder="https://algumacoisa.com"
          value={values.foto}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValues({ ...values, foto: e.target.value })
          }
          required
        />
        <Button
          title="Salvar"
          type="button"
          onClick={() => handleSubmit(values)}
        />
      </form>
      <div style={CARDSCONTAINERCSS}>
        {convidados.map(({ convidado, name, pay }) => (
          <Cards
            {...{ convite: convidado, foto: IMG, nome: name, pago: pay }}
          />
        ))}
      </div>
    </div>
  );
};
