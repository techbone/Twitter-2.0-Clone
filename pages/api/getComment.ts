import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { Comment } from "../../typings";
import { sanityClient } from "../../Sanity";

const commentQuery = groq`
*[_type == "comment" && references(*[_type== 'tweet' && _id ==$tweetId]._id)] {
  _id,
  ...
} | order(_createdAt desc)`;

type Data = Comment[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { tweetId } = req.query;

  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
    tweetId,
  });
  console.log("me", comments);

  res.status(200).json(comments);
}
