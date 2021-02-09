import LocalizedStrings from 'react-native-localization';

import ScreensLocalization from './localizations/ScreensLocalization';
import HomeLocalization from './localizations/HomeLocalization';
import CommonLocalization from './localizations/CommonLocalization';
import TweetLocalization from './localizations/TweetLocalization';

class Localization {
  common = new LocalizedStrings(CommonLocalization);
  screens = new LocalizedStrings(ScreensLocalization);
  home = new LocalizedStrings(HomeLocalization);
  tweet = new LocalizedStrings(TweetLocalization);

  getLanguage(): string {
    return this.common.getLanguage();
  }
}

const localization = new Localization();
export default localization;
