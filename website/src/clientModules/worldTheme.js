/**
 * Client module that sets data-doc-world attribute on <html>
 * based on the current URL path, enabling world-specific CSS colors.
 */
function setWorldFromPath() {
    const path = window.location.pathname;
    const match = path.match(/\/world-(\d+)\//);
    if (match) {
        document.documentElement.setAttribute('data-doc-world', match[1]);
    }
    else {
        document.documentElement.removeAttribute('data-doc-world');
    }
}
const module = {
    onRouteDidUpdate() {
        setWorldFromPath();
    },
};
export default module;
