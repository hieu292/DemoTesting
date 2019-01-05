//
//  CookieManagerBridge.m
//  BraintreeRN
//
//  Created by builder on 1/2/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTBridge.h"
#import "React/RCTEventDispatcher.h"
#import "React/RCTLog.h"


@interface RCT_EXTERN_MODULE(CookieManager, NSObject)

RCT_EXTERN_METHOD(clearCookies)

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
