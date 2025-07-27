"use server";

const defaultHeaders = {
    'X-TENMS-SOURCE-PLATFORM': 'web',
    'Accept': 'application/json',
};

export const getSeoData = async (lang: 'en' | 'bn' = 'en') => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}?lang=${lang}`, {
            headers: defaultHeaders,
            next: { revalidate: 60 }, 
        });

        if (!res.ok) throw new Error('Failed to fetch SEO data');

        const data = await res.json();
        return data?.seo || {};
    } catch (error) {
        console.error('Failed to fetch SEO data:', error);
        return {};
    }
};

export const getProductData = async (lang: 'en' | 'bn' = 'en') => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}?lang=${lang}`, {
            next: { revalidate: 60 }, 
        });

        if (!res.ok) throw new Error('Failed to fetch Product data');

        const data = await res.json();
        return data || {};
    } catch (error) {
        console.error('Failed to fetch Product data:', error);
        return {};
    }
};
