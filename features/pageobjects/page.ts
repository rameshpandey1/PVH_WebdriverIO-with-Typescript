/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`http://nl.tommy.com/${path}`)
    }

    public closeBrowser () {
       //return browser.closeWindow();
         
    }
}
export default new Page();

