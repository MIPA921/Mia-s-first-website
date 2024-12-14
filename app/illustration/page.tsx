import Image from "next/image";

export default function Illustration() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-light mb-8">Illustration</h1>
      
      <div className="relative w-1/2 h-[400px] rounded-lg overflow-hidden mx-auto">
        <Image
          src="/images/fat elephant.jpeg"
          alt="Fat elephant illustration"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
} 