//
//  Payment.swift
//  BraintreeRN
//
//  Created by builder on 1/7/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import UIKit
import Alamofire
import Braintree
import BraintreeDropIn
import SwiftyJSON

@objc(BraintreePayment)
class BraintreePayment: NSObject {
  
  var tokenServerUrl: String = "";
  var nonceServerUrl: String = "";
  var token: String = "";
  var nonce: String = "";
  var promiseResolver: RCTPromiseResolveBlock?;
  var promiseRejecter: RCTPromiseRejectBlock?;
  
  func fetchClientToken() {
      Alamofire.request(self.tokenServerUrl).responseJSON { response in
        switch response.result {
        case .success(let value):
          let json = JSON(value)
          if let clientToken = json["clientToken"].string {
            self.token = clientToken
            self.showDropIn(isSendNonceServer: true)
          }
        case .failure(let error):
          self.promiseRejecter?("E_GET_TOKEN", "cannot get token", error)
        }
      }
  }
  
  func showDropIn(isSendNonceServer: Bool) {
    let request = BTDropInRequest()
    let dropIn = BTDropInController(authorization: self.token, request: request)
    { (controller, result, error) in
      if (error != nil) {
        self.promiseRejecter?("E_ERROR", "Unexpected", error)
      } else if (result?.isCancelled == true) {
        self.promiseRejecter?("E_USER_CANCELLED", "User Cancelled", error)
      } else if let nonce = result?.paymentMethod?.nonce {
        if(isSendNonceServer){
          self.sendRequestPaymentToServer(nonce: nonce)
        }
        self.nonce = nonce
      }
      controller.dismiss(animated: true, completion: nil)
    }
    self.reactRoot()!.present(dropIn!, animated: true, completion: nil)
  }
  
  func reactRoot() -> UIViewController? {
    var topController = UIApplication.shared.keyWindow?.rootViewController
    if (topController?.presentedViewController != nil) {
      topController = topController?.presentedViewController
    }
    return topController
  }

  func sendRequestPaymentToServer(nonce: String) {
    
    let parameters: Parameters = [
      "nonce": nonce
    ]
    
    Alamofire.request(self.nonceServerUrl, method: .post, parameters: parameters).responseJSON { response in
      switch response.result {
      case .success(let value):
        let json = JSON(value)
        if let result = json.string {
          self.promiseResolver?(result)
        }
      case .failure(let error):
        self.promiseRejecter?("E_Transaction_Failed", "Transaction failed", error)
      }
    }
  }
  
  @objc
  func pay(_ configDict: NSDictionary, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
    let config = configDict as! [String: String]
    self.tokenServerUrl = config["tokenServerUrl"] ?? ""
    self.nonceServerUrl = config["nonceServerUrl"] ?? ""
    self.token = config["token"] ?? ""
    self.promiseResolver = resolve;
    self.promiseRejecter = reject;
    if (tokenServerUrl != "" && nonceServerUrl != "") {
      self.fetchClientToken()
    } else if self.token != "" {
      self.showDropIn(isSendNonceServer: false)
      resolve(self.nonce)
    } else {
      let error = NSError(domain: "", code: 400, userInfo: [NSLocalizedDescriptionKey : "Invalid Input" ])
      reject("WRONG_PARAMETERS", "Pass wrong parameters", error)
    }
  }
}
