import { Transactioon } from '../Transactioon/Transactioon';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th scope="row">Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Transactioon info={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
