import * as trpc from "@trpc/server";
import { z } from "zod";
import nodemailer from "nodemailer";
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
				// const nodemailer = require("nodemailer");
				const transporter = nodemailer.createTransport({
					host: "mail.privateemail.com",
					auth: {
						user: `${process.env.EMAIL_ADDRESS}`,
						pass: `${process.env.EMAIL_PASSWORD}`,
					},
					port: 465,
				});
				const mailOptions = {
					from: `${process.env.EMAIL_ADDRESS}`,
					to: `${process.env.EMAIL_ADDRESS}`,
					subject: "Portfolio Web Message",
					text: `Name:${name} \n\n Email:${email} \n\n Message: ${message}`,
				};
				await transporter.sendMail(mailOptions);
				return {
					success: true,
					message: "Successfully sent message",
				};
			} else {
				throw new Error("Name or message is empty");
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
