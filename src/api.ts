const api = {
  gifts: {
    list: async function (): Promise<Gift[]> {
      const storedGifts = localStorage.getItem('gifts') || '[]';
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(JSON.parse(storedGifts));
        }, 1000);
      });
    },
    save: async function (gifts: Gift[]): Promise<boolean> {
      return new Promise((resolve) => {
        localStorage.setItem('gifts', JSON.stringify(gifts));
        setTimeout(() => {
          resolve(true);
        }, 100);
      });
    },
  },
};

export default api;
