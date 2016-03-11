
#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>

@interface PGOrientation : CDVPlugin
{}

- (void)setAllowedOrientations:(CDVInvokedUrlCommand*)command;

@end