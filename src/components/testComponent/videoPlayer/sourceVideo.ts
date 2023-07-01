export interface IVideo {
    id: number;
    description: string;
    source: string;
    thumb: string;
    title: string;
}
export  const videos: IVideo[] = [
    {
        id: 1,
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        source: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
    },
    {
        id: 2,
        description: "The first Blender Open Movie from 2006",
        source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
        title: "Elephant Dream"
    },
    {
        id: 3,
        description: "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
        source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
        title: "For Bigger Blazes"
    },
    {
        id: 4,
        description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumb: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
        title: "For Bigger Escape"
    },
    {
        id: 5,
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        source: "https://www.shutterstock.com/shutterstock/videos/1034159981/preview/stock-footage-digital-information-flows-through-network-and-data-servers-behind-mesh-panels-in-a-server-room-of-a.webm",
        thumb: "Видео",
        title: "Information technology"
    },
];