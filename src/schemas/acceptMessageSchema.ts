import { z } from "zod";

export const acceptMessageSchema = z.object({
    scceptMessages: z.boolean()
})
