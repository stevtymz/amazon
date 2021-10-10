import Header from '../components/Header';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';

function Success() {
  const router = useRouter();

  return (
    <div className='bg-gray-100 h-screen'>
      <Header />

      <main className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10 bg-white'>
          <div className='flex items-center space-x-2 mb-5'>
            <CheckCircleIcon className='text-green-500 h-10' />
            <h1 className='text-3xl'>
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank your for shopping with us. We'll send a confirmation email of
            item has shipped, If you would like to check the status of order(s)
            please press on the link below.
          </p>
          <button
            onClick={() => router.push('/orders')}
            className='button mt-8'
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
