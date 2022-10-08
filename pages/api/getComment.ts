import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { Comment } from "../../typings";

const commentQuery = groq`
*[_type == "comment" && references(*[_type== 'tweet' && _id ==$tweetId]._id)] {
  _id,
  ...
} | order(_createdAt desc)
`;

type Data = Comment[];
