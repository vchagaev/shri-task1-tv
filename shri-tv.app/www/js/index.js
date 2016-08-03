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

        //indexedDB polyfill
        window.shimIndexedDB.__useShim();

        //DB init and open
        var dbName = 'shri-tv';
        var db = new Dexie(dbName);
        db.version(1).stores({
            channels: 'id,channels'
        });
        db.open().catch(function (e) {
            alert ("Open failed: " + e);
        });

        /**
         * Fill page with tv shows from indexedDB
         * @param {Dexie} db - Dexie DB
         */
        function fillPageFromDb(db) {
            db.channels.get(1).then(function (row) {
                if (row) {
                    var wrapper = document.getElementById('channels');
                    wrapper.innerHTML = template({channels: row.channels});
                } else {
                    alert('Не могу получить данные');
                }
            });


        }

        // Get data from json or just use existing data
        fetch('https://vchagaev.github.io/shri-task1-tv/mobile/channels.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                db.channels.put({id: 1, channels: json})
                    .then(function (){
                        fillPageFromDb(db);
                    })
            })
            .catch(function (error) {
                fillPageFromDb(db);
            });
    }
};
