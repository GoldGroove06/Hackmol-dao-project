// src/app/organisations/[id]/join/page.js
'use client';
import { useParams, useRouter } from 'next/navigation';

export default function JoinDAO() {
  const { id } = useParams();
  const router = useRouter();

  const handlePayment = async () => {
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push(`/organisations/${id}/join/success`);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 rounded-lg">
      <h1 className="text-2xl font-bold text-white mb-6">Join DAO Membership</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">Membership Tier</h2>
        <select className="w-full bg-gray-700 text-white p-3 rounded-lg">
          <option>Basic (1 ETH)</option>
          <option>Contributor (5 ETH)</option>
          <option>Core Member (10 ETH)</option>
        </select>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-2">Payment Method</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg">
            <input type="radio" id="crypto" name="payment" defaultChecked />
            <label htmlFor="crypto" className="text-white">Crypto Payment</label>
          </div>
          <div className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg">
            <input type="radio" id="card" name="payment" />
            <label htmlFor="card" className="text-white">Credit Card</label>
          </div>
        </div>
      </div>

      <button 
        onClick={handlePayment}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300"
      >
        Complete Payment
      </button>
    </div>
  );
}