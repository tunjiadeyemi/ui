
type RevealMode = 'fade' | 'slide-right' | 'slide-bottom';

export interface ModalProps {
  children: React.ReactNode;
  className?: string;
  revealMode?: RevealMode;
  showModal?: boolean;
  onClose?: () => void;
  isDrag?: boolean;
}
