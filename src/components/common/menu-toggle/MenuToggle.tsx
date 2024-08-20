import { BurgerIcon } from '@/components/common/icons/BurgerIcon';
import { CloseIcon } from '@/components/common/icons/CloseIcon';

type MenuToggleProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuToggle: React.FC<MenuToggleProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      className="z-10 md:hidden"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? <CloseIcon /> : <BurgerIcon />}
    </button>
  );
};
