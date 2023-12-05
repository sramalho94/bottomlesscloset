import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <h1>Welcome to home page!</h1>
        <br/>
        <Link href="/mission-statement">
            <button className='m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Mission Statement
            </button>
        </Link>
        <Link href="/client-services">
            <button className='m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Client Services
            </button>
        </Link>
        <Link href="/donate">
            <button className='m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Donate
            </button>
        </Link>
        <Link href="/contact">
            <button className='m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Contact
            </button>
        </Link>
    </main>
  )
}
