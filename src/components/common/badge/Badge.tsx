import classNames from 'classnames';

type Props = {
  content: string;
};

export const Badge: React.FC<Props> = ({ content }) => (
  <span
    className={classNames(
      'w-fit rounded bg-main px-2 py-1 font-semibold leading-extra-tight text-background',
      'first-letter:uppercase',
    )}
  >
    {content}
  </span>
);
