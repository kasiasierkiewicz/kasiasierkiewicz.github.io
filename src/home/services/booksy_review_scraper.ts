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

export const YeyId = 306022
export const FizjomedicaId = 161189

export async function getReviews(url: string, id?: number): Promise<Review[]> {
    const reviews = await fetchHtml(url)
    const reviewsScript = reviews.scripts[5].text
    const script = reviewsScript
        .replace('window.__NUXT__=(function', 'return function')
        .replace(');', ';')

    const total = getTotalPageCount(script)
    const reviewsParsed = collectReviews(script, total)

    return reviewsParsed.filter((r) => {
        return id ? r.staff.map((s) => s.id).includes(id) : true
    })
}

async function fetchHtml(url: string) {
    const parser = new DOMParser()
    return await fetch(url)
        .then((r) => r.text())
        .then((text) => parser.parseFromString(text, 'text/html'))
}

function getTotalPageCount(script: string): number {
    const pagesMatch = /,13,\d+,/.exec(script)
    const pagesMatch2 = /reviewsTotalPages:\d+/.exec(script)
    const pages2 = pagesMatch2?.flatMap(s => s.split(':').pop()).pop()
    const pages = pagesMatch
        ?.flatMap((m) => m.split(',').filter((s) => s.length != 0))
        .pop()
    const count = pages || pages2 || '0'

    return parseInt(count)
}

function collectReviews(script: string, totalPageCount: number): Review[] {
    return Array(totalPageCount)
        .fill(0)
        .flatMap((e, i) => {
            const fn: Function = new Function(
                script.replace(`,7,1,6,`, `,7,${i + 1},6,`)
            )
            return fn().state.business.reviews
        })
        .map((el) => el as Review)
}

