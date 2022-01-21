export const isBetween = (pos: number, top: number, bottom: number) => pos >= top && pos < bottom;
export const getDocumentHeight = () =>
  Math.max(
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
  );
export const getKey = () => Math.random().toString(36);
export const getBaseLine = (baseLineEl: HTMLElement | null | undefined, currentPos: number) =>
  baseLineEl ? -baseLineEl?.getBoundingClientRect().top : currentPos;
