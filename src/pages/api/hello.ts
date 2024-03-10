// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import openai from '@/utils/openai';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Completions } from 'openai/resources/completions.mjs';
import { ChatCompletionStream } from 'openai/lib/ChatCompletionStream.mjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{
				role: 'system',
				content:
					'Play the role of a teacher. You will recieve a list describing a subject, or an aspect of a subject. Your task is to response with four subdivisions of that subject that are realated to women, with one word each, so that one person could go further in depth into the subject. Provide your response in a javascript array, in the format [a,b,c,d]',
			},
			{
				role: 'system',
				content: 'ovulation',
			},
		],
		model: 'gpt-3.5-turbo',
	});

	res.status(200).json(chatCompletion);
}

// export async function POST(req: Request) {
// 	// Extract the `prompt` from the body of the request
// 	const { prompt }: { prompt: string } = await req.json();

// 	// Ask OpenAI for a streaming completion given the prompt
// 	const response = await openai.completions.create({
// 		model: 'gpt-3.5-turbo-instruct',
// 		max_tokens: 2000,
// 		stream: true,
// 		messages: [
// 			{
// 				role: 'system',
// 				content:
// 					'Play the role of a teacher. You will recieve a list describing a subject, or an aspect of a subject. Your task is to response with four subdivisions of that subject that are realated to women, with one word each, so that one person could go further in depth into the subject. Provide your response in a javascript array, in the format [a,b,c,d]',
// 			},
// 			{
// 				role: 'user',
// 				content: 'period',
// 			},
// 		],
// 	});

// 	const stream = OpenAIStream(response);

// 	return new StreamingTextResponse(stream);
// }
