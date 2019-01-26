// Type definitions for @storybook/addon-storyshots-puppeteer 4.0
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// tslint:disable

declare module '@storybook/addon-storyshots-puppeteer' {
  import { ImageSnapshotOptions, Test } from '@storybook/addon-storyshots';

  import { NavigationOptions, Page, ScreenshotOptions } from 'puppeteer';

  export function imageSnapshot(options?: {
    storybookUrl?: string;
    getMatchOptions?: (
      options: ImageSnapshotOptions
    ) => { failureThreshold: number; failureThresholdType: 'percent' | 'string' };
    getScreenshotOptions?: (options: ImageSnapshotOptions) => ScreenshotOptions;
    beforeScreenshot?: (page: Page, options: ImageSnapshotOptions) => Promise<void>;
    getGotoOptions?: (options: ImageSnapshotOptions) => NavigationOptions;
    chromeExecutablePath?: string;
    customizePage?: (page: Page) => Promise<void>;
  }): Test;
}
