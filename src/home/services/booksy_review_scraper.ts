
export interface Review {
    review: string;
    created: string;
    user: User;
    staff: Staff[];
}

interface Staff {
    id: number;
}

interface User {
    first_name: string;
}

export async function getReviews(url: string): Promise<Review[]> {
    const reviews = await fetchHtml(url);
    const reviewsScript = reviews.scripts[5].text;
    const script = reviewsScript
        .replace('window.__NUXT__=(function', 'return function')
        .replace(');', ';');

    const total = getTotalPageCount(script);
    const reviewsParsed = collectReviews(script, total);

    return reviewsParsed.filter((r) => r.staff.map((s) => s.id).includes(306022));
}

async function fetchHtml(url: string) {
    const parser = new DOMParser();
    return await fetch(url)
        .then((r) => r.text())
        .then((text) => parser.parseFromString(text, 'text/html'));
}

function getTotalPageCount(script: string): number {
    const pagesMatch = /,13,\d+,/.exec(script);
    const pages = pagesMatch
        ?.flatMap((m) => m.split(',').filter((s) => s.length != 0))
        .pop();
    return parseInt(pages || '0');
}

function collectReviews(script: string, totalPageCount: number): Review[] {
    return Array(totalPageCount)
        .fill(0)
        .flatMap((e, i) => {
            const fn: Function = new Function(
                script.replace(`,7,1,6,`, `,7,${i + 1},6,`)
            );
            return fn().state.business.reviews;
        })
        .map((el) => el as Review);
}

