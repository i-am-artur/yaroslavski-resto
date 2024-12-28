'use client';
import CategoryItem from './CategoryItem';

export default function Categories({ categories }: { categories: any[] }) {
  return categories?.map((category) => {
    return <CategoryItem key={category.id} category={category} />;
  });
}
