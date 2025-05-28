import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ size }: { size?: 'small' | 'medium' | 'large' }) {
    const width = size === 'small' ? 50 : size === 'medium' ? 90 : 120;
    const height = size === 'small' ? 40 : size === 'medium' ? 70 : 100;
    const fontSize = size === 'small' ? 'text-xl' : size === 'medium' ? 'text-2xl' : 'text-3xl';

    return (
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
                src="/logo2.svg"
                alt="NeuroSinal Logo"
                width={width}
                height={height}
            />
            <span className={`${fontSize} font-bold bg-clip-text text-transparent bg-[#06B6D4]`}>
                NeuroSinal
            </span>
        </Link>
    );
} 