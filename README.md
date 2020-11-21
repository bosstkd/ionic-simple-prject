# plugins to install: 

ionic g service services/database
ionic g page pages/developers
ionic g page pages/developer
 
npm install @ionic-native/sqlite @ionic-native/sqlite-porter
 
ionic cordova plugin add cordova-sqlite-storage
ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteporter
