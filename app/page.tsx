import UploadcareImage from '@uploadcare/nextjs-loader';
import Image from 'next/image';

export default function Home() {
  return (
    <Image
      alt="A test image"
      src="https://ucarecdn.com/9f95f994-a45a-4b60-a6e3-f8f34b2262e3/image.jpg"
      width="1000"
      height="800"
      sizes="(max-width: 100rem) 100vw, 100rem"
    />
  );
}
