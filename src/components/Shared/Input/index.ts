import Checkbox from './Checkbox';
import Radiobox from './Radio';

export interface IInputContainer {
  gap?: number;
}

export interface IInput {
  id: string;
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
  selected?: boolean;
  selectFn?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export { Checkbox, Radiobox };
