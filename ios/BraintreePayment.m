//
//  Payment.m
//  BraintreeRN
//
//  Created by builder on 1/7/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>

@interface RCT_EXTERN_MODULE(BraintreePayment, NSObject)

RCT_EXTERN_METHOD(pay:(NSDictionary *)config resolver: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject);

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end

