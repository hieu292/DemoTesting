//
//  Payment.swift
//  BraintreeRN
//
//  Created by builder on 1/7/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import BraintreeDropIn
import Braintree

@objc(BraintreePayment)
class BraintreePayment: NSObject {
  
  var tokenServerUrl: String?;
  var nonceServerUrl: String?;
  
  func fetchClientToken() {
    // TODO: Switch this URL to your own authenticated API
    let clientTokenURL = NSURL(string: tokenServerUrl)!
    let clientTokenRequest = NSMutableURLRequest(url: clientTokenURL as URL)
    clientTokenRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
    clientTokenRequest.setValue("application/json", forHTTPHeaderField: "Accept")
    
    URLSession.shared.dataTask(with: clientTokenRequest as URLRequest) { (data, response, error) -> Void in
      // TODO: Handle errors
      let clientToken = String(data: data!, encoding: String.Encoding.utf8)
      
      // As an example, you may wish to present Drop-in at this point.
      // Continue to the next section to learn more...
      }.resume()
  }
  
  func showDropIn(clientTokenOrTokenizationKey: String) {
    let request =  BTDropInRequest()
    let dropIn = BTDropInController(authorization: clientTokenOrTokenizationKey, request: request)
    { (controller, result, error) in
      if (error != nil) {
        print("ERROR")
      } else if (result?.isCancelled == true) {
        print("CANCELLED")
      } else if let result = result {
        // Use the BTDropInResult properties to update your UI
        // result.paymentOptionType
        // result.paymentMethod
        // result.paymentIcon
        // result.paymentDescription
      }
      controller.dismiss(animated: true, completion: nil)
    }
    self.present(dropIn!, animated: true, completion: nil)
  }
  
  func sendRequestPaymentToServer(nonce: String, amount: String) {
    let paymentURL = URL(string: nonceServerUrl)!
    var request = URLRequest(url: paymentURL)
    request.httpBody = "payment_method_nonce=\(nonce)&amount=\(amount)".data(using: String.Encoding.utf8)
    request.httpMethod = "POST"
    
    URLSession.shared.dataTask(with: request) { [weak self] (data, response, error) -> Void in
      guard let data = data else {
        self?.show(message: error!.localizedDescription)
        return
      }
      
      guard let result = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: Any], let success = result?["success"] as? Bool, success == true else {
        self?.show(message: "Transaction failed. Please try again.")
        return
      }
      
      self?.show(message: "Successfully charged. Thanks So Much :)")
      }.resume()
  }
  
  @objc
  func pay(config: NSDictionary, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
    tokenServerUrl = config["tokenServerUrl"]
    nonceServerUrl = config["nonceServerUrl"]
    if (count == 0) {
      let error = NSError(domain: "", code: 200, userInfo: nil)
      reject("E_COUNT", "count cannot be negative", error)
    } else {
      count -= 1
      resolve("count was decremented")
    }
  }
}
