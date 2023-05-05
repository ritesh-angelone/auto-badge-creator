import { BadgeOptionsObjectInterface } from '../interfaces/BadgeOptionsInterface';
import { BadgeStatsInterface } from '../interfaces/BadgeStatsInterface';
import { Globals } from '../Globals';
import { OutputType } from '../enums/OutputType';

export class Badge {
  public static create(options: BadgeOptionsObjectInterface, stats: BadgeStatsInterface, prefix: string = ''): string {
    const prefixCapitalised = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    let badgeURL =
      Globals.BASE_URL + `${prefixCapitalised}-${Math.round(stats.coverage)}${encodeURI('%')}-${stats.color}.svg?`;

    for (const option of Object.keys(options)) {
      badgeURL = badgeURL.concat(`${option}=${options[option]}&`);
    }
    badgeURL = badgeURL.concat(`prefix=$${prefix}$`);
    if (Globals.OUTPUT_TYPE === OutputType.MARKDOWN) badgeURL += ')';
    return badgeURL;
  }
}
