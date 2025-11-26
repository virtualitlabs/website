import { Suspense } from 'react';
import PaymentSuccessClient from './PaymentSuccessClient';

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <PaymentSuccessClient />
    </Suspense>
  );
}
