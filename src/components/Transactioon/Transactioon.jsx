import css from './Transactioon.module.css';
export const Transactioon = ({ info: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.transactioon}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
