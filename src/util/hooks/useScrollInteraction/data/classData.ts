export type OnScrollClassName = ({ $el, classData }: OnScrollClassNameProps) => void;

export interface ClassNameData {
  $baseLineEl?: HTMLElement | null;
  top: () => number;
  bottom: () => number;
  className: string;
  reverse?: boolean;
}

export interface OnScrollClassNameProps {
  $el: HTMLElement | null;
  classData: ClassNameData;
}
