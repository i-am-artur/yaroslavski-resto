'use client';

export default function CategoryItem({ category }: { category: any }) {
  return <option value={category.id}>{category.name['ua']}</option>;
}
