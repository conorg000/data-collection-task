import { load } from "cheerio";

export const cleanHtml = (html: string) => {
    const $ = load(html);
    const elementsToRemove = [
        'form', 'script', 'style', 'img', 'video', 'svg', 'path', 'g',
        'noscript', 'meta', 'header', 'footer', 'nav', 'iframe'
    ];

    elementsToRemove.forEach(selector => $(selector).remove());

    return $;
};