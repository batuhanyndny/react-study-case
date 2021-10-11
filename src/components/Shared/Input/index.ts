import Checkbox from './Checkbox';
import Radiobox from './Radio';

export interface IInputContainer {
  gap?: number;
}

export interface IInput {
  label: string;
  id: string;
  name: string;
  value: string;
  selectFn?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export { Checkbox, Radiobox };
