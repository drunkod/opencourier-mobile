import { MapLinkingOptions } from '@app/types/types';
import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HORIZONTAL_MARGIN = 32;

export const AUTO_ACCEPT_DECLINE_TIMER = 20000;
export const MAP_ACTION_SHEET_OPTIONS_IOS = [
  MapLinkingOptions.apple,
  MapLinkingOptions.google,
  MapLinkingOptions.waze,
  'Cancel',
];
export const MAP_ACTION_SHEET_OPTIONS_ANDROID = [
  MapLinkingOptions.google,
  MapLinkingOptions.waze,
  'Cancel',
];

export const ADD_NOTE_CELL = 'const_add_note_cell';

export const CELL_EARNINGS_EMPTY = 'const_earnings_empty';

export const ANDROID_CHANNEL_ID = 'fcm_channel_opendeli';
