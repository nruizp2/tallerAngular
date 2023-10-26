export class Serie{
    id: number;
    name: String;
    channel: String;
    seasons: number;
    description:String;
    webpage: String;
    poster: String;

    constructor(id: number,
        name: String,
        channel: String,
        seasons: number,
        description:String,
        webpage: String,
        poster: String){

            this.id = id;
            this.channel = channel;
            this.description = description;
            this.seasons = seasons;
            this.webpage = webpage;
            this.name = name;
            this.poster = poster;
    }
}