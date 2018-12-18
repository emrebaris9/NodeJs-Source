// aralara tire ekleme
const slugify = require ('slugify');

const text = "emre baris now loading";
const slug = slugify(text, '-');

console.log(slug);