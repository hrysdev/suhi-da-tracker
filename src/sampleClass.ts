// class CurrentTabUrl {
//   private readonly url: string;

//   constructor()
// }

// class GameScore {
//   private readonly url: string;

//   constructor(url: string) {
//     if (typeof url !== "string") {
//       throw new Error();
//     }

//     this.url = url;
//   }

//   public extractScoreByURL(url: string): string {
//     return url.match(/★(\d,\d+)円/)[1];
//   }

//   public extractSpeedByURL(url: string): string {
//     return url.match(/速度：(\d+.\d+)/)[1];
//   }

//   public extractTypoByURL(url: string): string {
//     return url.match(/ミス：(\d+)/)[1];
//   }

//   public extractLevelByURL(url: string): string {
//     return url.match(/(\d,\d+)円コース/)[1];
//   }
// }
