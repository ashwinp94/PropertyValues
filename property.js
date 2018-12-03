const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
let Paul  = beatles.members[1].name;
let Start = beatles.history.formed;
let End = beatles.history.disbanded;
let Born = beatles.members[1].birth;
let Album = beatles.albums[3];

console.log(`${Paul} was in the beatles from ${Start} to ${End}. He was born in ${Born}. He contributed heavily to the ${Album} Album.`)
// // Previously was //
// .console.log(beatles.members[1].name, "was in the Beatles from", beatles.history.formed, "to", beatles.history.disbanded+ ".", "He was born in", beatles.members[1].birth+".", "He contributed heavily to the", beatles.albums[3], "album"+".")