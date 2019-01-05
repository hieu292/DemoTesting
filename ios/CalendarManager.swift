//
//  CalendarManager.swift
//  BraintreeRN
//
//  Created by builder on 1/3/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(CalendarManager)
class CalendarManager: RCTEventEmitter {
  
  @objc override func supportedEvents() -> [String]! {
    return ["EventReminder"];
  }
  
  @objc func addEvent(_ name: String, location: String, date: NSNumber, callback: RCTResponseSenderBlock ) -> Void {
    // Date is ready to use!
    NSLog("%@ %@ %@", name, location, date)
    let ret:[String:Any] =  ["name": name, "location": location, "date" : date]
    callback([ret])
    self.sendEvent(withName: "EventReminder", body: ret)
  }
  
//  @objc func constantsToExport() -> [String : Any]! {
//    return [
//      "x": 1,
//      "y": 2,
//      "z": "Arbitrary string"
//    ]
//  }
  
}
