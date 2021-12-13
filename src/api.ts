export function getGifts(): Gift[] {
  const storedGifts = localStorage.getItem('gifts') || '[]';
  return JSON.parse(storedGifts);
}

export function saveGifts(gifts: Gift[]): void {
  localStorage.setItem('gifts', JSON.stringify(gifts));
}
