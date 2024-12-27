import { useEffect, useState } from 'react';

export type Categories = ReturnType<typeof useCategories>;

export default function useCategories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.basePath}/assets/menuData/categories.json`);
      const data = await res.json();
      setCategories(data);
      setLoading(false);
    })();
  }, []);

  return {
    value: categories,
    setValue: setCategories,
    loading,
  };
}
