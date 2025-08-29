import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { contact, experience, hello } from "../../../src/server/routes";

export const appRouter = trpc
	.router()
	.merge(hello)
	.merge(contact)
	.merge(experience);

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: () => null,
	batching: {
		enabled: false,
	},
});
