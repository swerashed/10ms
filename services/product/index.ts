"use server"

import { AppAxios } from "@/lib/axios";

export const getSeoData = async (lang: "en" | "bn" = "en") => {
    try {
        const data = await AppAxios('/ielts-course', {
            lang: lang
        });

        return  data?.data.seo || {}
    } catch (error) {
        console.error('Failed to fetch seo data:', error);
    }
}

export const getProductData = async (lang: "en" | "bn" = "en") => {
    try {
        const data = await AppAxios('/ielts-course', {
            lang: lang
        });

        return  data?.data || {}
    } catch (error) {
        console.error('Failed to fetch product data:', error);
    }
}

