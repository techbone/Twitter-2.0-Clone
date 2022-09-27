// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sanityClient } from "../../Sanity";
import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "../../typings";

const feedQuery = groq`*[_type == "tweet" && !blockTweet] {
  _id,
  ...
} | order(_createdAt desc)`;

type Data = {
  tweets: Tweet[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweets: Tweet[] = await sanityClient.fetch(feedQuery);
  console.log(tweets);
  res.status(200).json({ tweets });
}
