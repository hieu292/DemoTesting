# Integrate Android(Java)/ Ios(Swift, Objective-C) Braintree SDK for React Native

## **Requirements**

- Setup Server: https://github.com/hieu292/BraintreeServerDemo

- Dev Tools: NodeJS, Npm, Xcode, Android Studio, VSCode, ...

## **Installation And Demo**

- Run `npm install` or `yarn`
- Run `react-native run-android` for Android or `react-native run-ios` for Ios

## **Integrate with your current React Native app**

### _For Android_

- copy **ReactNativePayment** module to your main src
- register your native module at `MainApllication.java`

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new PaymentPackage()
            );
        }

- more setup at https://developers.braintreepayments.com/guides/client-sdk/setup/android/v2

### _For Ios_

- copy `Podfile` and run `pod install`
- attach `BraintreeRN-Bridging-Header.h`, `BraintreePayment.m` and `BraintreePayment.swift` into Xcode
- more setup at https://developers.braintreepayments.com/guides/paypal/client-side/ios/v4#next-choose-your-integration

## Reference
- How Braintree Payment works https://developers.braintreepayments.com/start/overview#how-it-works
