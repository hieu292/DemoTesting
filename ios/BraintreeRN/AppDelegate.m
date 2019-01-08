/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "BraintreeCore.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "React/RCTLinkingManager.h"


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  #ifdef DEBUG
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  #else
    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  #endif

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"BraintreeRN"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  [BTAppSwitch setReturnURLScheme:self.paymentsURLScheme];
  return YES;
}
  
  - (BOOL)application:(UIApplication *)application
              openURL:(NSURL *)url
              options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    
    if ([url.scheme localizedCaseInsensitiveCompare:self.paymentsURLScheme] == NSOrderedSame) {
      return [BTAppSwitch handleOpenURL:url options:options];
    }
    
    return [RCTLinkingManager application:application openURL:url options:options];
  }
  
- (NSString *)paymentsURLScheme {
  NSString *bundleIdentifier = [[NSBundle mainBundle] bundleIdentifier];
  return [NSString stringWithFormat:@"%@.%@", bundleIdentifier, @"payments"];
}

@end
