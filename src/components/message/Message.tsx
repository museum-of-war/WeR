// <editor-fold defaultstate="collapsed" desc="Imports">
import { FormattedMessage } from 'react-intl';
import { en } from '../../intl/en';
// </editor-fold>

export type TranslationKey = keyof typeof en;
type MessageProps = {
  id: TranslationKey;
};
export const Message: React.FC<MessageProps> = ({ id }) => (
  <FormattedMessage id={id} />
);
