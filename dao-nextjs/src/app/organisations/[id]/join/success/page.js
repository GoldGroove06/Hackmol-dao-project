// src/app/organisations/[id]/join/success/page.js
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function JoinSuccess() {
  const { id } = useParams();

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 rounded-lg text-center">
      <div className="text-green-500 text-6xl mb-4">✓</div>
      <h1 className="text-2xl font-bold text-white mb-4">Payment Successful!</h1>
      <p className="text-gray-300 mb-8">You are now a member of this DAO.</p>
      
      <Link 
        href={`/organisations/${id}/projects`}
        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition-all duration-300"
      >
        View Funded Projects
      </Link>
    </div>
  );
}