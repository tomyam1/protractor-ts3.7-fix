import { ElementHelper, ProtractorBrowser } from './browser';
import { ElementArrayFinder, ElementFinder } from './element';
import { ProtractorExpectedConditions } from './expectedConditions';
import { ProtractorBy } from './locators';
import { Ptor } from './ptor';
export { ActionSequence, Browser, Builder, Button, Capabilities, Capability, error, EventEmitter, FileDetector, Key, logging, promise, Session, until, WebDriver, WebElement, WebElementPromise } from 'selenium-webdriver';
export { ElementHelper, ProtractorBrowser } from './browser';
export { Config } from './config';
export { ElementArrayFinder, ElementFinder } from './element';
export { ProtractorExpectedConditions } from './expectedConditions';
export { Locator, ProtractorBy } from './locators';
export { Ptor } from './ptor';
export { Runner } from './runner';
export { PluginConfig, ProtractorPlugin } from './plugins';
export declare let utils: {
    firefox: any;
    http: any;
    remote: any;
};
export declare let Command: any;
export declare let CommandName: any;
export declare let protractor: Ptor;
export declare let browser: ProtractorBrowser;
export declare let $: (search: string) => ElementFinder;
export declare let $$: (search: string) => ElementArrayFinder;
export declare let element: ElementHelper;
export declare let By: ProtractorBy;
export declare let by: ProtractorBy;
export declare let ExpectedConditions: ProtractorExpectedConditions;
