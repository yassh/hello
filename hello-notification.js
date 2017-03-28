// https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/DisplayNotifications.html
const app = Application.currentApplication();
app.includeStandardAdditions = true;
app.displayNotification('こんにちは！');
