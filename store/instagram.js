// import axios from 'axios';

// export const state = () => ({
//   instagram: [],
// });

// export const mutations = {
//   addPhotos(state, { name, value }) {
//     return (state[name] = value);
//   },
// };

// export const actions = {
//   async GET_PHOTOS ({ state }) {
//     const data = await this.$axios.$get('https://www.instagram.com/raklechitsa/?__a=1');
//     const formatData = getPosts(data);
//   //   commit('addPhotos', formatData)
// console.log(formatData);
//   return state.commit('addPost'), {
//     name: 'instagram',
//     value: formatData
//   }
// }
// };

// // export const actions = {
// //   fetchStatistics(state) {
// //     return axios.get(process.env.BASE_URL + 'statistics').then(response => {
// //       return state.commit('setState', {
// //         name: 'statistics',
// //         value: response.data,
// //       });
// //     });
// //   },
// // };

// const getPosts = data => {
//   return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
//     const { node: { display_url, accessibility_caption, shortcode } } = post
//     return {
//       display_url,
//       accessibility_caption,
//       url: `https://www.instagram.com/p/${shortcode}`
//     }
//   })
// }
