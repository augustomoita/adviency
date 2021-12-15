const api = {
  gifts: {
    list: function (): Promise<Gift[]> {
      const storedGifts = localStorage.getItem('gifts') || '[]';
      return new Promise((resolve) => {
        resolve(JSON.parse(storedGifts));
      });
    },
    save: function (gifts: Gift[]): void {
      localStorage.setItem('gifts', JSON.stringify(gifts));
    },
  },
};

export default api;
