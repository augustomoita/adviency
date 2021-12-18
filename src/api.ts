const api = {
  gifts: {
    list: async function (): Promise<Gift[]> {
      const storedGifts = localStorage.getItem('gifts') || '[]';
      await sleep(1000);
      return JSON.parse(storedGifts) as Gift[];
    },
    save: async function (gifts: Gift[]): Promise<boolean> {
      localStorage.setItem('gifts', JSON.stringify(gifts));
      await sleep(100);
      return true;
    },
  },
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default api;
