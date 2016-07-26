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
        // window.shimIndexedDB.__useShim();
        // var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
        // var open = indexedDB.open("Channels", 1);
        // open.onupgradeneeded = function() {
        //     var db = open.result;
        //     var store = db.createObjectStore("Channels", {keyPath: "id"});
        // };
        // open.onsuccess = function() {
        //     fetch('/channels.json')
        //         .then(function (response) {
        //             return response.json();
        //         })
        //         .then(function (json) {
        //             var db = open.result;
        //             var tx = db.transaction("Channels", "readwrite");
        //             var store = tx.objectStore("Channels");
        //             tx.oncomplete = function() {
        //                 var getChannels = store.get(1);
        //                 getChannels.onsuccess = function() {
        //                     var channels = getChannels.result.name.first;
        //                     console.log(channels);
        //                     db.close();
        //                 };
        //             };
        //             store.put({id: 1, channels: json});
        //
        //
        //
        //         })
        //         .catch(function (ex) {
        //
        //         });
        //
        // }

    }
};
