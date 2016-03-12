

#import "PGOrientation.h"
#import <Cordova/CDVViewController.h>
#import <objc/message.h>

//

@interface PGOrientation () {}
@end


// Need to make supportedOrientations visible on CDVViewController
@implementation PGOrientation

- (void)setAllowedOrientations:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult;
    NSInteger orientationMask = [[command argumentAtIndex:0] integerValue];
    CDVViewController* vc = (CDVViewController*)self.viewController;
    NSMutableArray* result = [[NSMutableArray alloc] init];
    
    if(orientationMask & 1) {
        [result addObject:[NSNumber numberWithInt:UIInterfaceOrientationPortrait]];
    }
    if(orientationMask & 2) {
        [result addObject:[NSNumber numberWithInt:UIInterfaceOrientationPortraitUpsideDown]];
    }
    if(orientationMask & 4) {
        [result addObject:[NSNumber numberWithInt:UIInterfaceOrientationLandscapeLeft]];
    }
    if(orientationMask & 8) {
        [result addObject:[NSNumber numberWithInt:UIInterfaceOrientationLandscapeRight]];
    }

    SEL selector = NSSelectorFromString(@"setSupportedOrientations:");
    
    if([vc respondsToSelector:selector]) {
        ((void (*)(CDVViewController*, SEL, NSMutableArray*))objc_msgSend)(vc,selector,result);
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    }
    else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_INVALID_ACTION                messageAsString:@"Error calling to set supported orientations"];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    
}

@end