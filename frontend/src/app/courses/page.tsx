import { Suspense } from 'react';
import CoursesPageClient from './CoursesPageClient';

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading courses...</div>}>
      <CoursesPageClient />
    </Suspense>
  );
}
