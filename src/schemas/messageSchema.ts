import { z } from "zod";

export const messageSchema = z.object({
    content:
        z.string()
            .min(10, { message: "content must be atleast 10 characters" })
            .max(300, { message: "Max content length should not exceed 300 chars" })
})