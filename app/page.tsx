import UploadcareImage from '@uploadcare/nextjs-loader';

export default function Home() {
  return (
    <UploadcareImage
      alt="A test image"
      src="https://ucarecdn.com/051be067-e8ac-4901-a0fc-30d5032a7413/image.jpg"
      width="400"
      height="300"
    />
  );
}
