"use server";

import { createClient } from "@/utils/supabase/server";

export async function getDashboardStats() {
    const supabase = await createClient();

    const [
        { count: totalPosts },
        { count: totalUsers },
        { count: publishedPosts },
        { count: draftPosts },
        { data: categoriesData }
    ] = await Promise.all([
        supabase.from('posts').select('*', { count: 'exact', head: true }),
        supabase.from('users').select('*', { count: 'exact', head: true }),
        supabase.from('posts').select('*', { count: 'exact', head: true }).eq('status', 'published'),
        supabase.from('posts').select('*', { count: 'exact', head: true }).eq('status', 'draft'),
        supabase.from('posts').select('category')
    ]);

    // 카테고리 고유값 추출
    const uniqueCategories = new Set(categoriesData?.map(p => p.category).filter(Boolean));

    return {
        totalPosts: totalPosts || 0,
        totalUsers: totalUsers || 0,
        publishedPosts: publishedPosts || 0,
        draftPosts: draftPosts || 0,
        totalCategories: uniqueCategories.size,
    };
}

export async function getRecentActivity() {
    const supabase = await createClient();

    const { data: recentPosts, error } = await supabase
        .from('posts')
        .select(`
            id,
            title,
            status,
            created_at,
            category,
            author:users!posts_author_id_fkey (
                full_name,
                email
            )
        `)
        .order('created_at', { ascending: false })
        .limit(5);

    if (error) {
        console.error('Error fetching recent activity:', error);
        return [];
    }

    return recentPosts || [];
}
