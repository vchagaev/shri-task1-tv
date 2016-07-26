var app = {

    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {

        // Show status bar
        StatusBar.overlaysWebView(false);
        StatusBar.styleDefault();

        const dbName = "channels";

        //indexedDB polyfill
        window.shimIndexedDB.__useShim();
        var indexedDB = window.shimIndexedDB || window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        //DB init and open
        var open = indexedDB.open("chapai-shri-tv-2016", 1);

        open.onupgradeneeded = function (event) {
            var db = event.target.result;
            var store = db.createObjectStore(dbName, {keyPath: "id"});
        };

        open.onsuccess = function (event) {
            // Start a new transaction

            var db = event.target.result;

            function getStore(db) {
                var tx = db.transaction(dbName, "readwrite");
                return tx.objectStore(dbName);
            }

            /**
             * Fill page with tv shows from indexedDB
             * @param store - Channels Store
             */
            function fillPageFromDb(store) {
                var getChannels = store.get(1);
                getChannels.onsuccess = function () {
                    var wrapper = document.getElementById('channels');
                    wrapper.innerHTML = template({channels: getChannels.result.channels});
                };
            }

            // Get data from json or just use existing data
            fetch('https://vchagaev.github.io/shri-task1-tv/mobile/channels.json')
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    getStore(db).put({id: 1, channels: json});
                    fillPageFromDb(getStore(db));
                })
                .catch(function (error) {
                    fillPageFromDb(getStore(db));
                });

        };

        open.onerror = function (event) {
            alert(event.target.errorCode);
        };
    }
};
