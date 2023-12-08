import * as trpc from "@trpc/server";
import { z } from "zod";

import { data } from "../data/projectData";

export const projects = trpc.router().query("projects", {
	output: z.object({ success: z.boolean(), data: z.object({}) }),
	async resolve({ ctx }) {
		try {
			if (data) {
				return {
					success: true,
					data,
				};
			} else {
				throw new Error();
			}
		} catch (error) {
			console.error(error);
			return {
				success: false,
				data: { success: false, data: {} },
			};
		}
	},
});
