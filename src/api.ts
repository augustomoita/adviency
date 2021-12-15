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
    save: function (gifts: Gift[]): Promise<boolean> {
      return new Promise((resolve) => {
        localStorage.setItem('gifts', JSON.stringify(gifts));
        setTimeout(() => {
          resolve(true);
        });
      });
    },
  },
};

export default api;
