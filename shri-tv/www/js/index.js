/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        StatusBar.overlaysWebView(false);
        StatusBar.styleDefault();
        window.shimIndexedDB.__useShim();
        var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
        var open = indexedDB.open("MyDatabase", 1);
        open.onupgradeneeded = function() {
            var db = open.result;
            var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
            var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
        };

        open.onsuccess = function() {
            // Start a new transaction
            var db = open.result;
            var tx = db.transaction("MyObjectStore", "readwrite");
            var store = tx.objectStore("MyObjectStore");
            var index = store.index("NameIndex");

            // Add some data
            store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
            store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});

            // Query the data
            var getJohn = store.get(12345);
            var getBob = index.get(["Smith", "Bob"]);

            getJohn.onsuccess = function() {
                console.log(getJohn.result.name.first);  // => "John"
            };

            getBob.onsuccess = function() {
                console.log(getBob.result.name.first);   // => "Bob"
            };

            // Close the db when the transaction is done
            tx.oncomplete = function() {
                db.close();
            };
        }

    }
};
