# Oracle compute instance creation script

A JS script that continuously attempts to create an Oracle free tier compute instance.

## How to use

1. Follow the steps at https://www.mastarcheeze.com/blog/minecraft-server-on-oracle-cloud/
2. When creating the compute instance, fill it out until you get to "create" then open dev tools (press F12), and select the 'console' tab
3. Paste in the contents of [script.js](/script.js) into the console and press enter
4. Close dev tools, make sure your computer doesn't go to sleep, and pray for the next few hours

## Notes
**DO NOT CLOSE THE WINDOW!**

Filter logs with '***' to only show outputs from this script.

It's advised to close dev tools while the script is running, as over long periods of time it may crash (Oracle's fault).

You can change the interval duration between clicks on the fly by changing the value of the variable `INTERVAL_DURATION` - default is 30 (seconds).
