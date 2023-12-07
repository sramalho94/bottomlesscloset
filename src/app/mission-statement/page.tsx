import Link from 'next/link';

export default function MissionStatement() {
    return (
        <main className="flex min-h-screen flex-col">
            <h1>Mission Statement!</h1>
            <Link href="/">
                <button className='m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Go Home
                </button>
            </Link>
        </main>
    )
}