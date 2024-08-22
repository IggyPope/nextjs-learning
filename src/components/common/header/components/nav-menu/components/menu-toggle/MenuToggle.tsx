import { BurgerIcon, CloseMenuIcon } from '@/assets/icons';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MenuToggle: React.FC<Props> = ({ isOpen, onToggle }) => (
  <button className="md:hidden" onClick={onToggle}>
    {isOpen ? <CloseMenuIcon /> : <BurgerIcon />}
  </button>
);
