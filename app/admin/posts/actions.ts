"use server";

import { createClient } from "@/utils/supabase/server";
import { postSchema } from "@/lib/validations/post";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ActionState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
};

export async function createPost(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const supabase = await createClient();

    // 1. 사용자 인증 확인
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            success: false,
            message: "인증이 필요합니다. 로그인 후 다시 시도해주세요.",
        };
    }

    // 2. 데이터 파싱 및 유효성 검사
    const rawData = {
        title: formData.get("title"),
        slug: formData.get("slug"),
        content: formData.get("content"),
        excerpt: formData.get("excerpt"),
        category: formData.get("category"),
        tags: formData.get("tags"),
        thumbnail_url: formData.get("thumbnail_url"),
        status: formData.get("status") || "published",
    };

    const validatedFields = postSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: "입력값이 올바르지 않습니다.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const postData = validatedFields.data;

    // 3. 슬러그 중복 확인
    const { data: existingPost } = await supabase
        .from("posts")
        .select("id")
        .eq("slug", postData.slug)
        .single();

    if (existingPost) {
        return {
            success: false,
            message: "이미 존재하는 슬러그입니다. 다른 슬러그를 사용해주세요.",
            errors: { slug: ["이미 사용 중인 슬러그입니다."] },
        };
    }

    // 4. 데이터 저장
    const { error: insertError } = await supabase.from("posts").insert({
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        excerpt: postData.excerpt,
        category: postData.category,
        tags: postData.tags,
        thumbnail_url: postData.thumbnail_url,
        status: postData.status,
        author_id: user.id,
    });

    if (insertError) {
        console.error("Post creation error details:", insertError);
        return {
            success: false,
            message: `포스트 저장 중 오류가 발생했습니다: ${insertError.message} (${insertError.code})`,
        };
    }

    // 5. 캐시 갱신 및 리다이렉트
    revalidatePath("/admin/posts");
    revalidatePath("/");

    redirect("/admin/posts");
}

export async function updatePost(
    id: string,
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const supabase = await createClient();

    // 1. 사용자 인증 확인
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            success: false,
            message: "인증이 필요합니다. 로그인 후 다시 시도해주세요.",
        };
    }

    // 2. 데이터 파싱 및 유효성 검사
    const rawData = {
        title: formData.get("title"),
        slug: formData.get("slug"),
        content: formData.get("content"),
        excerpt: formData.get("excerpt"),
        category: formData.get("category"),
        tags: formData.get("tags"),
        thumbnail_url: formData.get("thumbnail_url"),
        status: formData.get("status") || "published",
    };

    const validatedFields = postSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: "입력값이 올바르지 않습니다.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const postData = validatedFields.data;

    // 3. 슬러그 중복 확인 (자기 자신 제외)
    const { data: existingPost } = await supabase
        .from("posts")
        .select("id")
        .eq("slug", postData.slug)
        .neq("id", id) // 현재 수정 중인 포스트는 제외
        .single();

    if (existingPost) {
        return {
            success: false,
            message: "이미 존재하는 슬러그입니다. 다른 슬러그를 사용해주세요.",
            errors: { slug: ["이미 사용 중인 슬러그입니다."] },
        };
    }

    // 4. 데이터 업데이트
    const { error: updateError } = await supabase
        .from("posts")
        .update({
            title: postData.title,
            slug: postData.slug,
            content: postData.content,
            excerpt: postData.excerpt,
            category: postData.category,
            tags: postData.tags,
            thumbnail_url: postData.thumbnail_url,
            status: postData.status,
            updated_at: new Date().toISOString(), // 수정 시간 갱신
        })
        .eq("id", id);

    if (updateError) {
        console.error("Post update error details:", updateError);
        return {
            success: false,
            message: `포스트 수정 중 오류가 발생했습니다: ${updateError.message}`,
        };
    }

    // 5. 캐시 갱신 및 리다이렉트
    revalidatePath("/admin/posts");
    revalidatePath(`/admin/posts/${id}`);
    revalidatePath("/");

    redirect("/admin/posts");
}
