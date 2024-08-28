import classNames from 'classnames';
import { formatDateString } from './helpers';

type Props = {
  date: string;
  className?: string;
};

export const PublishedDate: React.FC<Props> = ({ date, className }) => (
  <span className={classNames('text-sm leading-tight', className ?? '')}>
    {formatDateString(date)}
  </span>
);
