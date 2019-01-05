//
//  Counter.m
//  BraintreeRN
//
//  Created by builder on 1/5/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter, NSObject)



+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
