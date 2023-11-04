/** Header settings for different routes in the application.
 * @type {object}
 */
export const HEADER_SETTINGS = {
    '/': {
        pageTitle: 'Create Employee',
        link: { content: 'View Current Employees', to: '/employees' },
    },
    '/employees': {
        pageTitle: 'Current Employees',
        link: { content: 'Create Employee', to: '/' },
    },
}
