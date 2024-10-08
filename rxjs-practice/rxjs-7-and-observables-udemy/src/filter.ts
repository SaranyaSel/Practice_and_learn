import { filter, Observable } from "rxjs";
import appendToBody from "../append_to_body";

interface NewsItem {
    category: 'Business' | 'Sports';
    content: string;
}

const newsFeed$ = new Observable<NewsItem>(subscriber => {
    setTimeout(() =>
        subscriber.next({ category: 'Business', content: 'A' }), 1000);
    setTimeout(() =>
        subscriber.next({ category: 'Sports', content: 'B' }), 3000);
    setTimeout(() =>
        subscriber.next({ category: 'Business', content: 'C' }), 4000);
    setTimeout(() =>
        subscriber.next({ category: 'Sports', content: 'D' }), 6000);
    setTimeout(() =>
        subscriber.next({ category: 'Business', content: 'E' }), 7000);
});

newsFeed$.subscribe(
    item => appendToBody(`${JSON.stringify(item)}`)
);

// Filter the news feed to only show sports news
const sportsNewsFeed$ = newsFeed$.pipe(
    filter(item => item.category === 'Sports')
);

sportsNewsFeed$.subscribe(
    item => appendToBody(`Sports: ${JSON.stringify(item)}`)
);
