import { BadgeOptionsObjectInterface } from '../interfaces/BadgeOptionsInterface';
import { BadgeStatsInterface } from '../interfaces/BadgeStatsInterface';
import { Globals } from '../Globals';

export class Badge {
  private static badgeBaseURL = Globals.BADGE_BASE_URL;

  public static create(options: BadgeOptionsObjectInterface, stats: BadgeStatsInterface, prefix: string = ''): string {
    const prefixCapitalised = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    let badgeURL = this.badgeBaseURL + `${prefixCapitalised}-${Math.round(stats.coverage)}${encodeURI('%')}-${stats.color}.svg?`;

    for (const option of Object.keys(options)) {
      badgeURL = badgeURL.concat(`${option}=${options[option]}&`);
    }
    return badgeURL.concat(`prefix=$${prefix}$)`);
  }
}
