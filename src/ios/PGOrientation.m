
#import "PGOrientation.h"
#import <Cordova/CDVViewController.h>

//

@interface PGOrientation () {}
@end


// Need to make supportedOrientations visible on CDVViewController
@implementation PGOrientation

- (void)setAllowedOrientations:(CDVInvokedUrlCommand*)command
{
    CDVViewController* vc = (CDVViewController*)self.viewController;
    NSMutableArray* result = [[NSMutableArray alloc] init];
    [result addObject:[NSNumber numberWithInt:UIInterfaceOrientationPortrait]];
    // ...
    vc.supportedOrientations = result;
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    
}

@end