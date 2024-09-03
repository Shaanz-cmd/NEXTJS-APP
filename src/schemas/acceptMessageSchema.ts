import { z } from "zod";

export const signInSchema = z.object({
    scceptMessages: z.boolean()
})
