#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date callback: (RCTResponseSenderBlock)callback);

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
