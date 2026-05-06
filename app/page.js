import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Next.js Logo - Атрибутыг устгаж, зөвхөн style-аар хэмжээг заав */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          priority
          width={0}
          height={0}
          style={{ width: '180px', height: 'auto' }}
        />
        
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-(family-name:--font-geist-mono)">
          <li className="mb-2">Lab 14: Deployment & Performance.</li>
          <li>Performance optimized version.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Vercel Logo - style-аар жижиг хэмжээг нь хатуу заав */}
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={0}
              height={0}
              style={{ width: '20px', height: 'auto' }}
            />
            Deploy now
          </a>
        </div>
      </main>
    </div>
  );
}
