//
//  CookieManager.swift
//  BraintreeRN
//
//  Created by builder on 1/2/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(CookieManager)
class CookieManager: NSObject {
  
  @objc func clearCookies() -> Void {
    // Remove all cache
    URLCache.shared.removeAllCachedResponses()
    
    // Delete any associated cookies
    if let cookies = HTTPCookieStorage.shared.cookies {
      for cookie in cookies {
        HTTPCookieStorage.shared.deleteCookie(cookie)
      }
    }
  }
}
