export default function determineApiHost(environment) {
console.log("Environment" + environment);

    switch(environment) {
        case 'DEV': return 'http://localhost:3001';
        case 'STAGING': return '<YOUR BACKEND HOST URL HERE>';
        case 'PROD': return '<YOUR BACKEND HOST URL HERE>';
        default: throw new Error('ENVIRONMENT NOT CONFIGURED in determineAPIHost.js');
    }
}