import { CSSProperties } from "react";

interface ICardsProps {
  foto: string;
  nome: string;
  convite: boolean;
  pago: boolean;
}

export const Cards = ({ convite, foto, nome, pago }: ICardsProps) => {
  const CARDSCSS: CSSProperties = {
    width: "10em",
    height: "12em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    gap: '1em',
    borderRadius: "1em",
    backgroundColor: "#6B6B6B",
  };

  const IMGCSS: CSSProperties = {
    width: '4em',
    height: '4em',
    borderRadius: '50%'

  }

  return (
    <div style={CARDSCSS}>
      <img src={foto} style={IMGCSS} />
      <h5>{nome}</h5>
      <h5>{convite ? 'Egresso/Convidado' : 'Estudante'}</h5>
      <h5>{pago ? 'Confirmado' : 'Não confirmado'}</h5>
    </div>
  );
};
