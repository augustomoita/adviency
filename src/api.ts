const api = {
  gifts: {
    list: function (): Gift[] {
      const storedGifts = localStorage.getItem('gifts') || '[]';
      return JSON.parse(storedGifts);
    },
    save: function (gifts: Gift[]): void {
      localStorage.setItem('gifts', JSON.stringify(gifts));
    },
  },
};

export default api;
