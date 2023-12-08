import * as trpc from "@trpc/server";
import { z } from "zod";
import nodemailer from "nodemailer";
const access_key: string = `${process.env.WEB3_ACCESS_KEY}`;
export const contact = trpc.router().mutation("contact", {
	input: z.object({
		name: z.string(),
		email: z.string().email(),
		message: z.string(),
	}),
	output: z.object({ success: z.boolean(), message: z.string() }),
	async resolve({ input }) {
		const { name, email, message } = input;
		try {
			if (name.length && message.length) {
				const body: object = {
					name,
					email,
					message,
					access_key,
					subject: "Message From Portfolio Site",
				};
				const resp = await fetch("https://api.web3forms.com/submit", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(body),
				});
				const result = await resp.json();
				if (result.success) {
					return {
						success: true,
						message: "Successfully sent message",
					};
				} else {
					console.log(result);
					throw new Error(
						"Some error occurred when sending... please contact me on any of my networks below"
					);
				}
			} else {
				throw new Error(
					"Message and name is not specified, please fill out and try again "
				);
			}
		} catch (error: unknown) {
			const { message } = error as Error;
			console.error(message);
			return {
				success: false,
				message: message,
			};
		}
	},
});
