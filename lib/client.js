import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId : "99regteo",
    dataset : "production",
    apiVersion : "2022-07-09",
    useCdn : true,
    token : "skGEMb3I9broUyRGkFEzCcuKrgu7P49ezcwYKMPYUTIY3zy1YNTm62SXr8ZZ8J5VJf0zkAE0IOUjCJSJgGQStDmv30yaxXbco6uG4YvcFZvh2pM1D1LZrOjSnQ3Sv5lL9GaoqsvhLb9jgaQO01hFnSH1lNsJvwyyGdLTgjlPP6bJqfnI93xF"
})
const builder = imageUrlBuilder(client)

export const urlFor = (source) =>builder.image(source)