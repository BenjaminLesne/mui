export interface InputData {
  id?: string;
  type?: string;
  label?: string;
  helperText?: string;
  defaultValue?: string | number;
  options?: { value: string; label: string }[];
  documents?: {
    date: number;
    name: string;
    visibility: string;
  }[];
}
