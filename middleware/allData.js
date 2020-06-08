export default async function({ store, route }) {
  await store.dispatch('texts/fetchText');
  await store.dispatch('video/fetchUrl');
  await store.dispatch('stories/fetchStories');
  await store.dispatch('statistics/fetchStatistics');
}
