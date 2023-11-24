import {createApi} from 'unsplash-js';
const key='Y6WIQmy70NtQWDZ7kS9ylJV66CrfbrDGNGHDE51IJ7Y'
const unsplash = createApi({
    accessKey: key,

});
export const randomPhoto = await unsplash.photos.getRandom({count: 10}).then(r => r.response).then(res => res.map(item => {
    return {src: item.urls.regular, id: item.id,hash:item.blur_hash}
}))
export const getPhotosByQuery = async (query) => await unsplash.search.getPhotos({query: query}).then(res => res.response.results).then(r => r.map(item => {
    return {src: item.urls.regular, id: item.id}
}))
export const getPhotoInfoById = async (id) => await unsplash.photos.get({photoId: id}).then(res => res.response).then(r => {
    return {
        name: r.user.name,
        userName: r.user.instagram_username,
        avatar: r.user.profile_image.medium,
        link: r.links.download_location+`&client_id=${key}`,
        image: r.urls.regular
    }
})

