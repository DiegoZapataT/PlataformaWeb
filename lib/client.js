import sanityClient from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({
    projectId: '9v3uwxes',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: 'skYI17FeTsMW8Yqs4YMp1tAa8urzZD8hhR8U08gMRA8y2sMTYEFEZa71n0vzYXmuVjpR8FieFrkHQXQ1q2NS96Cxmj8MKVJ3r5i2ShdXD65kqdAN576f22YdITMhMQEJUAlIqZKYwsxn6h95cxBVQjEQkldY93DQd2hdLUZAYmN8UoYns52y'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);