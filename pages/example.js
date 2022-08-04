import { useRouter } from 'next/router';

export default function ExamplePage() {
  const router = useRouter();

  return (
    <div>
      <h1>Example page</h1>
      <p>Query: {router.query.id}</p>
    </div>
  );
}
