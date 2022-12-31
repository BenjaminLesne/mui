export interface InputData {
  id: string;
  type?: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
  options?: { value: string; label: string }[];
}
