const api = {
  gifts: {
    list: function (): Promise<Gift[]> {
      const storedGifts = localStorage.getItem('gifts') || '[]';
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(JSON.parse(storedGifts));
        }, 1000);
      });
    },
    save: function (gifts: Gift[]): void {
      localStorage.setItem('gifts', JSON.stringify(gifts));
    },
  },
};

export default api;
