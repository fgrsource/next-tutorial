import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage() {
  console.log("[HomePage] rendering");
  const review = await getFeaturedReview();
  console.log(review);
  return (
    <>
      <Heading>Home</Heading>
      <p>Hello world</p>

      <div
        key={review.slug}
        className="mt-6 bg-white border rounded shadow w-80 hover:shadow-xl"
      >
        <Link href={`/reviews/${review.slug}`}>
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t"
          />
          <h2 className=" py-1 text-center">{review.title}</h2>
        </Link>
      </div>
    </>
  );
}
