// put a fake list of photos instead of hitting an API

const photolist = [
    {
        id: 1,
        photoURL: 'https://images.unsplash.com/photo-1665708385751-0e2e5a72e06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTM3OQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Young black curly-haired female holding glasses',
        userName: 'Aaliyah212',
        profilePhoto: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        id: 2,
        photoURL: 'https://images.unsplash.com/photo-1667655866927-c334f8db27ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTQ5Ng&ixlib=rb-4.0.3&q=80&w=1080https://images.unsplash.com/photo-1665708385751-0e2e5a72e06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTM3OQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Random person with reading a newspaper in bed that has white sheets with a blue bedframe',
        userName: 'JournalISt',
        profilePhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        id: 3,
        photoURL: 'https://images.unsplash.com/photo-1666307530552-ee5841634a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTU5Mw&ixlib=rb-4.0.3&q=80&w=1080ps://images.unsplash.com/photo-1665708385751-0e2e5a72e06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTM3OQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Outdoor bar with white marble counter and six wooden barstools with palmtrees and the sun rising in the background',
        userName: 'liveFr33',
        profilePhoto: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        id: 4,
        photoURL: 'https://images.unsplash.com/photo-1667335026429-1554d21bbcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTkwMQ&ixlib=rb-4.0.3&q=80&w=1080mages.unsplash.com/photo-1665708385751-0e2e5a72e06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTM3OQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Straight road with two forests',
        userName: 'mapQu3sT',
        profilePhoto: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        id: 5,
        photoURL: 'https://images.unsplash.com/photo-1667853539601-b9d6efe2d8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTg5Nw&ixlib=rb-4.0.3&q=80&w=1080mages.unsplash.com/photo-1665708385751-0e2e5a72e06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTM3OQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Bottle of Prossecco in a bucket of ice',
        userName: 'ChampagnePapi',
        profilePhoto: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        id: 6,
        photoURL: 'https://images.unsplash.com/photo-1667047497495-91f2aa3321cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTkwMw&ixlib=rb-4.0.3&q=80&w=1080.com/photo-1665708385751-0e2e5a72e06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTM3OQ&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'Outside of a new building',
        userName: 'R3AL3ST8',
        profilePhoto: 'https://randomuser.me/api/portraits/women/6.jpg',
    }
]

export default photolist