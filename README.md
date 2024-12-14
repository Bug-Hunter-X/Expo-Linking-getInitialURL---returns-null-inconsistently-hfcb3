# Expo Linking.getInitialURL() Inconsistency Bug

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API. The method inconsistently returns `null`, even when the app is launched via a deep link. This makes it difficult to handle deep links reliably during app startup.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app on an iOS or Android simulator or device.
4. Open a deep link to the app (replace `your-deep-link` with an actual deep link). Observe that `getInitialURL` may return null in some cases but not in others, even in seemingly identical instances.

## Expected Behavior

`Linking.getInitialURL()` should consistently return the initial URL if the app was launched via a deep link.

## Actual Behavior

`Linking.getInitialURL()` returns `null` intermittently, even when a deep link successfully opened the app.

## Solution

The `App.fixed.js` file demonstrates a possible workaround by using `Linking.addEventListener` to monitor URL changes. This approach ensures that even if `getInitialURL()` returns null, the app can still handle the deep link once the event is fired.  This still doesn't solve the core problem, but it provides a more robust solution.

## Workaround

Use `Linking.addEventListener` in addition to `getInitialURL` to capture the deep link. This method will always fire if a deep link launches the app. However, the `getInitialURL()` issue should be addressed by Expo to ensure consistent behavior.