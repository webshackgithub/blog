import { z } from "zod";

export const postSchema = z.object({
    title: z.string().min(1, "제목을 입력해주세요.").max(100, "제목은 100자 이내로 입력해주세요."),
    slug: z.string().min(1, "슬러그를 입력해주세요.").regex(/^[a-z0-9-]+$/, "슬러그는 소문자, 숫자, 하이픈(-)만 사용할 수 있습니다."),
    content: z.string().min(1, "본문을 입력해주세요."),
    excerpt: z.string().max(200, "요약은 200자 이내로 입력해주세요.").optional().nullable(),
    category: z.string().min(1, "카테고리를 선택해주세요."),
    tags: z.string().transform((val) => val.split(",").map((t) => t.trim()).filter(Boolean)),
    thumbnail_url: z.string().url("올바른 이미지 URL을 입력해주세요.").or(z.literal("")).optional().nullable(),
    status: z.enum(["draft", "published"]).default("published"),
});

export type PostInput = z.infer<typeof postSchema>;
