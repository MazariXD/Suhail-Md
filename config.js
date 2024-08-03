const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="djwaofx@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923427582273" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923427582273";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923427582273,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_20_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAzNixcbiAgICAgICAgMTA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMwLFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTExLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgODksXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDg5LFxuICAgICAgICA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICA2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicCs0eCtRdFpDNFNxZnFwbm1SYVBsdnZtcktwTXhLOVYyYnFZZjJJM0h4WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZDZtLU9WbEpTZTZ2THZJWmhJSnNkUVwiLFxuICBcInBob25lSWRcIjogXCI5NWVmZTBkZS0xNTczLTRhMmEtYmNlYS04NmQzYjY3YTdmZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgNzksXG4gICAgICAxMDcsXG4gICAgICAyMzEsXG4gICAgICAxNjcsXG4gICAgICAxODYsXG4gICAgICAxNzAsXG4gICAgICAxMTUsXG4gICAgICA5MCxcbiAgICAgIDYxLFxuICAgICAgMTYsXG4gICAgICAxMTIsXG4gICAgICAyOSxcbiAgICAgIDExNixcbiAgICAgIDk1LFxuICAgICAgMjA4LFxuICAgICAgMjEsXG4gICAgICAyNDMsXG4gICAgICAyMzcsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMjM5LFxuICAgICAgNDksXG4gICAgICAxNDEsXG4gICAgICAxODgsXG4gICAgICAyNDAsXG4gICAgICAyMixcbiAgICAgIDE3NCxcbiAgICAgIDE1NyxcbiAgICAgIDI0MixcbiAgICAgIDEyLFxuICAgICAgMjI5LFxuICAgICAgOTMsXG4gICAgICAxNzEsXG4gICAgICAyMTYsXG4gICAgICAxMDIsXG4gICAgICAxOCxcbiAgICAgIDIyNixcbiAgICAgIDI0LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjg1RE1aTDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQyNzU4MjI3Mzo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJlYXV0aWZ1bFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3MTcxNTA5MTI5Mjc4OjU0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01Uc2kvNEZFS0swdDdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSjcwOU0vZjdyZjJaS0FRbmhPbWxBUnhOK3Bldkg3aWdGYUwvM2RCaWpqND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHK056ZHZPdWdCam9ibzZJb2RUNjBlSEplNEZ4T2pxc3lhN3RZRXk2RGdaMHRxcUx5eXpxYWNLdHBNWDRMdm1DQ2EwMlhBakx0OHZPZjJuSy92d0dCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXbWxwSlp3RjZCNVpYeEZZSnNURE40R0tsbXE2U3NyUXY4VTRoQ09TKzhmVGZDY3hlVmZud1dNRFZTTXBvSGl1NzFjSW9zelNZbWMzRDFoWTlhZzBpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0Mjc1ODIyNzM6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2Njk2MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIalBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhqUC5qc29uIjogIntcImtleURhdGFcIjpcIlpLUWNjYXBvTThtaXVSb0tna3hXOG1GeTRjcGVIK2FHejIySGQvM0FoWTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwNjYxMjU0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjY3ODQ4OTgzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
