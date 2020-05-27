export default async function({ route, store }) {
    await store.dispatch('texts/fetchText');
    await store.dispatch('video/fetchUrl');
    await store.dispatch('stories/fetchStories');
}